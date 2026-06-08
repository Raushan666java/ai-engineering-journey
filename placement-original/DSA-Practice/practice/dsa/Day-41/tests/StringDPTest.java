package dsa.day41.tests;

import dsa.day41.StringDP;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class StringDPTest {

    @Test
    public void testPalindromePartitioning() {
        String s = "aab";
        int expected = 1; // 'aa'|'b'
        assertEquals(expected, StringDP.minCut(s));
    }

    @Test
    public void testDistinctSubsequences() {
        String s = "rabbbit";
        String t = "rabbit";
        assertEquals(3, StringDP.numDistinct(s, t));
    }

    @Test
    public void testEditDistance() {
        assertEquals(3, StringDP.minDistance("horse", "ros"));
    }
}
