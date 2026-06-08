package backtracking.questions;

/*
 * 9. RESTORE IP ADDRESSES (LeetCode 93)
 *
 * Problem Statement:
 * Given a string s containing only digits, return all possible valid IP addresses
 * that can be obtained from s. A valid IP address consists of exactly four integers
 * (each integer is between 0 and 255) separated by single dots and cannot have leading zeros.
 *
 * Conceptual Understanding:
 * - Split string into 4 parts for IP address
 * - Each part must be valid number (0-255) with no leading zeros
 * - Use backtracking to try different split positions
 * - Validate each part as we build the IP
 * - Base case: when we have 4 valid parts and used entire string
 *
 * Time Complexity: O(3^4) = O(81) since each part can be 1-3 digits
 * Space Complexity: O(1) excluding result storage
 */

import java.util.*;

class RestoreIPAddresses9 {

    // Method 1: Basic backtracking approach
    public List<String> restoreIpAddresses(String s) {
        List<String> result = new ArrayList<>();
        if (s == null || s.length() < 4 || s.length() > 12) {
            return result;
        }

        backtrack(s, 0, new ArrayList<>(), result);
        return result;
    }

    private void backtrack(String s, int start, List<String> current, List<String> result) {
        // Base case: 4 parts and used entire string
        if (current.size() == 4) {
            if (start == s.length()) {
                result.add(String.join(".", current));
            }
            return;
        }

        // Try 1 to 3 digits for current part
        for (int len = 1; len <= 3 && start + len <= s.length(); len++) {
            String part = s.substring(start, start + len);

            // Validate the part
            if (isValidPart(part)) {
                current.add(part);
                backtrack(s, start + len, current, result);
                current.remove(current.size() - 1); // backtrack
            }
        }
    }

    private boolean isValidPart(String part) {
        // Check for leading zeros (except for "0")
        if (part.length() > 1 && part.charAt(0) == '0') {
            return false;
        }

        // Check range 0-255
        int num = Integer.parseInt(part);
        return num >= 0 && num <= 255;
    }

    // Method 2: Iterative approach
    public List<String> restoreIpAddressesIterative(String s) {
        List<String> result = new ArrayList<>();
        if (s == null || s.length() < 4 || s.length() > 12) {
            return result;
        }

        int n = s.length();

        // Try all possible combinations of lengths for 4 parts
        for (int a = 1; a <= 3; a++) {
            for (int b = 1; b <= 3; b++) {
                for (int c = 1; c <= 3; c++) {
                    for (int d = 1; d <= 3; d++) {
                        if (a + b + c + d == n) {
                            String part1 = s.substring(0, a);
                            String part2 = s.substring(a, a + b);
                            String part3 = s.substring(a + b, a + b + c);
                            String part4 = s.substring(a + b + c, n);

                            if (isValidPart(part1) && isValidPart(part2) &&
                                isValidPart(part3) && isValidPart(part4)) {
                                result.add(part1 + "." + part2 + "." + part3 + "." + part4);
                            }
                        }
                    }
                }
            }
        }

        return result;
    }

    // Method 3: Count total valid IP addresses
    public int countValidIPs(String s) {
        if (s == null || s.length() < 4 || s.length() > 12) {
            return 0;
        }

        return countBacktrack(s, 0, 0);
    }

    private int countBacktrack(String s, int start, int parts) {
        if (parts == 4) {
            return start == s.length() ? 1 : 0;
        }

        int count = 0;
        for (int len = 1; len <= 3 && start + len <= s.length(); len++) {
            String part = s.substring(start, start + len);
            if (isValidPart(part)) {
                count += countBacktrack(s, start + len, parts + 1);
            }
        }
        return count;
    }

    // Method 4: Get IP addresses with specific constraints
    public List<String> restoreIpAddressesConstrained(String s, int minValue, int maxValue) {
        List<String> result = new ArrayList<>();
        if (s == null || s.length() < 4 || s.length() > 12) {
            return result;
        }

        backtrackConstrained(s, 0, new ArrayList<>(), result, minValue, maxValue);
        return result;
    }

