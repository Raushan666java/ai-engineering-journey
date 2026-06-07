package dsa.day53.tests;

import dsa.day53.GraphAdvanced;
import dsa.day53.GraphAdvanced.Edge;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.util.*;

public class TestDay53 {

    @Test
    public void testDijkstraSimple() {
        int[][] edges = {{0,1,4},{0,2,1},{2,1,2},{1,3,1},{2,3,5}};
        Map<Integer, List<Edge>> g = GraphAdvanced.buildDirected(4, edges);
        long[] dist = GraphAdvanced.dijkstra(g, 0);
        assertEquals(0, dist[0]);
        assertEquals(3, dist[1]);
        assertEquals(1, dist[2]);
        assertEquals(4, dist[3]);
    }

    @Test
    public void testBellmanFordNeg() {
        int n = 3;
        int[][] edges = {{0,1,1},{1,2,-2},{2,0,1}}; // no negative cycle
        GraphAdvanced.BFResult r = GraphAdvanced.bellmanFord(n, edges, 0);
        assertFalse(r.hasNegCycle);
        assertTrue(r.dist[2] < Long.MAX_VALUE/4);
    }

    @Test
    public void testTopoSort() {
        int n = 4; int[][] edges = {{0,1},{0,2},{1,3},{2,3}};
        List<Integer> order = GraphAdvanced.topoSort(n, edges);
        assertEquals(4, order.size());
        assertTrue(order.indexOf(0) < order.indexOf(3));
    }

    @Test
    public void testSCC() {
        int[][] edges = {{0,1,1},{1,2,1},{2,0,1},{2,3,1}};
        Map<Integer,List<Edge>> g = GraphAdvanced.buildDirected(4, edges);
        List<List<Integer>> sccs = GraphAdvanced.stronglyConnectedComponents(g);
        // one SCC of size 3 and another of size 1
        boolean found3 = sccs.stream().anyMatch(c -> c.size()==3);
        assertTrue(found3);
    }

    @Test
    public void testBridgesAndAPs() {
        int n = 5; int[][] edges = {{0,1},{1,2},{2,0},{1,3},{3,4}};
        GraphAdvanced.CutResult res = GraphAdvanced.findBridgesAndArticulation(n, edges);
        assertTrue(res.bridges.size() >= 1);
        assertTrue(res.articulationPoints.contains(1));
    }

    @Test
    public void testMaxFlow() {
        int n = 4; int[][] caps = {{0,1,3},{0,2,2},{1,2,1},{1,3,2},{2,3,4}};
        long f = GraphAdvanced.maxFlow(n, caps, 0, 3);
        assertEquals(4, f);
    }
}
