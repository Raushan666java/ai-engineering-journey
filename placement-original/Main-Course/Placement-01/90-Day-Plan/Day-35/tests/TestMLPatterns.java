package day35.tests;

import day35.ml.*;
import java.util.*;

public class TestMLPatterns {
    private static void assertTrue(boolean cond, String msg){
        if (!cond) throw new AssertionError(msg);
    }

    public static void main(String[] args) {
        System.out.println("Running Day 35 basic tests...");

        // Test LinearRegression fits a simple linear relation y=2x1+1x2
        double[][] X = {{1,2},{2,3},{3,4},{4,5},{5,6}};
        double[] y = {3,5,7,9,11};
        MLPatterns.LinearRegression lr = new MLPatterns.LinearRegression(0.01, 1000);
        lr.fit(X,y);
        double pred = lr.predict(new double[]{6,7});
        System.out.println("LinearRegression prediction: " + pred);
        assertTrue(Math.abs(pred - 13.0) < 0.5, "LinearRegression failed to approximate relation");

        // Test KMeans basic behavior
        double[][] Xc = {{1.0,2.0},{1.5,1.8},{5.0,8.0},{8.0,8.0},{1.0,0.6}};
        MLPatterns.KMeans kmeans = new MLPatterns.KMeans(2, 100);
        kmeans.fit(Xc);
        int[] labels = kmeans.getLabels();
        System.out.println("KMeans labels: " + java.util.Arrays.toString(labels));

        // Test Logistic Regression wrapper via practice harness
        double[][] Xbin = {{2.0,3.0},{1.0,3.0},{2.0,1.0},{3.0,2.0},{3.0,3.0}};
        int[] ybin = {1,0,0,1,1};
        Day35ComprehensivePractice.LogisticRegressionWrapper w = new Day35ComprehensivePractice.LogisticRegressionWrapper(0.1, 1000);
        double acc = Day35ComprehensivePractice.kFoldCrossValidate(w, Xbin, ybin, 2);
        System.out.println("LogReg k-fold accuracy: " + acc);
        assertTrue(acc >= 0.4, "Logistic regression k-fold accuracy too low");

        // Test NeuralNetwork XOR (using small network trained in AdvancedMLPatterns)
        AdvancedMLPatterns.NeuralNetwork nn = new AdvancedMLPatterns.NeuralNetwork(2,4,1,0.1,1000);
        double[][] Xn = {{0.0,0.0},{0.0,1.0},{1.0,0.0},{1.0,1.0}};
        double[][] yn = {{0},{1},{1},{0}};
        nn.fit(Xn, yn);
        double[][] preds = nn.predict(Xn);
        System.out.println("NeuralNetwork XOR preds: ");
        for (double[] p: preds) System.out.println(java.util.Arrays.toString(p));

        // Check that two of the predictions are near 0 and two near 1
        int nearOnes = 0, nearZeros = 0;
        for (double[] p: preds){ if (p[0] > 0.5) nearOnes++; else nearZeros++; }
        assertTrue(nearOnes >= 2 && nearZeros >= 2, "Neural network failed XOR patterns");

        // Test SGD Logistic
        Day35ComprehensivePractice.SGDLogistic sgd = new Day35ComprehensivePractice.SGDLogistic(0.1, 200, 2);
        sgd.fit(Xbin, ybin);
        int[] sgdPred = sgd.predict(Xbin);
        System.out.println("SGD Logistic preds: " + java.util.Arrays.toString(sgdPred));

        // Test KNN
        Day35ComprehensivePractice.KNN knn = new Day35ComprehensivePractice.KNN(3);
        knn.fit(Xbin, ybin);
        int[] knnPred = knn.predict(Xbin);
        System.out.println("KNN preds: " + java.util.Arrays.toString(knnPred));

        // Test TF-IDF search trivial
        List<String> docs = Arrays.asList("the cat sat","the dog ran","cats and dogs");
        List<String> res = Day35ComprehensivePractice.tfidfSearch(docs, "cat", 2);
        System.out.println("TF-IDF search results: " + res);

        // Test CurveUtils PR-AUC
        double[] actualPR = {1,0,1,0,1,0};
        double[] scoresPR = {0.9,0.2,0.8,0.1,0.7,0.4};
        double prAuc = Day35ComprehensivePractice.CurveUtils.precisionRecallAUC(actualPR, scoresPR);
        System.out.println("PR-AUC: " + prAuc);

        // Test Online Normalizer
        Day35ComprehensivePractice.OnlineNormalizer on = new Day35ComprehensivePractice.OnlineNormalizer(2);
        on.update(new double[]{1.0,2.0}); on.update(new double[]{2.0,3.0}); double[] transformed = on.transform(new double[]{3.0,4.0});
        System.out.println("Online normalizer transform: " + Arrays.toString(transformed));

        // Test DriftDetector (small change)
        double[] a = {1.0,1.1,0.9,1.05}; double[] b = {1.5,1.6,1.4};
        double dstat = Day35ComprehensivePractice.DriftDetector.kolmogorovSmirnovStatistic(a,b);
        System.out.println("KS stat: " + dstat);

        // Test SimpleBagging
        Day35ComprehensivePractice.SimpleBagging bag = new Day35ComprehensivePractice.SimpleBagging(3);
        bag.fit(Xbin, ybin);
        int[] bagPred = bag.predict(Xbin);
        System.out.println("Bagging preds: " + Arrays.toString(bagPred));

        // Test KMeans++ init and silhouette
        double[][] clusterData = {{1.0,2.0},{1.2,2.1},{5.0,8.0},{8.0,8.0},{9.0,11.0}};
        int[] clusterLabels = {0,0,1,1,1};
        double sil = Day35ComprehensivePractice.silhouetteScore(clusterData, clusterLabels);
        System.out.println("Silhouette score: " + sil);

        // Test permutation importance for Logistic
        Day35ComprehensivePractice.LogisticRegressionWrapper w2 = new Day35ComprehensivePractice.LogisticRegressionWrapper(0.1, 500);
        double[][] Xpi = {{1.0,2.0},{2.0,1.0},{3.0,1.5},{1.5,2.0}}; int[] ypi={0,1,1,0};
        double[] importances = Day35ComprehensivePractice.permutationImportance(w2, Xpi, ypi, 3);
        System.out.println("Permutation importances: " + Arrays.toString(importances));

        System.out.println("All basic tests passed.");
    }
}
