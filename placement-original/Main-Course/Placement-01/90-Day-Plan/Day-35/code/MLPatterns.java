package day35.ml;

import java.util.*;
import java.util.concurrent.*;
import java.time.*;
import java.util.stream.*;
import java.util.function.*;
import java.util.random.*;

/**
 * DAY 35: MACHINE LEARNING & AI PATTERNS
 *
 * Topics Covered:
 * 1. Core ML Algorithms (Supervised, Unsupervised, Reinforcement)
 * 2. Feature Engineering & Preprocessing
 * 3. Model Training & Evaluation
 * 4. Ensemble Methods
 * 5. Dimensionality Reduction
 * 6. Anomaly Detection
 * 7. Time Series Forecasting
 * 8. Natural Language Processing
 *
 * Real-world applications:
 * - Netflix: Recommendation systems with collaborative filtering
 * - Google: Search ranking with gradient boosting
 * - Amazon: Product recommendations with deep learning
 * - Tesla: Autonomous driving with computer vision
 * - Spotify: Music recommendations with content-based filtering
 */

public class MLPatterns {

    /**
     * ========================================================================
     * PATTERN 1: SUPERVISED LEARNING ALGORITHMS
     * ========================================================================
     */

    // Linear Regression - Predict continuous values
    public static class LinearRegression {
        private double[] weights;
        private double bias;
        private final double learningRate;
        private final int maxIterations;

        public LinearRegression(double learningRate, int maxIterations) {
            this.learningRate = learningRate;
            this.maxIterations = maxIterations;
        }

        public void fit(double[][] X, double[] y) {
            int n = X.length;
            int features = X[0].length;

            weights = new double[features];
            bias = 0.0;

            // Gradient descent
            for (int iter = 0; iter < maxIterations; iter++) {
                double[] predictions = predictBatch(X);
                double[] errors = new double[n];

                for (int i = 0; i < n; i++) {
                    errors[i] = predictions[i] - y[i];
                }

                // Update weights and bias
                for (int j = 0; j < features; j++) {
                    double gradient = 0.0;
                    for (int i = 0; i < n; i++) {
                        gradient += errors[i] * X[i][j];
                    }
                    weights[j] -= learningRate * gradient / n;
                }

                double biasGradient = Arrays.stream(errors).sum() / n;
                bias -= learningRate * biasGradient;

                // Early stopping (simplified)
                if (iter % 100 == 0) {
                    double mse = meanSquaredError(y, predictions);
                    System.out.printf("[LinearRegression] Iteration %d, MSE: %.6f%n", iter, mse);
                }
            }
        }

        public double[] predictBatch(double[][] X) {
            int n = X.length;
            double[] predictions = new double[n];

            for (int i = 0; i < n; i++) {
                predictions[i] = predict(X[i]);
            }

            return predictions;
        }

        public double predict(double[] x) {
            double prediction = bias;
            for (int i = 0; i < weights.length; i++) {
                prediction += weights[i] * x[i];
            }
            return prediction;
        }

        private double meanSquaredError(double[] actual, double[] predicted) {
            double sum = 0.0;
            for (int i = 0; i < actual.length; i++) {
                double error = actual[i] - predicted[i];
                sum += error * error;
            }
            return sum / actual.length;
        }
    }

    // Logistic Regression - Binary classification
    public static class LogisticRegression {
        private double[] weights;
        private double bias;
        private final double learningRate;
        private final int maxIterations;

        public LogisticRegression(double learningRate, int maxIterations) {
            this.learningRate = learningRate;
            this.maxIterations = maxIterations;
        }

        public void fit(double[][] X, int[] y) {
            int n = X.length;
            int features = X[0].length;

            weights = new double[features];
            bias = 0.0;

            for (int iter = 0; iter < maxIterations; iter++) {
                double[] predictions = predictProbabilities(X);
                double[] errors = new double[n];

                for (int i = 0; i < n; i++) {
                    errors[i] = predictions[i] - y[i];
                }

                // Update weights and bias
                for (int j = 0; j < features; j++) {
                    double gradient = 0.0;
                    for (int i = 0; i < n; i++) {
                        gradient += errors[i] * X[i][j];
                    }
                    weights[j] -= learningRate * gradient / n;
                }

                double biasGradient = Arrays.stream(errors).sum() / n;
                bias -= learningRate * biasGradient;
            }
        }

        public int[] predict(double[][] X) {
            double[] probs = predictProbabilities(X);
            int[] predictions = new int[probs.length];

            for (int i = 0; i < probs.length; i++) {
                predictions[i] = probs[i] >= 0.5 ? 1 : 0;
            }

            return predictions;
        }

        public double[] predictProbabilities(double[][] X) {
            int n = X.length;
            double[] probabilities = new double[n];

            for (int i = 0; i < n; i++) {
                double z = bias;
                for (int j = 0; j < weights.length; j++) {
                    z += weights[j] * X[i][j];
                }
                probabilities[i] = sigmoid(z);
            }

            return probabilities;
        }

