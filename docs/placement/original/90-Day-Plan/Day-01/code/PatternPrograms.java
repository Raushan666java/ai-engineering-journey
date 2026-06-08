/**
 * Pattern Programs Collection
 * Day: 1 of 90
 * Purpose: Practice loops and logic building
 */

// ========== PATTERN 1: RIGHT TRIANGLE ==========
class Pattern1_RightTriangle {
    /**
     * Pattern:
     * *
     * **
     * ***
     * ****
     * *****
     */
    public static void print(int n) {
        System.out.println("=== Right Triangle ===");
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        System.out.println();
    }
}

// ========== PATTERN 2: INVERTED RIGHT TRIANGLE ==========
class Pattern2_InvertedTriangle {
    /**
     * Pattern:
     * *****
     * ****
     * ***
     * **
     * *
     */
    public static void print(int n) {
        System.out.println("=== Inverted Right Triangle ===");
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        System.out.println();
    }
}

// ========== PATTERN 3: PYRAMID ==========
class Pattern3_Pyramid {
    /**
     * Pattern:
     *     *
     *    ***
     *   *****
     *  *******
     * *********
     */
    public static void print(int n) {
        System.out.println("=== Pyramid ===");
        for (int i = 1; i <= n; i++) {
            // Print spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            // Print stars
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
        System.out.println();
    }
}

// ========== PATTERN 4: DIAMOND ==========
class Pattern4_Diamond {
    /**
     * Pattern:
     *     *
     *    ***
     *   *****
     *  *******
     * *********
     *  *******
     *   *****
     *    ***
     *     *
     */
    public static void print(int n) {
        System.out.println("=== Diamond ===");
        // Upper half (pyramid)
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
        // Lower half (inverted pyramid)
        for (int i = n - 1; i >= 1; i--) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
        System.out.println();
    }
}

// ========== PATTERN 5: NUMBER TRIANGLE ==========
class Pattern5_NumberTriangle {
    /**
     * Pattern:
     * 1
     * 12
     * 123
     * 1234
     * 12345
     */
    public static void print(int n) {
        System.out.println("=== Number Triangle ===");
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j);
            }
            System.out.println();
        }
        System.out.println();
    }
}

// ========== PATTERN 6: FLOYD'S TRIANGLE ==========
class Pattern6_FloydsTriangle {
    /**
     * Pattern:
     * 1
     * 2 3
     * 4 5 6
     * 7 8 9 10
     * 11 12 13 14 15
     */
    public static void print(int n) {
        System.out.println("=== Floyd's Triangle ===");
        int num = 1;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(num + " ");
                num++;
            }
            System.out.println();
        }
        System.out.println();
    }
}

// ========== PATTERN 7: HOLLOW RECTANGLE ==========
class Pattern7_HollowRectangle {
    /**
     * Pattern:
     * *****
     * *   *
     * *   *
     * *****
     */
    public static void print(int rows, int cols) {
        System.out.println("=== Hollow Rectangle ===");
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= cols; j++) {
                // Print * for borders, space for inside
                if (i == 1 || i == rows || j == 1 || j == cols) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
        System.out.println();
    }
}

// ========== PATTERN 8: HOLLOW PYRAMID ==========
class Pattern8_HollowPyramid {
    /**
     * Pattern:
     *     *
     *    * *
     *   *   *
     *  *     *
     * *********
     */
    public static void print(int n) {
        System.out.println("=== Hollow Pyramid ===");
        for (int i = 1; i <= n; i++) {
            // Print spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            // Print stars and spaces
            for (int k = 1; k <= 2 * i - 1; k++) {
                if (k == 1 || k == 2 * i - 1 || i == n) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
        System.out.println();
    }
}

// ========== PATTERN 9: PASCAL'S TRIANGLE ==========
class Pattern9_PascalsTriangle {
    /**
     * Pattern:
     *     1
     *    1 1
     *   1 2 1
     *  1 3 3 1
     * 1 4 6 4 1
     */
    public static void print(int n) {
        System.out.println("=== Pascal's Triangle ===");
        for (int i = 0; i < n; i++) {
            // Print spaces
            for (int j = 0; j < n - i - 1; j++) {
                System.out.print(" ");
            }
            // Print values
            int value = 1;
            for (int j = 0; j <= i; j++) {
                System.out.print(value + " ");
                value = value * (i - j) / (j + 1);
            }
            System.out.println();
        }
        System.out.println();
    }
}

// ========== PATTERN 10: BUTTERFLY ==========
class Pattern10_Butterfly {
    /**
     * Pattern:
     * *        *
     * **      **
     * ***    ***
     * ****  ****
     * **********
     * ****  ****
     * ***    ***
     * **      **
     * *        *
     */
    public static void print(int n) {
        System.out.println("=== Butterfly ===");
        // Upper half
        for (int i = 1; i <= n; i++) {
            // Left stars
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            // Spaces
            for (int j = 1; j <= 2 * (n - i); j++) {
                System.out.print(" ");
            }
            // Right stars
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        // Lower half
        for (int i = n - 1; i >= 1; i--) {
            // Left stars
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            // Spaces
            for (int j = 1; j <= 2 * (n - i); j++) {
                System.out.print(" ");
            }
            // Right stars
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        System.out.println();
    }
}

// ========== MAIN TEST PROGRAM ==========
public class PatternPrograms {
    public static void main(String[] args) {
        System.out.println("========================================");
        System.out.println("    PATTERN PROGRAMS - DAY 1");
        System.out.println("========================================\n");
        
        int n = 5;
        
        Pattern1_RightTriangle.print(n);
        Pattern2_InvertedTriangle.print(n);
        Pattern3_Pyramid.print(n);
        Pattern4_Diamond.print(n);
        Pattern5_NumberTriangle.print(n);
        Pattern6_FloydsTriangle.print(n);
        Pattern7_HollowRectangle.print(4, 7);
        Pattern8_HollowPyramid.print(n);
        Pattern9_PascalsTriangle.print(n);
        Pattern10_Butterfly.print(n);
        
        System.out.println("========================================");
        System.out.println("All patterns printed successfully! ✅");
        System.out.println("========================================");
    }
}