    private void backtrackConstrained(String s, int start, List<String> current,
                                    List<String> result, int minValue, int maxValue) {
        if (current.size() == 4) {
            if (start == s.length()) {
                result.add(String.join(".", current));
            }
            return;
        }

        for (int len = 1; len <= 3 && start + len <= s.length(); len++) {
            String part = s.substring(start, start + len);
            if (isValidPartConstrained(part, minValue, maxValue)) {
                current.add(part);
                backtrackConstrained(s, start + len, current, result, minValue, maxValue);
                current.remove(current.size() - 1);
            }
        }
    }

    private boolean isValidPartConstrained(String part, int minValue, int maxValue) {
        if (part.length() > 1 && part.charAt(0) == '0') {
            return false;
        }

        int num = Integer.parseInt(part);
        return num >= minValue && num <= maxValue;
    }

    // Method 5: Find all possible IP formats
    public List<String> getAllIPFormats(String s) {
        List<String> result = new ArrayList<>();
        if (s == null || s.length() < 4 || s.length() > 12) {
            return result;
        }

        // Different IP formats (decimal, binary, hex would be more complex)
        // For now, just return standard decimal IPs
        return restoreIpAddresses(s);
    }

    // Method 6: Validate IP address format
    public boolean isValidIPAddress(String ip) {
        if (ip == null || ip.isEmpty()) return false;

        String[] parts = ip.split("\\.");
        if (parts.length != 4) return false;

        for (String part : parts) {
            if (!isValidIPPart(part)) return false;
        }

        return true;
    }

