public class tree_problems {
    static int maxDepth(Node root) {
        if (root == null) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
    static class Node { int val; Node left, right; Node(int x){val=x;} }
    public static void main(String[] args) {
        Node root = new Node(1); root.left = new Node(2); root.right = new Node(3);
        root.left.left = new Node(4); root.left.right = new Node(5);
        System.out.println("Max depth: " + maxDepth(root));
    }
}
