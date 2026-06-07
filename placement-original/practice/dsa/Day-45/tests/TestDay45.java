package dsa.day45.tests;

import dsa.day45.TrieDataStructure;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TestDay45 {

    @Test
    public void testBasicTrieOperations() {
        TrieDataStructure.Trie trie = new TrieDataStructure.Trie();
        trie.insert("apple");
        assertTrue(trie.search("apple"));
        assertFalse(trie.search("app"));
        assertTrue(trie.startsWith("app"));
    }

    @Test
    public void testWildcardSearch() {
        TrieDataStructure.WordDictionary wd = new TrieDataStructure.WordDictionary();
        wd.addWord("bad");
        wd.addWord("dad");
        assertTrue(wd.search(".ad"));
        assertFalse(wd.search("...x"));
    }
}