        private double sigmoid(double z) {
            return 1.0 / (1.0 + Math.exp(-z));
        }
    }

    // Decision Tree - Classification and Regression
    public static class DecisionTree {
        private Node root;
        private final int maxDepth;
        private final int minSamplesSplit;

        public DecisionTree(int maxDepth, int minSamplesSplit) {
            this.maxDepth = maxDepth;
            this.minSamplesSplit = minSamplesSplit;
        }

        public void fit(double[][] X, int[] y) {
            root = buildTree(X, y, 0);
        }

        private Node buildTree(double[][] X, int[] y, int depth) {
            if (depth >= maxDepth || X.length < minSamplesSplit) {
                return new LeafNode(majorityClass(y));
            }

            // Find best split
            Split bestSplit = findBestSplit(X, y);
            if (bestSplit == null) {
                return new LeafNode(majorityClass(y));
            }

            // Split data
            SplitData splitData = splitData(X, y, bestSplit);

            Node left = buildTree(splitData.leftX, splitData.leftY, depth + 1);
            Node right = buildTree(splitData.rightX, splitData.rightY, depth + 1);

            return new InternalNode(bestSplit.featureIndex, bestSplit.threshold, left, right);
        }

        private Split findBestSplit(double[][] X, int[] y) {
            int nFeatures = X[0].length;
            Split bestSplit = null;
            double bestGini = Double.MAX_VALUE;

            for (int feature = 0; feature < nFeatures; feature++) {
                Set<Double> uniqueValues = new HashSet<>();
                for (double[] row : X) {
                    uniqueValues.add(row[feature]);
                }

                for (double threshold : uniqueValues) {
                    double gini = calculateGini(X, y, feature, threshold);
                    if (gini < bestGini) {
                        bestGini = gini;
                        bestSplit = new Split(feature, threshold);
                    }
                }
            }

            return bestSplit;
        }

        private double calculateGini(double[][] X, int[] y, int feature, double threshold) {
            List<Integer> leftIndices = new ArrayList<>();
            List<Integer> rightIndices = new ArrayList<>();

            for (int i = 0; i < X.length; i++) {
                if (X[i][feature] <= threshold) {
                    leftIndices.add(i);
                } else {
                    rightIndices.add(i);
                }
            }

            double leftGini = giniImpurity(leftIndices.stream().mapToInt(i -> y[i]).toArray());
            double rightGini = giniImpurity(rightIndices.stream().mapToInt(i -> y[i]).toArray());

            double leftWeight = (double) leftIndices.size() / X.length;
            double rightWeight = (double) rightIndices.size() / X.length;

            return leftWeight * leftGini + rightWeight * rightGini;
        }

        private double giniImpurity(int[] labels) {
            if (labels.length == 0) return 0.0;

            Map<Integer, Integer> counts = new HashMap<>();
            for (int label : labels) {
                counts.merge(label, 1, Integer::sum);
            }

            double impurity = 1.0;
            for (int count : counts.values()) {
                double prob = (double) count / labels.length;
                impurity -= prob * prob;
            }

            return impurity;
        }

        private int majorityClass(int[] labels) {
            Map<Integer, Integer> counts = new HashMap<>();
            for (int label : labels) {
                counts.merge(label, 1, Integer::sum);
            }

            return counts.entrySet().stream()
                .max(Map.Entry.comparingByValue())
                .map(Map.Entry::getKey)
                .orElse(0);
        }

        private SplitData splitData(double[][] X, int[] y, Split split) {
            List<double[]> leftX = new ArrayList<>();
            List<double[]> rightX = new ArrayList<>();
            List<Integer> leftY = new ArrayList<>();
            List<Integer> rightY = new ArrayList<>();

            for (int i = 0; i < X.length; i++) {
                if (X[i][split.featureIndex] <= split.threshold) {
                    leftX.add(X[i]);
                    leftY.add(y[i]);
                } else {
                    rightX.add(X[i]);
                    rightY.add(y[i]);
                }
            }

            return new SplitData(
                leftX.toArray(new double[0][]),
                rightX.toArray(new double[0][]),
                leftY.stream().mapToInt(Integer::intValue).toArray(),
                rightY.stream().mapToInt(Integer::intValue).toArray()
            );
        }

        public int[] predict(double[][] X) {
            int[] predictions = new int[X.length];
            for (int i = 0; i < X.length; i++) {
                predictions[i] = predictSingle(X[i]);
            }
            return predictions;
        }

        private int predictSingle(double[] x) {
            Node node = root;
            while (node instanceof InternalNode) {
                InternalNode internal = (InternalNode) node;
                if (x[internal.featureIndex] <= internal.threshold) {
                    node = internal.left;
                } else {
                    node = internal.right;
                }
            }
            return ((LeafNode) node).classLabel;
        }

