package dsa.day50.tests;

import dsa.day50.Backtracking;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TestDay50 {

    @Test
    public void testNQueensCount() {
        assertEquals(2, Backtracking.totalNQueens(4));
    }

    @Test
    public void testWordSearch() {
        char[][] board = {{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}};
        assertTrue(Backtracking.exist(board, "ABCCED"));
    }
}
