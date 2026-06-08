package dsa.day48.tests;

import dsa.day48.BitManipulation;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TestDay48 {

    @Test
    public void testHammingWeight() {
        assertEquals(3, BitManipulation.hammingWeight(0b1011));
    }

    @Test
    public void testSingleNumberXOR() {
        int[] arr = {4,1,2,1,2};
        assertEquals(4, BitManipulation.singleNumber(arr));
    }
}
