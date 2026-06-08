package com.banking.dsa;

import com.banking.model.Account;

public class AccountTree {
    private static class TreeNode {
        Account account;
        TreeNode left, right;
        
        TreeNode(Account acc) {
            this.account = acc;
        }
    }

    private TreeNode root;

    public void insert(Account acc) {
        root = insertRec(root, acc);
    }

    private TreeNode insertRec(TreeNode node, Account acc) {
        if (node == null) return new TreeNode(acc);
        
        int cmp = acc.getAccountNumber().compareTo(node.account.getAccountNumber());
        if (cmp < 0) {
            node.left = insertRec(node.left, acc);
        } else if (cmp > 0) {
            node.right = insertRec(node.right, acc);
        }
        return node;
    }
}