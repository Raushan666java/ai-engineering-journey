package com.banking;

public class Main {
    public static void main(String[] args) {
        System.out.println("Banking System Started!");
        
        // Add your banking logic here
        BankAccount account = new BankAccount("12345", 1000);
        account.deposit(500);
        System.out.println("Balance: $" + account.getBalance());
    }
}