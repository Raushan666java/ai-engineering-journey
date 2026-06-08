/**
 * 15 PATTERN PROGRAMS - DAY 3
 * Master pattern printing using nested loops
 * Essential for interviews and logical thinking
 */

public class PatternPrograms {
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════╗");
        System.out.println("║    15 PATTERN PROGRAMS - DAY 3     ║");
        System.out.println("║    Master Nested Loops             ║");
        System.out.println("╚════════════════════════════════════╝\n");
        
        pattern01_RightTriangle();
        pattern02_InvertedRightTriangle();
        pattern03_LeftTriangle();
        pattern04_Pyramid();
        pattern05_InvertedPyramid();
        pattern06_Diamond();
        pattern07_HollowRectangle();
        pattern08_HollowSquare();
        pattern09_NumberPyramid();
        pattern10_NumberTriangle();
        pattern11_FloydTriangle();
        pattern12_PascalTriangle();
        pattern13_ButterflyPattern();
        pattern14_HourglassPattern();
        pattern15_ZigzagPattern();
        
        System.out.println("\n🎉 ALL 15 PATTERNS COMPLETED!");
    }
    
    // Pattern 1: Right Triangle
    static void pattern01_RightTriangle() {
        System.out.println("\n" + "=".repeat(40));
        System.out.println("PATTERN 1: Right Triangle");
        System.out.println("=".repeat(40));
        
        int n = 5;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        /*
         * 
         * * 
         * * * 
         * * * * 
         * * * * * 
         */
    }
    
    // Pattern 2: Inverted Right Triangle
    static void pattern02_InvertedRightTriangle() {
        System.out.println("\n" + "=".repeat(40));
        System.out.println("PATTERN 2: Inverted Right Triangle");
        System.out.println("=".repeat(40));
        
        int n = 5;
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        /*
         * * * * * 
         * * * * 
         * * * 
         * * 
         * 
         */
    }
    
    // Pattern 3: Left Triangle (with spaces)
    static void pattern03_LeftTriangle() {
        System.out.println("\n" + "=".repeat(40));
        System.out.println("PATTERN 3: Left Triangle");
        System.out.println("=".repeat(40));
        
        int n = 5;
        for (int i = 1; i <= n; i++) {
            // Print spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print("  ");
            }
            // Print stars
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        /*
                 * 
               * * 
             * * * 
           * * * * 
         * * * * * 
         */
    }
    
    // Pattern 4: Pyramid
    static void pattern04_Pyramid() {
        System.out.println("\n" + "=".repeat(40));
        System.out.println("PATTERN 4: Pyramid");
        System.out.println("=".repeat(40));
        
        int n = 5;
        for (int i = 1; i <= n; i++) {
            // Print spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            // Print stars
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        /*
             *
            ***
           *****
          *******
         *********
         */
    }
    
    // Pattern 5: Inverted Pyramid
    static void pattern05_InvertedPyramid() {
        System.out.println("\n" + "=".repeat(40));
        System.out.println("PATTERN 5: Inverted Pyramid");
        System.out.println("=".repeat(40));
        
        int n = 5;
        for (int i = n; i >= 1; i--) {
            // Print spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            // Print stars
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        /*
         *********
          *******
           *****
            ***
             *
         */
    }
    
    // Pattern 6: Diamond
    static void pattern06_Diamond() {
        System.out.println("\n" + "=".repeat(40));
        System.out.println("PATTERN 6: Diamond");
        System.out.println("=".repeat(40));
        
        int n = 5;
        // Upper pyramid
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        // Lower inverted pyramid
        for (int i = n - 1; i >= 1; i--) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        /*
             *
            ***
           *****
          *******
         *********
          *******
           *****
            ***
             *
         */
    }
    
    // Pattern 7: Hollow Rectangle
    static void pattern07_HollowRectangle() {
        System.out.println("\n" + "=".repeat(40));
        System.out.println("PATTERN 7: Hollow Rectangle");
        System.out.println("=".repeat(40));
        
        int rows = 5, cols = 8;
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= cols; j++) {
                if (i == 1 || i == rows || j == 1 || j == cols) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
        /*
         * * * * * * * * 
         *             * 
         *             * 
         *             * 
         * * * * * * * * 
         */
    }
    
    // Pattern 8: Hollow Square
    static void pattern08_HollowSquare() {
        System.out.println("\n" + "=".repeat(40));
        System.out.println("PATTERN 8: Hollow Square");
        System.out.println("=".repeat(40));
        
        int n = 6;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (i == 1 || i == n || j == 1 || j == n) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
        /*
         * * * * * * 
         *         * 
         *         * 
         *         * 
         *         * 
         * * * * * * 
         */
    }
    
    // Pattern 9: Number Pyramid
    static void pattern09_NumberPyramid() {
        System.out.println("\n" + "=".repeat(40));
        System.out.println("PATTERN 9: Number Pyramid");
        System.out.println("=".repeat(40));
        
        int n = 5;
        for (int i = 1; i <= n; i++) {
            // Print spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            // Print numbers
            for (int j = 1; j <= i; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
        /*
             1 
            1 2 
           1 2 3 
          1 2 3 4 
         1 2 3 4 5 
         */
    }
    
    // Pattern 10: Number Triangle (same number in row)
    static void pattern10_NumberTriangle() {
        System.out.println("\n" + "=".repeat(40));
        System.out.println("PATTERN 10: Number Triangle");
        System.out.println("=".repeat(40));
        
        int n = 5;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(i + " ");
            }
            System.out.println();
        }
        /*
         1 
         2 2 
         3 3 3 
         4 4 4 4 
         5 5 5 5 5 
         */
    }
    
    // Pattern 11: Floyd's Triangle
    static void pattern11_FloydTriangle() {
        System.out.println("\n" + "=".repeat(40));
        System.out.println("PATTERN 11: Floyd's Triangle");
        System.out.println("=".repeat(40));
        
        int n = 5;
        int num = 1;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(num + " ");
                num++;
            }
            System.out.println();
        }
        /*
         1 
         2 3 
         4 5 6 
         7 8 9 10 
         11 12 13 14 15 
         */
    }
    
    // Pattern 12: Pascal's Triangle
    static void pattern12_PascalTriangle() {
        System.out.println("\n" + "=".repeat(40));
        System.out.println("PATTERN 12: Pascal's Triangle");
        System.out.println("=".repeat(40));
        
        int n = 6;
        for (int i = 0; i < n; i++) {
            // Print spaces
            for (int j = 0; j < n - i - 1; j++) {
                System.out.print(" ");
            }
            // Calculate and print Pascal values
            int value = 1;
            for (int j = 0; j <= i; j++) {
                System.out.print(value + " ");
                value = value * (i - j) / (j + 1);
            }
            System.out.println();
        }
        /*
              1 
             1 1 
            1 2 1 
           1 3 3 1 
          1 4 6 4 1 
         1 5 10 10 5 1 
         */
    }
    
    // Pattern 13: Butterfly Pattern
    static void pattern13_ButterflyPattern() {
        System.out.println("\n" + "=".repeat(40));
        System.out.println("PATTERN 13: Butterfly Pattern");
        System.out.println("=".repeat(40));
        
        int n = 5;
        // Upper part
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
        // Lower part
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
        /*
         *        *
         **      **
         ***    ***
         ****  ****
         **********
         ****  ****
         ***    ***
         **      **
         *        *
         */
    }
    
    // Pattern 14: Hourglass Pattern
    static void pattern14_HourglassPattern() {
        System.out.println("\n" + "=".repeat(40));
        System.out.println("PATTERN 14: Hourglass Pattern");
        System.out.println("=".repeat(40));
        
        int n = 5;
        // Upper inverted pyramid
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        // Lower pyramid
        for (int i = 2; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        /*
         *********
          *******
           *****
            ***
             *
            ***
           *****
          *******
         *********
         */
    }
    
    // Pattern 15: Zigzag Pattern
    static void pattern15_ZigzagPattern() {
        System.out.println("\n" + "=".repeat(40));
        System.out.println("PATTERN 15: Zigzag Pattern");
        System.out.println("=".repeat(40));
        
        int n = 3;  // Height
        int cols = 15;  // Width
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= cols; j++) {
                if (((i + j) % 4 == 0) || (i == 2 && j % 4 == 0)) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
        /*
            *   *   *   
           * * * * * * *
          *   *   *   *
         */
    }
}
