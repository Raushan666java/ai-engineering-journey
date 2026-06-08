import java.util.*;

public class TriesBasics {
    static class TrieNode { boolean end=false; Map<Character, TrieNode> next = new HashMap<>(); int prefixCount=0; }
    static class Trie { TrieNode root = new TrieNode();
        void insert(String s) { TrieNode cur = root; cur.prefixCount++; for (char c: s.toCharArray()) { cur.next.putIfAbsent(c, new TrieNode()); cur = cur.next.get(c); cur.prefixCount++; } cur.end = true; }
        boolean search(String s) { TrieNode cur = root; for (char c: s.toCharArray()) { cur = cur.next.get(c); if (cur==null) return false; } return cur.end; }
        boolean startsWith(String p) { TrieNode cur = root; for (char c: p.toCharArray()) { cur = cur.next.get(c); if (cur==null) return false; } return true; }
        int countPrefix(String p) { TrieNode cur = root; for (char c: p.toCharArray()) { cur = cur.next.get(c); if (cur==null) return 0; } return cur.prefixCount; }
    }
    public static void main(String[] args) {
        boolean ci=false; if (args!=null) for (String a: args) if ("--ci".equals(a)||"--test".equals(a)) ci=true;
        Trie t = new Trie(); String[] words = {"apple","app","apply","bat","batch"};
        for (String w: words) t.insert(w);
        System.out.println("search 'app' -> " + t.search("app"));
        System.out.println("search 'apple' -> " + t.search("apple"));
        System.out.println("startsWith 'ap' -> " + t.startsWith("ap"));
        System.out.println("countPrefix 'app' -> " + t.countPrefix("app"));

        if (ci) {
            boolean ok = true;
            ok &= t.search("app");
            ok &= t.search("apple");
            ok &= t.startsWith("ap");
            ok &= (t.countPrefix("app") == 3);
            if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1); }
        }
    }
}
