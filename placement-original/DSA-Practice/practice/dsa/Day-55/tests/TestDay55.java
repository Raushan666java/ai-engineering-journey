package dsa.day55.tests;

import dsa.day55.BTree;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.util.*;

public class TestDay55 {

    @Test
    public void testInsertAndSearch() {
        BTree t = new BTree(3); // min degree 3
        int[] vals = {10, 20, 5, 6, 12, 30, 7, 17};
        for (int v : vals) t.insert(v);
        for (int v : vals) assertTrue(t.search(v), "Should find inserted value: " + v);
        assertFalse(t.search(99));
    }

    @Test
    public void testInorderOrder() {
        BTree t = new BTree(2);
        int[] vals = {50, 20, 70, 10, 30, 60, 80};
        for (int v : vals) t.insert(v);
        List<Integer> list = t.toList();
        List<Integer> expected = Arrays.asList(10,20,30,50,60,70,80);
        assertEquals(expected, list);
    }

    @Test
    public void testLargeInsert() {
        BTree t = new BTree(4);
        for (int i=1;i<=1000;i++) t.insert(i);
        for (int i=1;i<=1000;i++) assertTrue(t.search(i));
        List<Integer> list = t.toList();
        assertEquals(1000, list.size());
        assertEquals(1, list.get(0)); assertEquals(1000, list.get(list.size()-1));
    }
}
