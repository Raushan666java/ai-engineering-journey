import java.util.*;

class Node {
    int val;
    Node left, right;
    Node(int x) { val = x; left = right = null; }
}

public class binary_tree_basics {
    public static void levelOrder(Node root) {
        if (root == null) return;
        Queue<Node> q = new LinkedList<>();
        q.offer(root);
        while (!q.isEmpty()) {
            Node node = q.poll();
            System.out.print(node.val + " ");
            if (node.left != null) q.offer(node.left);
            if (node.right != null) q.offer(node.right);
        }
        System.out.println();
    }

    public static void main(String[] args) {
        // build sample tree
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        root.right.left = new Node(6);
        System.out.print("Level order: ");
        levelOrder(root);
    }
}
