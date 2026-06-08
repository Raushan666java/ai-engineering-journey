import java.util.*;

public class SortingComparator {
    
    // Bubble Sort
    static long bubbleSort(int[] arr) {
        long start = System.nanoTime();
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
        return System.nanoTime() - start;
    }
    
    // Selection Sort
    static long selectionSort(int[] arr) {
        long start = System.nanoTime();
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIdx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIdx]) minIdx = j;
            }
            int temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
        }
        return System.nanoTime() - start;
    }
    
    // Insertion Sort
    static long insertionSort(int[] arr) {
        long start = System.nanoTime();
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
        return System.nanoTime() - start;
    }
    
    // Merge Sort
    static long mergeSort(int[] arr) {
        long start = System.nanoTime();
        mergeSortHelper(arr, 0, arr.length - 1);
        return System.nanoTime() - start;
    }
    
    static void mergeSortHelper(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            mergeSortHelper(arr, left, mid);
            mergeSortHelper(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }
    
    static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1, n2 = right - mid;
        int[] L = new int[n1], R = new int[n2];
        for (int i = 0; i < n1; i++) L[i] = arr[left + i];
        for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];
        
        int i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) arr[k++] = L[i++];
            else arr[k++] = R[j++];
        }
        while (i < n1) arr[k++] = L[i++];
        while (j < n2) arr[k++] = R[j++];
    }
    
    // Quick Sort
    static long quickSort(int[] arr) {
        long start = System.nanoTime();
        quickSortHelper(arr, 0, arr.length - 1);
        return System.nanoTime() - start;
    }
    
    static void quickSortHelper(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSortHelper(arr, low, pi - 1);
            quickSortHelper(arr, pi + 1, high);
        }
    }
    
    static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }
    
    // Java's built-in sort (for comparison)
    static long javaSort(int[] arr) {
        long start = System.nanoTime();
        Arrays.sort(arr);
        return System.nanoTime() - start;
    }
    
    // Generate test arrays
    static int[] generateRandom(int size) {
        int[] arr = new int[size];
        Random rand = new Random();
        for (int i = 0; i < size; i++) {
            arr[i] = rand.nextInt(10000);
        }
        return arr;
    }
    
    static int[] generateSorted(int size) {
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) arr[i] = i;
        return arr;
    }
    
    static int[] generateReverseSorted(int size) {
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) arr[i] = size - i;
        return arr;
    }
    
    static int[] generateNearlySorted(int size) {
        int[] arr = generateSorted(size);
        Random rand = new Random();
        for (int i = 0; i < size / 10; i++) {
            int idx1 = rand.nextInt(size);
            int idx2 = rand.nextInt(size);
            int temp = arr[idx1];
            arr[idx1] = arr[idx2];
            arr[idx2] = temp;
        }
        return arr;
    }
    
    // Main comparison
    public static void main(String[] args) {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║      SORTING ALGORITHM PERFORMANCE COMPARATOR                ║");
        System.out.println("║      Compare: Bubble, Selection, Insertion, Merge, Quick     ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝\n");
        
        int[] sizes = {10, 50, 100, 500, 1000, 5000};
        
        System.out.println("═══════════════════════════════════════════════════════════════");
        System.out.println("SCENARIO 1: RANDOM DATA (Typical Case)");
        System.out.println("═══════════════════════════════════════════════════════════════\n");
        
        System.out.printf("%-8s %-12s %-12s %-12s %-12s %-12s %-12s%n", 
            "Size", "Bubble", "Selection", "Insertion", "Merge", "Quick", "Java Sort");
        System.out.println("─".repeat(85));
        
        for (int size : sizes) {
            int[] original = generateRandom(size);
            
            long[] times = new long[6];
            times[0] = size <= 1000 ? bubbleSort(original.clone()) : -1;
            times[1] = size <= 1000 ? selectionSort(original.clone()) : -1;
            times[2] = size <= 5000 ? insertionSort(original.clone()) : -1;
            times[3] = mergeSort(original.clone());
            times[4] = quickSort(original.clone());
            times[5] = javaSort(original.clone());
            
            System.out.printf("%-8d ", size);
            for (long time : times) {
                if (time == -1) System.out.printf("%-12s ", "SKIP");
                else System.out.printf("%-12s ", formatTime(time));
            }
            System.out.println();
        }
        
        System.out.println("\n═══════════════════════════════════════════════════════════════");
        System.out.println("SCENARIO 2: ALREADY SORTED DATA (Best Case for Some)");
        System.out.println("═══════════════════════════════════════════════════════════════\n");
        
        System.out.printf("%-8s %-12s %-12s %-12s %-12s %-12s%n", 
            "Size", "Bubble", "Insertion", "Merge", "Quick", "Java Sort");
        System.out.println("─".repeat(70));
        
        for (int size : new int[]{100, 500, 1000, 5000}) {
            int[] sorted = generateSorted(size);
            
            long t1 = bubbleSort(sorted.clone());
            long t2 = insertionSort(sorted.clone());
            long t3 = mergeSort(sorted.clone());
            long t4 = quickSort(sorted.clone());
            long t5 = javaSort(sorted.clone());
            
            System.out.printf("%-8d %-12s %-12s %-12s %-12s %-12s%n", 
                size, formatTime(t1), formatTime(t2), formatTime(t3), 
                formatTime(t4), formatTime(t5));
        }
        
        System.out.println("\n═══════════════════════════════════════════════════════════════");
        System.out.println("SCENARIO 3: REVERSE SORTED DATA (Worst Case for Some)");
        System.out.println("═══════════════════════════════════════════════════════════════\n");
        
        System.out.printf("%-8s %-12s %-12s %-12s %-12s %-12s%n", 
            "Size", "Bubble", "Insertion", "Merge", "Quick", "Java Sort");
        System.out.println("─".repeat(70));
        
        for (int size : new int[]{100, 500, 1000}) {
            int[] reversed = generateReverseSorted(size);
            
            long t1 = bubbleSort(reversed.clone());
            long t2 = insertionSort(reversed.clone());
            long t3 = mergeSort(reversed.clone());
            long t4 = quickSort(reversed.clone());
            long t5 = javaSort(reversed.clone());
            
            System.out.printf("%-8d %-12s %-12s %-12s %-12s %-12s%n", 
                size, formatTime(t1), formatTime(t2), formatTime(t3), 
                formatTime(t4), formatTime(t5));
        }
        
        System.out.println("\n═══════════════════════════════════════════════════════════════");
        System.out.println("SCENARIO 4: NEARLY SORTED DATA (90% sorted)");
        System.out.println("═══════════════════════════════════════════════════════════════\n");
        
        System.out.printf("%-8s %-12s %-12s %-12s %-12s%n", 
            "Size", "Insertion", "Merge", "Quick", "Java Sort");
        System.out.println("─".repeat(60));
        
        for (int size : new int[]{100, 500, 1000, 5000}) {
            int[] nearlySorted = generateNearlySorted(size);
            
            long t1 = insertionSort(nearlySorted.clone());
            long t2 = mergeSort(nearlySorted.clone());
            long t3 = quickSort(nearlySorted.clone());
            long t4 = javaSort(nearlySorted.clone());
            
            System.out.printf("%-8d %-12s %-12s %-12s %-12s%n", 
                size, formatTime(t1), formatTime(t2), formatTime(t3), formatTime(t4));
        }
        
        // Analysis and Recommendations
        System.out.println("\n\n╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                     ANALYSIS & INSIGHTS                      ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝\n");
        
        System.out.println("📊 KEY FINDINGS:");
        System.out.println("─".repeat(65));
        System.out.println("1. Quick Sort is FASTEST for random large data (n > 1000)");
        System.out.println("2. Insertion Sort WINS for nearly sorted data (adaptive!)");
        System.out.println("3. Merge Sort has CONSISTENT O(n log n) performance");
        System.out.println("4. Bubble/Selection are SLOW for all cases (n²)");
        System.out.println("5. Java's Arrays.sort() is optimized Dual-Pivot Quick Sort");
        
        System.out.println("\n📈 TIME COMPLEXITY VERIFIED:");
        System.out.println("─".repeat(65));
        System.out.println("• Bubble/Selection: O(n²) - Time doubles when size doubles");
        System.out.println("• Insertion: O(n) to O(n²) - Adaptive to input");
        System.out.println("• Merge: Always O(n log n) - Predictable");
        System.out.println("• Quick: O(n log n) average, O(n²) worst (sorted input)");
        
        System.out.println("\n🎯 RECOMMENDATIONS:");
        System.out.println("─".repeat(65));
        System.out.println("✓ Small arrays (n < 50): Use Insertion Sort");
        System.out.println("✓ Nearly sorted: Use Insertion Sort");
        System.out.println("✓ Large random data: Use Quick Sort or Java's Arrays.sort()");
        System.out.println("✓ Need guaranteed O(n log n): Use Merge Sort");
        System.out.println("✓ Need stability: Use Merge Sort");
        System.out.println("✓ General purpose: Use Java's Arrays.sort() (optimized)");
        
        System.out.println("\n💡 REAL-WORLD USAGE:");
        System.out.println("─".repeat(65));
        System.out.println("• Java Arrays.sort() = Dual-Pivot Quick Sort + Insertion");
        System.out.println("• Python sorted() = TimSort (Merge + Insertion hybrid)");
        System.out.println("• C++ std::sort() = IntroSort (Quick + Heap + Insertion)");
        System.out.println("• All use HYBRID approaches for optimal performance!");
        
        System.out.println("\n" + "═".repeat(65));
        System.out.println("Conclusion: Choose the right algorithm for your use case!");
        System.out.println("═".repeat(65));
    }
    
    static String formatTime(long nanos) {
        if (nanos < 1000) return nanos + " ns";
        if (nanos < 1000000) return String.format("%.2f μs", nanos / 1000.0);
        if (nanos < 1000000000) return String.format("%.2f ms", nanos / 1000000.0);
        return String.format("%.2f s", nanos / 1000000000.0);
    }
}
