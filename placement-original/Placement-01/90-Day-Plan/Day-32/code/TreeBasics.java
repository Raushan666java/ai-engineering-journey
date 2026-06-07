import java.util.*;

public class TreeBasics {
    static class Node { int val; Node left, right; Node(int v){ val=v;} }

    static Node buildSampleTree() {
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        root.right.right = new Node(6);
        return root;
    }

    public static List<Integer> preorder(Node root) {
        List<Integer> res = new ArrayList<>(); pre(root, res); return res;
    }
    private static void pre(Node r, List<Integer> out) { if (r==null) return; out.add(r.val); pre(r.left,out); pre(r.right,out); }

    public static List<Integer> inorder(Node root) { List<Integer> res=new ArrayList<>(); in(root,res); return res; }
    private static void in(Node r, List<Integer> out) { if (r==null) return; in(r.left,out); out.add(r.val); in(r.right,out); }

    public static List<Integer> postorder(Node root) { List<Integer> res=new ArrayList<>(); post(root,res); return res; }
    private static void post(Node r, List<Integer> out) { if (r==null) return; post(r.left,out); post(r.right,out); out.add(r.val); }

    public static List<Integer> bfs(Node root) { List<Integer> res=new ArrayList<>(); if (root==null) return res; Queue<Node> q = new LinkedList<>(); q.add(root); while(!q.isEmpty()){ Node n=q.poll(); res.add(n.val); if (n.left!=null) q.add(n.left); if (n.right!=null) q.add(n.right); } return res; }

    public static List<Integer> preorderIter(Node root) {
        List<Integer> out = new ArrayList<>(); if (root==null) return out; Deque<Node> st = new ArrayDeque<>(); st.push(root); while(!st.isEmpty()){ Node n=st.pop(); out.add(n.val); if (n.right!=null) st.push(n.right); if (n.left!=null) st.push(n.left); } return out; }

    // LCA using parent map and depths
    static Map<Integer,Integer> parent = new HashMap<>(); static Map<Integer,Integer> depth = new HashMap<>();
    static void buildParentDepth(Node root, int p, int d) { if (root==null) return; parent.put(root.val, p); depth.put(root.val, d); buildParentDepth(root.left, root.val, d+1); buildParentDepth(root.right, root.val, d+1); }
    static int lca(int a, int b) { if (!depth.containsKey(a) || !depth.containsKey(b)) return -1; while (depth.get(a) > depth.get(b)) a = parent.get(a); while (depth.get(b) > depth.get(a)) b = parent.get(b); while (a!=b) { a = parent.get(a); b=parent.get(b); } return a; }

    // Simple BST demo: insert, search, delete (no rebalancing)
    static class BST { Node root; void insert(int v){ root = insert(root, v);} Node insert(Node r, int v){ if (r==null) return new Node(v); if (v<r.val) r.left=insert(r.left,v); else r.right=insert(r.right,v); return r; }
        boolean contains(int v){ Node r=root; while(r!=null){ if (v==r.val) return true; if (v<r.val) r=r.left; else r=r.right;} return false; }
        Node delete(Node r, int v){ if (r==null) return null; if (v<r.val) r.left=delete(r.left,v); else if (v>r.val) r.right=delete(r.right,v); else { if (r.left==null) return r.right; if (r.right==null) return r.left; Node m=minNode(r.right); r.val = m.val; r.right = delete(r.right, m.val); } return r; }
        Node minNode(Node r){ while(r.left!=null) r=r.left; return r; }
        void delete(int v){ root=delete(root,v); }
        List<Integer> inorder(){ return inorder(root,new ArrayList<>()); } List<Integer> inorder(Node r, List<Integer> out){ if (r==null) return out; inorder(r.left,out); out.add(r.val); inorder(r.right,out); return out; }
    }

    public static void main(String[] args) {
        boolean ci=false; if (args!=null) for (String a: args) if ("--ci".equals(a)||"--test".equals(a)) ci=true;

        Node root = buildSampleTree();
        System.out.println("Preorder: " + preorder(root));
        System.out.println("Inorder: " + inorder(root));
        System.out.println("Postorder: " + postorder(root));
        System.out.println("BFS: " + bfs(root));
        System.out.println("Iterative Preorder: " + preorderIter(root));

        parent.clear(); depth.clear(); buildParentDepth(root, -1, 0);
        System.out.println("LCA(4,5) = " + lca(4,5) + " (expected 2)");
        System.out.println("LCA(4,6) = " + lca(4,6) + " (expected 1)");

        BST bst = new BST(); int[] vals = {5,2,8,1,4,6,9}; for (int v: vals) bst.insert(v);
        System.out.println("BST inorder: " + bst.inorder()); System.out.println("BST contains 4: " + bst.contains(4));
        bst.insert(7); System.out.println("After insert 7, contains 7: " + bst.contains(7)); bst.delete(2); System.out.println("After delete 2, inorder: " + bst.inorder());

        if (ci) {
            boolean ok = true;
            ok &= preorder(root).equals(Arrays.asList(1,2,4,5,3,6));
            ok &= inorder(root).equals(Arrays.asList(4,2,5,1,3,6));
            ok &= postorder(root).equals(Arrays.asList(4,5,2,6,3,1));
            ok &= bfs(root).equals(Arrays.asList(1,2,3,4,5,6));
            ok &= preorderIter(root).equals(Arrays.asList(1,2,4,5,3,6));
            ok &= (lca(4,5) == 2) && (lca(4,6) == 1);
            ok &= bst.contains(4) && bst.contains(7) && !bst.contains(2);
            if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1); }
        }
    }
}
