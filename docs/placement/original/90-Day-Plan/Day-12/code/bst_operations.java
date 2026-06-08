class BSTNode { int val; BSTNode left, right; BSTNode(int x){val=x;} }

public class bst_operations {
    static BSTNode insert(BSTNode root, int x) {
        if (root == null) return new BSTNode(x);
        if (x < root.val) root.left = insert(root.left, x);
        else if (x > root.val) root.right = insert(root.right, x);
        return root;
    }
    static boolean search(BSTNode root, int x) {
        if (root == null) return false;
        if (root.val == x) return true;
        return x < root.val ? search(root.left, x) : search(root.right, x);
    }
    public static void main(String[] args) {
        BSTNode root = null;
        int[] arr = {8,3,10,1,6,14,4,7};
        for (int x: arr) root = insert(root, x);
        System.out.println("Search 6: " + search(root, 6));
        System.out.println("Search 5: " + search(root, 5));
    }
}
