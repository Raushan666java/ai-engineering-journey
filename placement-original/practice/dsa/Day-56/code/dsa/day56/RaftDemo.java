package dsa.day56;

import java.util.*;
import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.*;

/**
 * Day 56: Raft Consensus Simulation (deterministic)
 *
 * This is a simplified, in-memory Raft simulation intended for learning and tests.
 * - Supports leader election and simple log replication (no persistence, no real networking).
 * - Timeouts and randomized election delays are injectable for deterministic tests.
 *
 * Not a production-ready Raft implementation; designed for clarity and testability.
 */
public class RaftDemo {

    public enum State { FOLLOWER, CANDIDATE, LEADER }

    public static class LogEntry { public final long term; public final String command; public LogEntry(long term, String cmd){this.term=term;this.command=cmd;} }

    public static class Node {
        public final int id;
        public State state = State.FOLLOWER;
        public long currentTerm = 0;
        public Integer votedFor = null;
        public final List<LogEntry> log = new ArrayList<>();
        public int commitIndex = -1;

        // Simulation wiring
        private final Cluster cluster;
        private final Random rand; // injected for deterministic behavior
        private final long electionTimeoutMs; // deterministic value

        public Node(int id, Cluster cluster, Random rand, long electionTimeoutMs) {
            this.id = id; this.cluster = cluster; this.rand = rand; this.electionTimeoutMs = electionTimeoutMs;
        }

        // Called periodically by simulation driver to progress time
        public void tick(long nowMs) {
            // For this simple simulation, election triggers are driven by Cluster (no per-node timers)
        }

        // Candidate starts election
        public void startElection() {
            currentTerm += 1; state = State.CANDIDATE; votedFor = id;
            int votes = 1; // vote for self
            for (Node n : cluster.nodes) if (n.id != id) {
                boolean g = n.onRequestVote(currentTerm, id, log.size()-1, lastTerm());
                if (g) votes++;
            }
            if (votes > cluster.nodes.size() / 2) {
                becomeLeader();
            }
        }

        private long lastTerm() { return log.isEmpty() ? 0 : log.get(log.size()-1).term; }

        // RequestVote RPC handler
        public boolean onRequestVote(long term, int candidateId, int lastLogIndex, long lastLogTerm) {
            if (term > currentTerm) { currentTerm = term; state = State.FOLLOWER; votedFor = null; }
            if (term < currentTerm) return false;
            if (votedFor == null || votedFor == candidateId) {
                // candidate's log up-to-date check: simplified
                votedFor = candidateId; return true;
            }
            return false;
        }

        // Become leader
        private void becomeLeader() {
            state = State.LEADER;
            // Initialize leader volatile state if needed (nextIndex, matchIndex) omitted for brevity
            // Immediately replicate a no-op entry to assert leadership (optional)
            appendEntry(new LogEntry(currentTerm, "<noop>"));
        }

        // AppendEntry RPC from leader
        public boolean onAppendEntries(long term, int leaderId, int prevLogIndex, long prevLogTerm, List<LogEntry> entries, int leaderCommit) {
            if (term < currentTerm) return false;
            currentTerm = term; state = State.FOLLOWER; votedFor = leaderId; // reset
            // Simplified: accept entries if prevLogIndex matches current log size-1
            if (prevLogIndex >= 0) {
                if (prevLogIndex >= log.size()) return false;
                if (log.get(prevLogIndex).term != prevLogTerm) {
                    // conflict: delete from prevLogIndex onward
                    while (log.size() > prevLogIndex) log.remove(log.size()-1);
                }
            }
            log.addAll(entries);
            if (leaderCommit > commitIndex) commitIndex = Math.min(leaderCommit, log.size()-1);
            return true;
        }

        public void appendEntry(LogEntry e) { log.add(e); }

        // Leader calls to replicate an entry to followers
        public boolean replicate(String command) {
            if (state != State.LEADER) throw new IllegalStateException("not leader");
            LogEntry e = new LogEntry(currentTerm, command); appendEntry(e);
            int success = 1;
            for (Node n : cluster.nodes) if (n.id != id) {
                boolean ok = n.onAppendEntries(currentTerm, id, log.size()-2, e.term, Arrays.asList(e), commitIndex);
                if (ok) success++;
            }
            if (success > cluster.nodes.size()/2) {
                commitIndex = log.size()-1; return true;
            }
            return false;
        }
    }

    // A lightweight cluster driver to run deterministic rounds
    public static class Cluster {
        public final List<Node> nodes = new ArrayList<>();
        private final Random rand;

        public Cluster(int n, long seed, long electionTimeoutMs) {
            this.rand = new Random(seed);
            for (int i=0;i<n;i++) nodes.add(new Node(i, this, new Random(seed + i + 1), electionTimeoutMs));
        }

        // Try to elect a leader by triggering elections on nodes in deterministic order
        public Optional<Node> electLeader() {
            for (Node n : nodes) {
                n.startElection();
                if (n.state == State.LEADER) return Optional.of(n);
            }
            return Optional.empty();
        }

        // Find current leader (if any)
        public Optional<Node> currentLeader() { return nodes.stream().filter(n->n.state==State.LEADER).findFirst(); }

        // Simulate leader replication
        public boolean leaderReplicate(String command) {
            Optional<Node> leader = currentLeader(); if (!leader.isPresent()) return false;
            return leader.get().replicate(command);
        }
    }

    // Small deterministic scenario runner for manual checks
    public static void main(String[] args) {
        Cluster c = new Cluster(3, 42L, 150L);
        Optional<Node> leader = c.electLeader();
        System.out.println("Leader elected: " + (leader.isPresent() ? leader.get().id : "none"));
        if (leader.isPresent()) {
            leader.get().replicate("x=1");
            for (Node n : c.nodes) System.out.println("Node " + n.id + " log=" + n.log.size() + " commit=" + n.commitIndex);
        }
    }
}
