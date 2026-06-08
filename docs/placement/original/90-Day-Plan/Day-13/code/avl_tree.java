class AVLNode {
    int val, height;
    AVLNode left, right;
    AVLNode(int x) { val = x; height = 1; }
}

public class avl_tree {
    
    int height(AVLNode node) {
        return node == null ? 0 : node.height;
    }
    
    int getBalance(AVLNode node) {
        return node == null ? 0 : height(node.left) - height(node.right);
    }
    
    AVLNode rightRotate(AVLNode y) {
        AVLNode x = y.left;
        AVLNode T2 = x.right;
        x.right = y;
        y.left = T2;
        y.height = Math.max(height(y.left), height(y.right)) + 1;
        x.height = Math.max(height(x.left), height(x.right)) + 1;
        return x;
    }
    
    AVLNode leftRotate(AVLNode x) {
        AVLNode y = x.right;
        AVLNode T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height = Math.max(height(x.left), height(x.right)) + 1;
        y.height = Math.max(height(y.left), height(y.right)) + 1;
        return y;
    }
    
    AVLNode insert(AVLNode node, int val) {
        // Standard BST insertion
        if (node == null) return new AVLNode(val);
        if (val < node.val) node.left = insert(node.left, val);
        else if (val > node.val) node.right = insert(node.right, val);
        else return node; // Duplicates not allowed
        
        // Update height
        node.height = 1 + Math.max(height(node.left), height(node.right));
        
        // Get balance factor
        int balance = getBalance(node);
        
        // Left Left Case
        if (balance > 1 && val < node.left.val)
            return rightRotate(node);
        
        // Right Right Case
        if (balance < -1 && val > node.right.val)
            return leftRotate(node);
        
        // Left Right Case
        if (balance > 1 && val > node.left.val) {
            node.left = leftRotate(node.left);
            return rightRotate(node);
        }
        
        // Right Left Case
        if (balance < -1 && val < node.right.val) {
            node.right = rightRotate(node.right);
            return leftRotate(node);
        }
        
        return node;
    }
    
    void preOrder(AVLNode node) {
        if (node != null) {
            System.out.print(node.val + " ");
            preOrder(node.left);
            preOrder(node.right);
        }
    }
    
    public static void main(String[] args) {
        avl_tree tree = new avl_tree();
        AVLNode root = null;
        
        // Insert elements
        int[] vals = {10, 20, 30, 40, 50, 25};
        for (int val : vals) {
            root = tree.insert(root, val);
            System.out.println("Inserted " + val);
        }
        
        System.out.print("Preorder traversal: ");
        tree.preOrder(root);
        System.out.println();
    }
}