        interface Node {}
        static class InternalNode implements Node {
            int featureIndex;
            double threshold;
            Node left, right;

            InternalNode(int featureIndex, double threshold, Node left, Node right) {
                this.featureIndex = featureIndex;
                this.threshold = threshold;
                this.left = left;
                this.right = right;
            }
        }
        static class LeafNode implements Node {
            int classLabel;

            LeafNode(int classLabel) {
                this.classLabel = classLabel;
            }
        }

        static class Split {
            int featureIndex;
            double threshold;

            Split(int featureIndex, double threshold) {
                this.featureIndex = featureIndex;
                this.threshold = threshold;
            }
        }

        static class SplitData {
            double[][] leftX, rightX;
            int[] leftY, rightY;

            SplitData(double[][] leftX, double[][] rightX, int[] leftY, int[] rightY) {
                this.leftX = leftX;
                this.rightX = rightX;
                this.leftY = leftY;
                this.rightY = rightY;
            }
        }
    }

    /**
     * ========================================================================
     * PATTERN 2: UNSUPERVISED LEARNING ALGORITHMS
     * ========================================================================
     */

    // K-Means Clustering
    public static class KMeans {
        private final int k;
        private final int maxIterations;
        private double[][] centroids;
        private int[] labels;

        public KMeans(int k, int maxIterations) {
            this.k = k;
            this.maxIterations = maxIterations;
        }

        public void fit(double[][] X) {
            int n = X.length;
            int features = X[0].length;

            // Initialize centroids randomly
            centroids = new double[k][features];
            Random random = new Random(42);

            for (int i = 0; i < k; i++) {
                int randomIndex = random.nextInt(n);
                centroids[i] = Arrays.copyOf(X[randomIndex], features);
            }

            labels = new int[n];

            for (int iter = 0; iter < maxIterations; iter++) {
                // Assign points to nearest centroid
                boolean changed = false;
                for (int i = 0; i < n; i++) {
                    int newLabel = findNearestCentroid(X[i]);
                    if (newLabel != labels[i]) {
                        labels[i] = newLabel;
                        changed = true;
                    }
                }

                // Update centroids
                updateCentroids(X);

                if (!changed) {
                    System.out.println("[KMeans] Converged after " + iter + " iterations");
                    break;
                }
            }
        }

        private int findNearestCentroid(double[] point) {
            int nearest = 0;
            double minDistance = euclideanDistance(point, centroids[0]);

            for (int i = 1; i < k; i++) {
                double distance = euclideanDistance(point, centroids[i]);
                if (distance < minDistance) {
                    minDistance = distance;
                    nearest = i;
                }
            }

            return nearest;
        }

        private void updateCentroids(double[][] X) {
            int[] counts = new int[k];

            // Reset centroids
            for (int i = 0; i < k; i++) {
                Arrays.fill(centroids[i], 0.0);
            }

            // Sum points for each cluster
            for (int i = 0; i < X.length; i++) {
                int cluster = labels[i];
                counts[cluster]++;
                for (int j = 0; j < X[i].length; j++) {
                    centroids[cluster][j] += X[i][j];
                }
            }

            // Average to get new centroids
            for (int i = 0; i < k; i++) {
                if (counts[i] > 0) {
                    for (int j = 0; j < centroids[i].length; j++) {
                        centroids[i][j] /= counts[i];
                    }
                }
            }
        }

        private double euclideanDistance(double[] a, double[] b) {
            double sum = 0.0;
            for (int i = 0; i < a.length; i++) {
                double diff = a[i] - b[i];
                sum += diff * diff;
            }
            return Math.sqrt(sum);
        }

        public int[] predict(double[][] X) {
            int[] predictions = new int[X.length];
            for (int i = 0; i < X.length; i++) {
                predictions[i] = findNearestCentroid(X[i]);
            }
            return predictions;
        }

        public double[][] getCentroids() {
            return centroids;
        }

        public int[] getLabels() {
            return labels;
        }
    }

    // Principal Component Analysis (PCA)
    public static class PCA {
        private double[][] components;
        private double[] explainedVariance;
        private double[] explainedVarianceRatio;

        public void fit(double[][] X, int nComponents) {
            // Center the data
            double[][] centered = centerData(X);

            // Compute covariance matrix
            double[][] covariance = computeCovariance(centered);

            // Eigenvalue decomposition
            EigenResult eigen = eigenDecomposition(covariance);

            // Sort eigenvalues and eigenvectors
            sortEigen(eigen);

            // Select top n_components
            components = new double[nComponents][];
            explainedVariance = new double[nComponents];
            explainedVarianceRatio = new double[nComponents];

            double totalVariance = Arrays.stream(eigen.values).sum();

            for (int i = 0; i < nComponents; i++) {
                components[i] = eigen.vectors[i];
                explainedVariance[i] = eigen.values[i];
                explainedVarianceRatio[i] = eigen.values[i] / totalVariance;
            }
        }