    private boolean isValidIPPart(String part) {
        if (part.isEmpty()) return false;

        // Check for leading zeros
        if (part.length() > 1 && part.charAt(0) == '0') return false;

        try {
            int num = Integer.parseInt(part);
            return num >= 0 && num <= 255;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    // Method 7: Performance analysis
    public static class IPAnalysis {
        String input;
        int length;
        int validIPs;
        long timeMs;
        double avgPartsPerIP;
        Set<Integer> partLengths;

        public IPAnalysis(String input, int length, int validIPs, long timeMs,
                         double avgPartsPerIP, Set<Integer> partLengths) {
            this.input = input;
            this.length = length;
            this.validIPs = validIPs;
            this.timeMs = timeMs;
            this.avgPartsPerIP = avgPartsPerIP;
            this.partLengths = partLengths;
        }

        @Override
        public String toString() {
            return String.format("Input: %s (len=%d), IPs: %d, Time: %dms, AvgParts: %.2f, Lengths: %s",
                               input, length, validIPs, timeMs, avgPartsPerIP, partLengths);
        }
    }

    public IPAnalysis analyzeIPAddresses(String s) {
        long startTime = System.nanoTime();
        List<String> ips = restoreIpAddresses(s);
        long timeMs = (System.nanoTime() - startTime) / 1_000_000;

        int validIPs = ips.size();

        double avgParts = 0;
        Set<Integer> partLengths = new HashSet<>();

        if (!ips.isEmpty()) {
            int totalParts = 0;
            for (String ip : ips) {
                String[] parts = ip.split("\\.");
                totalParts += parts.length;
                for (String part : parts) {
                    partLengths.add(part.length());
                }
            }
            avgParts = (double) totalParts / ips.size();
        }

        return new IPAnalysis(s, s.length(), validIPs, timeMs, avgParts, partLengths);
    }

    // Method 8: Get IP statistics
    public static class IPStats {
        int totalIPs;
        int minValue;
        int maxValue;
        double avgValue;
        Map<String, Integer> prefixFrequency;

        public IPStats(int totalIPs, int minValue, int maxValue, double avgValue,
                      Map<String, Integer> prefixFrequency) {
            this.totalIPs = totalIPs;
            this.minValue = minValue;
            this.maxValue = maxValue;
            this.avgValue = avgValue;
            this.prefixFrequency = prefixFrequency;
        }

        @Override
        public String toString() {
            return String.format("Total: %d, Values: %d-%d (avg: %.1f), Prefixes: %s",
                               totalIPs, minValue, maxValue, avgValue, prefixFrequency);
        }
    }

    public IPStats getIPStats(String s) {
        List<String> ips = restoreIpAddresses(s);

        if (ips.isEmpty()) {
            return new IPStats(0, 0, 0, 0, new HashMap<>());
        }

        int totalIPs = ips.size();
        int minVal = Integer.MAX_VALUE;
        int maxVal = Integer.MIN_VALUE;
        int totalVal = 0;
        Map<String, Integer> prefixFreq = new HashMap<>();

        for (String ip : ips) {
            String[] parts = ip.split("\\.");
            for (String part : parts) {
                int val = Integer.parseInt(part);
                minVal = Math.min(minVal, val);
                maxVal = Math.max(maxVal, val);
                totalVal += val;

                // Count first digit frequency
                String prefix = part.substring(0, 1);
                prefixFreq.put(prefix, prefixFreq.getOrDefault(prefix, 0) + 1);
            }
        }

        double avgVal = (double) totalVal / (totalIPs * 4);

        return new IPStats(totalIPs, minVal, maxVal, avgVal, prefixFreq);
    }

    // Method 9: Restore IP with specific octet constraints
    public List<String> restoreIPWithOctetConstraints(String s, int[] minOctets, int[] maxOctets) {
        List<String> result = new ArrayList<>();
        if (s == null || s.length() < 4 || s.length() > 12 || minOctets.length != 4 || maxOctets.length != 4) {
            return result;
        }

        backtrackOctetConstraints(s, 0, new ArrayList<>(), result, minOctets, maxOctets, 0);
        return result;
    }

    private void backtrackOctetConstraints(String s, int start, List<String> current,
                                         List<String> result, int[] minOctets, int[] maxOctets, int octetIndex) {
        if (octetIndex == 4) {
            if (start == s.length()) {
                result.add(String.join(".", current));
            }
            return;
        }

        for (int len = 1; len <= 3 && start + len <= s.length(); len++) {
            String part = s.substring(start, start + len);
            if (isValidOctet(part, minOctets[octetIndex], maxOctets[octetIndex])) {
                current.add(part);
                backtrackOctetConstraints(s, start + len, current, result, minOctets, maxOctets, octetIndex + 1);
                current.remove(current.size() - 1);
            }
        }
    }

    private boolean isValidOctet(String part, int minVal, int maxVal) {
        if (part.length() > 1 && part.charAt(0) == '0') return false;

        try {
            int num = Integer.parseInt(part);
            return num >= minVal && num <= maxVal;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    // Method 10: Find IPs in specific ranges
    public List<String> findIPsInRange(String s, String startRange, String endRange) {
        List<String> allIPs = restoreIpAddresses(s);
        List<String> filtered = new ArrayList<>();

        for (String ip : allIPs) {
            if (isIPInRange(ip, startRange, endRange)) {
                filtered.add(ip);
            }
        }

        return filtered;
    }

    private boolean isIPInRange(String ip, String startRange, String endRange) {
        // Simple string comparison for demo
        return ip.compareTo(startRange) >= 0 && ip.compareTo(endRange) <= 0;
    }

    // Method 11: Generate all possible IP combinations (including invalid ones for analysis)
    public List<String> generateAllIPCombinations(String s) {
        List<String> result = new ArrayList<>();
        if (s == null || s.length() < 4 || s.length() > 12) {
            return result;
        }

        generateAllCombinations(s, 0, new ArrayList<>(), result);
        return result;
    }

    private void generateAllCombinations(String s, int start, List<String> current, List<String> result) {
        if (current.size() == 4) {
            if (start == s.length()) {
                result.add(String.join(".", current));
            }
            return;
        }

        for (int len = 1; len <= 3 && start + len <= s.length(); len++) {
            String part = s.substring(start, start + len);
            current.add(part);
            generateAllCombinations(s, start + len, current, result);
            current.remove(current.size() - 1);
        }
    }

    // Method 12: Advanced IP restoration with validation
    public List<String> restoreIPAdvanced(String s, boolean strictValidation,
                                        boolean allowLeadingZeros, int maxValue) {
        List<String> result = new ArrayList<>();
        if (s == null || s.length() < 4 || s.length() > 12) {
            return result;
        }

        backtrackAdvanced(s, 0, new ArrayList<>(), result, strictValidation, allowLeadingZeros, maxValue);
        return result;
    }

    private void backtrackAdvanced(String s, int start, List<String> current, List<String> result,
                                 boolean strictValidation, boolean allowLeadingZeros, int maxValue) {
        if (current.size() == 4) {
            if (start == s.length()) {
                result.add(String.join(".", current));
            }
            return;
        }

        for (int len = 1; len <= 3 && start + len <= s.length(); len++) {
            String part = s.substring(start, start + len);
            if (isValidAdvanced(part, strictValidation, allowLeadingZeros, maxValue)) {
                current.add(part);
                backtrackAdvanced(s, start + len, current, result, strictValidation, allowLeadingZeros, maxValue);
                current.remove(current.size() - 1);
            }
        }
    }

    private boolean isValidAdvanced(String part, boolean strictValidation,
                                  boolean allowLeadingZeros, int maxValue) {
        if (!allowLeadingZeros && part.length() > 1 && part.charAt(0) == '0') {
            return false;
        }

        try {
            int num = Integer.parseInt(part);
            if (strictValidation) {
                return num >= 0 && num <= maxValue;
            } else {
                return num >= 0 && num <= 255; // Standard IP validation
            }
        } catch (NumberFormatException e) {
            return false;
        }
    }

    // Test cases
    public static void main(String[] args) {
        RestoreIPAddresses9 solution = new RestoreIPAddresses9();

        // Test Case 1: Basic IP restoration
        System.out.println("=== Basic IP Address Restoration ===");
        String s1 = "25525511135";
        List<String> result1 = solution.restoreIpAddresses(s1);
        System.out.println("Input: " + s1);
        System.out.println("Valid IPs: " + result1);

        // Test Case 2: Iterative approach
        List<String> result2 = solution.restoreIpAddressesIterative(s1);
        System.out.println("Iterative: " + result2);

        // Test Case 3: Count valid IPs
        int count = solution.countValidIPs(s1);
        System.out.println("Total valid IPs: " + count);

        // Test Case 4: With constraints
        List<String> constrained = solution.restoreIpAddressesConstrained(s1, 0, 200);
        System.out.println("Constrained (0-200): " + constrained);

        // Test Case 5: Validate IP format
        boolean valid = solution.isValidIPAddress("192.168.1.1");
        System.out.println("192.168.1.1 is valid: " + valid);
        boolean invalid = solution.isValidIPAddress("192.168.01.1");
        System.out.println("192.168.01.1 is valid: " + invalid);

        // Test Case 6: Performance analysis
        IPAnalysis analysis = solution.analyzeIPAddresses(s1);
        System.out.println("Analysis: " + analysis);

        // Test Case 7: IP statistics
        IPStats stats = solution.getIPStats(s1);
        System.out.println("Stats: " + stats);

        // Test Case 8: With octet constraints
        int[] minOctets = {192, 168, 0, 0};
        int[] maxOctets = {192, 168, 255, 255};
        List<String> octetConstrained = solution.restoreIPWithOctetConstraints(s1, minOctets, maxOctets);
        System.out.println("Octet constrained: " + octetConstrained);

        // Test Case 9: All combinations (including invalid)
        List<String> allCombos = solution.generateAllIPCombinations("123");
        System.out.println("All combinations for '123': " + allCombos.size());

        // Test Case 10: Advanced restoration
        List<String> advanced = solution.restoreIPAdvanced(s1, true, false, 255);
        System.out.println("Advanced: " + advanced);

        // Test Case 11: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Empty: " + solution.restoreIpAddresses(""));
        System.out.println("Too short: " + solution.restoreIpAddresses("1"));
        System.out.println("Too long: " + solution.restoreIpAddresses("1234567890123"));
        System.out.println("All zeros: " + solution.restoreIpAddresses("0000"));
        System.out.println("Leading zeros: " + solution.restoreIpAddresses("010010"));
    }
}