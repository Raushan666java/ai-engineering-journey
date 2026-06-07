import java.util.*;

public class BacktrackingBasics {
    // Permutations
    public static List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        boolean[] used = new boolean[nums.length];
        backtrackPermute(nums, used, new ArrayList<>(), res);
        return res;
    }
    static void backtrackPermute(int[] nums, boolean[] used, List<Integer> temp, List<List<Integer>> res) {
        if (temp.size() == nums.length) { res.add(new ArrayList<>(temp)); return; }
        for (int i=0;i<nums.length;i++) {
            if (used[i]) continue;
            used[i] = true;
            temp.add(nums[i]);
            backtrackPermute(nums, used, temp, res);
            temp.remove(temp.size()-1);
            used[i] = false;
        }
    }

    // Subsets
    public static List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        backtrackSubset(nums, 0, new ArrayList<>(), res);
        return res;
    }
    static void backtrackSubset(int[] nums, int idx, List<Integer> temp, List<List<Integer>> res) {
        res.add(new ArrayList<>(temp));
        for (int i=idx;i<nums.length;i++) {
            temp.add(nums[i]);
            backtrackSubset(nums, i+1, temp, res);
            temp.remove(temp.size()-1);
        }
    }

    // Sudoku solver (classic 9x9 solver, but for CI we test with a 4x4 variant as simple)
    static boolean solveSudoku(int[][] board) {
        int n = board.length;
        for (int r=0;r<n;r++) {
            for (int c=0;c<n;c++) {
                if (board[r][c] != 0) continue;
                for (int d=1; d<=n; d++) {
                    if (isValid(board, r, c, d)) {
                        board[r][c] = d;
                        if (solveSudoku(board)) return true;
                        board[r][c] = 0;
                    }
                }
                return false; // cannot place any digit here
            }
        }
        return true; // filled
    }
    static boolean isValid(int[][] board, int r, int c, int d) {
        int n = board.length;
        int nroot = (int)Math.sqrt(n);
        for (int i=0;i<n;i++) if (board[r][i] == d) return false;
        for (int i=0;i<n;i++) if (board[i][c] == d) return false;
        int boxRow = (r/nroot)*nroot; int boxCol = (c/nroot)*nroot;
        for (int i=0;i<nroot;i++) for (int j=0;j<nroot;j++) if (board[boxRow+i][boxCol+j] == d) return false;
        return true;
    }

    public static void printBoard(int[][] board) {
        for (int[] row : board) System.out.println(Arrays.toString(row));
    }

    public static void main(String[] args) {
        boolean ci = false; if (args!=null) for (String a: args) if ("--ci".equals(a)||"--test".equals(a)) ci=true;

        // Permutations test
        int[] nums = {1,2,3};
        List<List<Integer>> perms = permute(nums);
        System.out.println("Permutations of [1,2,3]: " + perms);

        // Subsets test
        List<List<Integer>> subs = subsets(nums);
        System.out.println("Subsets of [1,2,3]: " + subs);

        // 4x4 Sudoku test
        // 0 - empty. This 4x4 is a simple sudoku with solution:
        // 1 2 3 4
        // 3 4 1 2
        // 2 1 4 3
        // 4 3 2 1
        int[][] board = {
            {1,0,0,4},
            {0,4,1,0},
            {0,1,0,3},
            {4,0,0,1}
        };
        System.out.println("Sudoku (4x4) start:"); printBoard(board);
        boolean solved = solveSudoku(board);
        System.out.println("Sudoku solved=" + solved);
        printBoard(board);

        if (ci) {
            boolean ok = true;
            ok &= perms.size() == 6; // 3! permutations
            ok &= subs.size() == 8; // 2^3 subsets
            ok &= solved;
            if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1); }
        }
    }
}