        private double[][] centerData(double[][] X) {
            int n = X.length;
            int features = X[0].length;
            double[][] centered = new double[n][features];

            // Compute means
            double[] means = new double[features];
            for (int j = 0; j < features; j++) {
                for (int i = 0; i < n; i++) {
                    means[j] += X[i][j];
                }
                means[j] /= n;
            }

            // Center data
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < features; j++) {
                    centered[i][j] = X[i][j] - means[j];
                }
            }

            return centered;
        }

        private double[][] computeCovariance(double[][] X) {
            int n = X.length;
            int features = X[0].length;
            double[][] covariance = new double[features][features];

            for (int i = 0; i < features; i++) {
                for (int j = 0; j < features; j++) {
                    double sum = 0.0;
                    for (int k = 0; k < n; k++) {
                        sum += X[k][i] * X[k][j];
                    }
                    covariance[i][j] = sum / (n - 1);
                }
            }

            return covariance;
        }

        // Simplified eigenvalue decomposition (power iteration for largest eigenvalue)
        private EigenResult eigenDecomposition(double[][] matrix) {
            int n = matrix.length;
            double[] eigenvalues = new double[n];
            double[][] eigenvectors = new double[n][n];

            // Initialize eigenvectors
            for (int i = 0; i < n; i++) {
                eigenvectors[i][i] = 1.0;
            }

            // Power iteration for each eigenvalue
            for (int i = 0; i < n; i++) {
                double[] eigenvector = powerIteration(matrix, 100);
                eigenvalues[i] = rayleighQuotient(matrix, eigenvector);

                // Deflate matrix
                deflateMatrix(matrix, eigenvector, eigenvalues[i]);
            }

            return new EigenResult(eigenvalues, eigenvectors);
        }

        private double[] powerIteration(double[][] matrix, int maxIter) {
            int n = matrix.length;
            double[] vector = new double[n];
            Arrays.fill(vector, 1.0);

            for (int iter = 0; iter < maxIter; iter++) {
                double[] newVector = matrixVectorMultiply(matrix, vector);
                double norm = Math.sqrt(Arrays.stream(newVector).map(x -> x * x).sum());
                for (int i = 0; i < n; i++) {
                    vector[i] = newVector[i] / norm;
                }
            }

            return vector;
        }

        private double rayleighQuotient(double[][] matrix, double[] vector) {
            double[] mv = matrixVectorMultiply(matrix, vector);
            double numerator = dotProduct(vector, mv);
            double denominator = dotProduct(vector, vector);
            return numerator / denominator;
        }

        private void deflateMatrix(double[][] matrix, double[] eigenvector, double eigenvalue) {
            int n = matrix.length;
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    matrix[i][j] -= eigenvalue * eigenvector[i] * eigenvector[j];
                }
            }
        }

        private double[] matrixVectorMultiply(double[][] matrix, double[] vector) {
            int n = matrix.length;
            double[] result = new double[n];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    result[i] += matrix[i][j] * vector[j];
                }
            }
            return result;
        }

        private double dotProduct(double[] a, double[] b) {
            double sum = 0.0;
            for (int i = 0; i < a.length; i++) {
                sum += a[i] * b[i];
            }
            return sum;
        }

        private void sortEigen(EigenResult eigen) {
            // Simple bubble sort for eigenvalues
            for (int i = 0; i < eigen.values.length - 1; i++) {
                for (int j = 0; j < eigen.values.length - i - 1; j++) {
                    if (eigen.values[j] < eigen.values[j + 1]) {
                        // Swap eigenvalues
                        double temp = eigen.values[j];
                        eigen.values[j] = eigen.values[j + 1];
                        eigen.values[j + 1] = temp;

                        // Swap eigenvectors
                        double[] tempVec = eigen.vectors[j];
                        eigen.vectors[j] = eigen.vectors[j + 1];
                        eigen.vectors[j + 1] = tempVec;
                    }
                }
            }
        }

        public double[][] transform(double[][] X, int nComponents) {
            int n = X.length;
            double[][] transformed = new double[n][nComponents];

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < nComponents; j++) {
                    for (int k = 0; k < X[i].length; k++) {
                        transformed[i][j] += X[i][k] * components[j][k];
                    }
                }
            }

            return transformed;
        }

        public double[] getExplainedVarianceRatio() {
            return explainedVarianceRatio;
        }

        static class EigenResult {
            double[] values;
            double[][] vectors;

            EigenResult(double[] values, double[][] vectors) {
                this.values = values;
                this.vectors = vectors;
            }
        }
    }

    /**
     * ========================================================================
     * PATTERN 3: ENSEMBLE METHODS
     * ========================================================================
     */

    // Random Forest - Ensemble of Decision Trees
    public static class RandomForest {
        private final int nTrees;
        private final int maxDepth;
        private final int minSamplesSplit;
        private final int maxFeatures;
        private final List<DecisionTree> trees;
        private final Random random;

        public RandomForest(int nTrees, int maxDepth, int minSamplesSplit, int maxFeatures) {
            this.nTrees = nTrees;
            this.maxDepth = maxDepth;
            this.minSamplesSplit = minSamplesSplit;
            this.maxFeatures = maxFeatures;
            this.trees = new ArrayList<>();
            this.random = new Random(42);
        }

        public void fit(double[][] X, int[] y) {
            for (int i = 0; i < nTrees; i++) {
                // Bootstrap sampling
                BootstrapSample sample = bootstrapSample(X, y);

                // Random feature selection
                int[] featureIndices = selectRandomFeatures(X[0].length);

                // Create and train tree
                DecisionTree tree = new DecisionTree(maxDepth, minSamplesSplit);
                // Note: In practice, we'd modify DecisionTree to accept feature subset
                tree.fit(sample.X, sample.y);

                trees.add(tree);

                System.out.printf("[RandomForest] Trained tree %d/%d%n", i + 1, nTrees);
            }
        }

        private BootstrapSample bootstrapSample(double[][] X, int[] y) {
            int n = X.length;
            double[][] sampleX = new double[n][X[0].length];
            int[] sampleY = new int[n];

            for (int i = 0; i < n; i++) {
                int randomIndex = random.nextInt(n);
                sampleX[i] = Arrays.copyOf(X[randomIndex], X[randomIndex].length);
                sampleY[i] = y[randomIndex];
            }

            return new BootstrapSample(sampleX, sampleY);
        }

        private int[] selectRandomFeatures(int totalFeatures) {
            int nFeatures = Math.min(maxFeatures, totalFeatures);
            int[] indices = new int[totalFeatures];
            for (int i = 0; i < totalFeatures; i++) {
                indices[i] = i;
            }

            // Shuffle and take first nFeatures
            for (int i = totalFeatures - 1; i > 0; i--) {
                int j = random.nextInt(i + 1);
                int temp = indices[i];
                indices[i] = indices[j];
                indices[j] = temp;
            }

            return Arrays.copyOf(indices, nFeatures);
        }

        public int[] predict(double[][] X) {
            int n = X.length;
            int[][] predictions = new int[n][nTrees];

            // Get predictions from all trees
            for (int i = 0; i < nTrees; i++) {
                int[] treePredictions = trees.get(i).predict(X);
                for (int j = 0; j < n; j++) {
                    predictions[j][i] = treePredictions[j];
                }
            }

            // Majority vote
            int[] finalPredictions = new int[n];
            for (int i = 0; i < n; i++) {
                finalPredictions[i] = majorityVote(predictions[i]);
            }

            return finalPredictions;
        }

        private int majorityVote(int[] votes) {
            Map<Integer, Integer> voteCounts = new HashMap<>();
            for (int vote : votes) {
                voteCounts.merge(vote, 1, Integer::sum);
            }

            return voteCounts.entrySet().stream()
                .max(Map.Entry.comparingByValue())
                .map(Map.Entry::getKey)
                .orElse(0);
        }

        static class BootstrapSample {
            double[][] X;
            int[] y;

            BootstrapSample(double[][] X, int[] y) {
                this.X = X;
                this.y = y;
            }
        }
    }

    // Gradient Boosting
    static class GradientBoosting {
        private final int nEstimators;
        private final double learningRate;
        private final int maxDepth;
        private final List<DecisionTree> trees;
        private double[] initialPrediction;
        private final List<double[]> predictions;

        public GradientBoosting(int nEstimators, double learningRate, int maxDepth) {
            this.nEstimators = nEstimators;
            this.learningRate = learningRate;
            this.maxDepth = maxDepth;
            this.trees = new ArrayList<>();
            this.predictions = new ArrayList<>();
        }

        public void fit(double[][] X, double[] y) {
            int n = X.length;

            // Initialize with mean prediction
            initialPrediction = new double[]{Arrays.stream(y).average().orElse(0.0)};
            double[] currentPredictions = new double[n];
            Arrays.fill(currentPredictions, initialPrediction[0]);

            for (int i = 0; i < nEstimators; i++) {
                // Calculate residuals (negative gradients)
                double[] residuals = new double[n];
                for (int j = 0; j < n; j++) {
                    residuals[j] = y[j] - currentPredictions[j];
                }

                // Fit tree to residuals
                DecisionTree tree = new DecisionTree(maxDepth, 2);
                // Note: Would need to modify DecisionTree for regression
                // For now, using classification tree as approximation

                // Update predictions
                // In practice, tree would predict residuals
                double[] treePredictions = new double[n]; // Would be tree predictions
                Arrays.fill(treePredictions, 0.1); // Simplified

                for (int j = 0; j < n; j++) {
                    currentPredictions[j] += learningRate * treePredictions[j];
                }

                trees.add(tree);
                predictions.add(Arrays.copyOf(currentPredictions, n));

                double mse = meanSquaredError(y, currentPredictions);
                System.out.printf("[GradientBoosting] Iteration %d, MSE: %.6f%n", i + 1, mse);
            }
        }

        public double[] predict(double[][] X) {
            // Return final predictions
            return predictions.isEmpty() ? new double[X.length] : predictions.get(predictions.size() - 1);
        }

        private double meanSquaredError(double[] actual, double[] predicted) {
            double sum = 0.0;
            for (int i = 0; i < actual.length; i++) {
                double error = actual[i] - predicted[i];
                sum += error * error;
            }
            return sum / actual.length;
        }
    }

    /**
     * ========================================================================
     * PATTERN 4: FEATURE ENGINEERING & PREPROCESSING
     * ========================================================================
     */

    // Standard Scaler - Z-score normalization
    static class StandardScaler {
        private double[] means;
        private double[] stds;

        public void fit(double[][] X) {
            int n = X.length;
            int features = X[0].length;

            means = new double[features];
            stds = new double[features];

            // Calculate means
            for (int j = 0; j < features; j++) {
                double sum = 0.0;
                for (int i = 0; i < n; i++) {
                    sum += X[i][j];
                }
                means[j] = sum / n;
            }

            // Calculate standard deviations
            for (int j = 0; j < features; j++) {
                double sumSquaredDiffs = 0.0;
                for (int i = 0; i < n; i++) {
                    double diff = X[i][j] - means[j];
                    sumSquaredDiffs += diff * diff;
                }
                stds[j] = Math.sqrt(sumSquaredDiffs / (n - 1));
            }
        }

        public double[][] transform(double[][] X) {
            int n = X.length;
            int features = X[0].length;
            double[][] scaled = new double[n][features];

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < features; j++) {
                    scaled[i][j] = (X[i][j] - means[j]) / stds[j];
                }
            }

            return scaled;
        }

        public double[] transform(double[] x) {
            double[] scaled = new double[x.length];
            for (int j = 0; j < x.length; j++) {
                scaled[j] = (x[j] - means[j]) / stds[j];
            }
            return scaled;
        }
    }

    // Min-Max Scaler - Feature scaling to [0, 1]
    static class MinMaxScaler {
        private double[] mins;
        private double[] maxs;

        public void fit(double[][] X) {
            int features = X[0].length;
            mins = new double[features];
            maxs = new double[features];

            Arrays.fill(mins, Double.MAX_VALUE);
            Arrays.fill(maxs, Double.MIN_VALUE);

            for (double[] row : X) {
                for (int j = 0; j < features; j++) {
                    mins[j] = Math.min(mins[j], row[j]);
                    maxs[j] = Math.max(maxs[j], row[j]);
                }
            }
        }

        public double[][] transform(double[][] X) {
            int n = X.length;
            int features = X[0].length;
            double[][] scaled = new double[n][features];

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < features; j++) {
                    double range = maxs[j] - mins[j];
                    scaled[i][j] = range == 0 ? 0 : (X[i][j] - mins[j]) / range;
                }
            }

            return scaled;
        }
    }

    // One-Hot Encoder - Categorical to numerical
    static class OneHotEncoder {
        private final Map<String, Integer> featureMap;
        private final List<String> categories;
        private int outputFeatures;

        public OneHotEncoder() {
            this.featureMap = new HashMap<>();
            this.categories = new ArrayList<>();
        }

        public void fit(String[] categories) {
            this.categories.addAll(Arrays.asList(categories));
            Collections.sort(this.categories);

            for (int i = 0; i < this.categories.size(); i++) {
                featureMap.put(this.categories.get(i), i);
            }

            outputFeatures = this.categories.size();
        }

        public double[] transform(String category) {
            double[] encoded = new double[outputFeatures];
            Integer index = featureMap.get(category);
            if (index != null) {
                encoded[index] = 1.0;
            }
            return encoded;
        }

        public double[][] transform(String[] categories) {
            double[][] encoded = new double[categories.length][outputFeatures];
            for (int i = 0; i < categories.length; i++) {
                encoded[i] = transform(categories[i]);
            }
            return encoded;
        }

        public int getOutputFeatures() {
            return outputFeatures;
        }
    }

    // Polynomial Features - Create polynomial combinations
    static class PolynomialFeatures {
        private final int degree;

        public PolynomialFeatures(int degree) {
            this.degree = degree;
        }

        public double[][] transform(double[][] X) {
            int n = X.length;
            int features = X[0].length;

            // Calculate number of polynomial features
            int polyFeatures = 0;
            for (int d = 0; d <= degree; d++) {
                polyFeatures += binomial(features + d, d);
            }

            double[][] polyX = new double[n][polyFeatures];

            for (int i = 0; i < n; i++) {
                List<Double> polyRow = generatePolynomialFeatures(X[i], degree);
                for (int j = 0; j < polyRow.size(); j++) {
                    polyX[i][j] = polyRow.get(j);
                }
            }

            return polyX;
        }

        private List<Double> generatePolynomialFeatures(double[] x, int degree) {
            List<Double> features = new ArrayList<>();
            generateFeaturesRecursive(x, degree, new int[x.length], 0, 1.0, features);
            return features;
        }

        private void generateFeaturesRecursive(double[] x, int degree, int[] exponents,
                                             int start, double value, List<Double> features) {
            if (Arrays.stream(exponents).sum() > degree) {
                return;
            }

            features.add(value);

            for (int i = start; i < x.length; i++) {
                int[] newExponents = Arrays.copyOf(exponents, exponents.length);
                newExponents[i]++;
                generateFeaturesRecursive(x, degree, newExponents, i,
                                        value * x[i], features);
            }
        }

        private int binomial(int n, int k) {
            if (k > n - k) {
                k = n - k;
            }

            int result = 1;
            for (int i = 1; i <= k; i++) {
                result *= (n - k + i);
                result /= i;
            }
            return result;
        }
    }

    /**
     * ========================================================================
     * PATTERN 5: MODEL EVALUATION METRICS
     * ========================================================================
     */

    static class ModelEvaluation {

        // Classification Metrics
        public static double accuracy(int[] actual, int[] predicted) {
            int correct = 0;
            for (int i = 0; i < actual.length; i++) {
                if (actual[i] == predicted[i]) {
                    correct++;
                }
            }
            return (double) correct / actual.length;
        }

        public static double precision(int[] actual, int[] predicted, int positiveClass) {
            int truePositives = 0;
            int falsePositives = 0;

            for (int i = 0; i < actual.length; i++) {
                if (predicted[i] == positiveClass) {
                    if (actual[i] == positiveClass) {
                        truePositives++;
                    } else {
                        falsePositives++;
                    }
                }
            }

            return truePositives + falsePositives == 0 ? 0 :
                   (double) truePositives / (truePositives + falsePositives);
        }

        public static double recall(int[] actual, int[] predicted, int positiveClass) {
            int truePositives = 0;
            int falseNegatives = 0;

            for (int i = 0; i < actual.length; i++) {
                if (actual[i] == positiveClass) {
                    if (predicted[i] == positiveClass) {
                        truePositives++;
                    } else {
                        falseNegatives++;
                    }
                }
            }

            return truePositives + falseNegatives == 0 ? 0 :
                   (double) truePositives / (truePositives + falseNegatives);
        }

        public static double f1Score(int[] actual, int[] predicted, int positiveClass) {
            double precision = precision(actual, predicted, positiveClass);
            double recall = recall(actual, predicted, positiveClass);

            return precision + recall == 0 ? 0 : 2 * (precision * recall) / (precision + recall);
        }

        // Regression Metrics
        public static double meanSquaredError(double[] actual, double[] predicted) {
            double sum = 0.0;
            for (int i = 0; i < actual.length; i++) {
                double error = actual[i] - predicted[i];
                sum += error * error;
            }
            return sum / actual.length;
        }

        public static double meanAbsoluteError(double[] actual, double[] predicted) {
            double sum = 0.0;
            for (int i = 0; i < actual.length; i++) {
                sum += Math.abs(actual[i] - predicted[i]);
            }
            return sum / actual.length;
        }

        public static double rSquared(double[] actual, double[] predicted) {
            double mean = Arrays.stream(actual).average().orElse(0.0);

            double ssRes = 0.0; // Sum of squares of residuals
            double ssTot = 0.0; // Total sum of squares

            for (int i = 0; i < actual.length; i++) {
                double residual = actual[i] - predicted[i];
                ssRes += residual * residual;

                double total = actual[i] - mean;
                ssTot += total * total;
            }

            return ssTot == 0 ? 0 : 1 - (ssRes / ssTot);
        }

        // Cross-validation
        public static double crossValidate(MLModel model, double[][] X, int[] y, int k) {
            int n = X.length;
            int foldSize = n / k;
            double[] scores = new double[k];

            for (int fold = 0; fold < k; fold++) {
                int start = fold * foldSize;
                int end = start + foldSize;

                // Split data
                double[][] trainX = concatenate(Arrays.copyOfRange(X, 0, start),
                                              Arrays.copyOfRange(X, end, n));
                int[] trainY = concatenate(Arrays.copyOfRange(y, 0, start),
                                         Arrays.copyOfRange(y, end, n));

                double[][] testX = Arrays.copyOfRange(X, start, end);
                int[] testY = Arrays.copyOfRange(y, start, end);

                // Train and evaluate
                model.fit(trainX, trainY);
                int[] predictions = model.predict(testX);
                scores[fold] = accuracy(testY, predictions);
            }

            return Arrays.stream(scores).average().orElse(0.0);
        }

        private static double[][] concatenate(double[][] a, double[][] b) {
            double[][] result = new double[a.length + b.length][];
            System.arraycopy(a, 0, result, 0, a.length);
            System.arraycopy(b, 0, result, a.length, b.length);
            return result;
        }

        private static int[] concatenate(int[] a, int[] b) {
            int[] result = new int[a.length + b.length];
            System.arraycopy(a, 0, result, 0, a.length);
            System.arraycopy(b, 0, result, a.length, b.length);
            return result;
        }
    }

    interface MLModel {
        void fit(double[][] X, int[] y);
        int[] predict(double[][] X);
    }

    /**
     * ========================================================================
     * DEMONSTRATION
     * ========================================================================
     */

    public static void main(String[] args) {
        System.out.println("=".repeat(70));
        System.out.println("DAY 35: MACHINE LEARNING & AI PATTERNS");
        System.out.println("Core ML Algorithms and Patterns");
        System.out.println("=".repeat(70));

        // Demo 1: Linear Regression
        System.out.println("\n=== Demo 1: Linear Regression ===");
        double[][] X = {
            {1.0, 2.0}, {2.0, 3.0}, {3.0, 4.0}, {4.0, 5.0}, {5.0, 6.0}
        };
        double[] y = {3.0, 5.0, 7.0, 9.0, 11.0};

        LinearRegression lr = new LinearRegression(0.01, 1000);
        lr.fit(X, y);

        double[] testX = {6.0, 7.0};
        double prediction = lr.predict(testX);
        System.out.printf("Prediction for [6.0, 7.0]: %.2f%n", prediction);

        // Demo 2: Logistic Regression
        System.out.println("\n=== Demo 2: Logistic Regression ===");
        double[][] X_binary = {
            {2.0, 3.0}, {1.0, 3.0}, {2.0, 1.0}, {3.0, 2.0}, {3.0, 3.0}
        };
        int[] y_binary = {1, 0, 0, 1, 1};

        LogisticRegression logReg = new LogisticRegression(0.1, 1000);
        logReg.fit(X_binary, y_binary);

        double[] probs = logReg.predictProbabilities(X_binary);
        System.out.println("Predicted probabilities: " + Arrays.toString(probs));

        // Demo 3: Decision Tree
        System.out.println("\n=== Demo 3: Decision Tree ===");
        double[][] X_tree = {
            {2.0, 3.0}, {1.0, 3.0}, {2.0, 1.0}, {3.0, 2.0}, {3.0, 3.0}
        };
        int[] y_tree = {1, 0, 0, 1, 1};

        DecisionTree tree = new DecisionTree(3, 2);
        tree.fit(X_tree, y_tree);

        int[] predictions = tree.predict(X_tree);
        System.out.println("Tree predictions: " + Arrays.toString(predictions));

        // Demo 4: K-Means Clustering
        System.out.println("\n=== Demo 4: K-Means Clustering ===");
        double[][] X_cluster = {
            {1.0, 2.0}, {1.5, 1.8}, {5.0, 8.0}, {8.0, 8.0},
            {1.0, 0.6}, {9.0, 11.0}, {8.0, 2.0}, {10.0, 2.0}
        };

        KMeans kmeans = new KMeans(3, 100);
        kmeans.fit(X_cluster);

        int[] labels = kmeans.getLabels();
        System.out.println("Cluster labels: " + Arrays.toString(labels));

        // Demo 5: Feature Scaling
        System.out.println("\n=== Demo 5: Feature Scaling ===");
        double[][] X_scale = {
            {1.0, 100.0}, {2.0, 200.0}, {3.0, 300.0}, {4.0, 400.0}
        };

        StandardScaler scaler = new StandardScaler();
        scaler.fit(X_scale);
        double[][] scaled = scaler.transform(X_scale);

        System.out.println("Original data:");
        for (double[] row : X_scale) {
            System.out.println(Arrays.toString(row));
        }
        System.out.println("Scaled data:");
        for (double[] row : scaled) {
            System.out.println(Arrays.toString(row));
        }

        // Demo 6: Model Evaluation
        System.out.println("\n=== Demo 6: Model Evaluation ===");
        int[] actual = {1, 0, 1, 1, 0, 0, 1, 0};
        int[] predicted = {1, 0, 1, 0, 0, 1, 1, 0};

        double acc = ModelEvaluation.accuracy(actual, predicted);
        double prec = ModelEvaluation.precision(actual, predicted, 1);
        double rec = ModelEvaluation.recall(actual, predicted, 1);
        double f1 = ModelEvaluation.f1Score(actual, predicted, 1);

        System.out.printf("Accuracy: %.3f%n", acc);
        System.out.printf("Precision: %.3f%n", prec);
        System.out.printf("Recall: %.3f%n", rec);
        System.out.printf("F1-Score: %.3f%n", f1);

        System.out.println("\n" + "=".repeat(70));
        System.out.println("ALL DEMONSTRATIONS COMPLETED SUCCESSFULLY!");
        System.out.println("=".repeat(70));
    }
}
