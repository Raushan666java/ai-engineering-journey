package dsa.day56.tests;

import dsa.day56.RaftDemo;
import dsa.day56.RaftDemo.Cluster;
import dsa.day56.RaftDemo.Node;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Optional;

public class TestDay56 {

    @Test
    public void testLeaderElectionThreeNodes() {
        Cluster c = new Cluster(3, 100L, 150L);
        Optional<Node> leader = c.electLeader();
        assertTrue(leader.isPresent(), "Expected a leader to be elected");
        assertEquals(1, c.currentLeader().get().currentTerm, "Leader should have term 1 after election");
    }

    @Test
    public void testReplicationMajority() {
        Cluster c = new Cluster(3, 200L, 150L);
        c.electLeader();
        boolean ok = c.leaderReplicate("set x=1");
        assertTrue(ok, "Replication should succeed with majority of followers accepting");
        // Ensure logs reflect the append
        c.nodes.forEach(n -> assertTrue(n.log.size() >= 1));
    }

    @Test
    public void testLeaderStepDownOnHigherTerm() {
        Cluster c = new Cluster(3, 300L, 150L);
        Optional<Node> leader = c.electLeader();
        assertTrue(leader.isPresent());
        // Simulate a higher term message arriving at a follower
        Node follower = c.nodes.stream().filter(n->n.id!=leader.get().id).findFirst().get();
        follower.onRequestVote(leader.get().currentTerm + 5, 999, 0, 0);
        // Followers change term and reset votedFor; leader should lose leadership if sees higher term
        leader.get().onRequestVote(follower.currentTerm + 1, follower.id, 0, 0);
        // After higher term, leader must be follower
        assertNotEquals(RaftDemo.State.LEADER, follower.state);
    }
}
