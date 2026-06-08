package com.banking.dsa;

import com.banking.model.Transaction;

public class TransactionQueue {
    private static class Node {
        Transaction data;
        Node next;
        
        Node(Transaction data) {
            this.data = data;
        }
    }

    private Node front, rear;

    public void enqueue(Transaction t) {
        Node newNode = new Node(t);
        if (rear == null) {
            front = rear = newNode;
        } else {
            rear.next = newNode;
            rear = newNode;
        }
    }

    public Transaction dequeue() {
        if (front == null) return null;
        Transaction temp = front.data;
        front = front.next;
        if (front == null) rear = null;
        return temp;
    }

    public boolean isEmpty() {
        return front == null;
    }
}