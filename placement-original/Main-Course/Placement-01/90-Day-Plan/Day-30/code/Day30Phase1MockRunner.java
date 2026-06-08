import java.io.*;
import java.util.*;

public class Day30Phase1MockRunner {
    static class R { String name; boolean pass; long timeMs; }
    public static void main(String[] args) throws Exception {
        System.out.println("Running Day 30 Phase 1 Mock Runner — will run Week 4 review and Day 29 mock tests in CI mode");
        List<R> results = new ArrayList<>();
        results.add(runProcess("Week4Review", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-28\\code"));
        results.add(runProcess("Day29MockTest", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-29\\code"));
        results.add(runProcess("DPBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-31\\code"));
        results.add(runProcess("TreeBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-32\\code"));
        results.add(runProcess("HeapsBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-33\\code"));
        results.add(runProcess("MedianMaintenance", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-34\\code"));
        results.add(runProcess("BinarySearchBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-35\\code"));
        results.add(runProcess("FenwickBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-36\\code"));
        results.add(runProcess("TriesBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-37\\code"));
        results.add(runProcess("SegmentTreeBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-38\\code"));
        results.add(runProcess("KMPSearch", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-39\\code"));
        results.add(runProcess("BitManipulationBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-40\\code"));
        results.add(runProcess("NumberTheoryBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-41\\code"));
        results.add(runProcess("NQueensBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-42\\code"));
        results.add(runProcess("BacktrackingBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-43\\code"));
        results.add(runProcess("GreedyBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-44\\code"));
        results.add(runProcess("DivideAndConquerBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-45\\code"));
        results.add(runProcess("AdvancedDPBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-46\\code"));
        int pass=0; long total=0; for (R r: results){ total += r.timeMs; if (r.pass) pass++; System.out.println(r.name+" -> "+(r.pass?"PASS":"FAIL")+" (time="+r.timeMs+"ms)"); }
        System.out.println("Phase1 Mock Runner -> Passed: "+pass+" / "+results.size()+" total time="+total+" ms");
    }
    static R runProcess(String cls, String dir) throws Exception {
        R r = new R(); r.name = cls; long t0 = System.nanoTime();
        // Ensure directory contains up-to-date compiled classes by compiling *.java
        boolean compiled = compileDirectory(dir);
        if (!compiled) { r.pass = false; r.timeMs = (System.nanoTime() - t0)/1_000_000; return r; }
        ProcessBuilder pb = new ProcessBuilder("java", "-cp", dir, cls, "--ci"); pb.directory(new File(dir)); pb.redirectErrorStream(true);
        Process p = pb.start(); try (BufferedReader br = new BufferedReader(new InputStreamReader(p.getInputStream()))) { String line; while((line = br.readLine()) != null) System.out.println(line); }
        int rc = p.waitFor(); r.pass = rc == 0; r.timeMs = (System.nanoTime() - t0)/1_000_000; return r;
    }

    static boolean compileDirectory(String dir) throws Exception {
        File d = new File(dir);
        File[] javaFiles = d.listFiles((f, n) -> n.endsWith(".java"));
        if (javaFiles == null || javaFiles.length == 0) { return true; }
        List<String> cmd = new ArrayList<>(); cmd.add("javac"); cmd.add("-d"); cmd.add(dir);
        for (File jf: javaFiles) cmd.add(jf.getAbsolutePath());
        ProcessBuilder pb = new ProcessBuilder(cmd); pb.directory(d); pb.redirectErrorStream(true);
        Process p = pb.start(); try (BufferedReader br = new BufferedReader(new InputStreamReader(p.getInputStream()))) { String line; while((line = br.readLine()) != null) System.out.println(line); }
        int rc = p.waitFor(); return rc == 0;
    }
}
