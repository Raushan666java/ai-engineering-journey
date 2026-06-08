package day35.ml;

import java.util.*;
import java.util.concurrent.*;
import java.util.stream.*;
import java.util.function.*;
import java.time.*;
import java.util.regex.*;

/**
 * DAY 35: ADVANCED MACHINE LEARNING PATTERNS
 *
 * Topics Covered:
 * 1. Deep Learning Fundamentals (Neural Networks, Backpropagation)
 * 2. Natural Language Processing (Text Processing, Embeddings)
 * 3. Time Series Analysis (ARIMA, Forecasting)
 * 4. Anomaly Detection (Isolation Forest, Autoencoders)
 * 5. Recommendation Systems (Collaborative Filtering, Content-Based)
 * 6. Reinforcement Learning Basics
 *
 * Real-world applications:
 * - OpenAI GPT: Transformer architecture for language modeling
 * - Netflix: Deep learning for video recommendations
 * - Tesla: Computer vision for autonomous driving
 * - Google Translate: Neural machine translation
 * - Amazon Alexa: Natural language understanding
 */

public class AdvancedMLPatterns {

    /**
     * ========================================================================
     * PATTERN 1: NEURAL NETWORKS & DEEP LEARNING
     * ========================================================================
     */

    // Simple Neural Network with Backpropagation
    public static class NeuralNetwork {
        private final int inputSize;
        private final int hiddenSize;
        private final int outputSize;
        private final double learningRate;
        private final int epochs;

        private double[][] weightsInputHidden;
        private double[][] weightsHiddenOutput;
        private double[] biasHidden;
        private double[] biasOutput;

        public NeuralNetwork(int inputSize, int hiddenSize, int outputSize,
                           double learningRate, int epochs) {
            this.inputSize = inputSize;
            this.hiddenSize = hiddenSize;
            this.outputSize = outputSize;
            this.learningRate = learningRate;
            this.epochs = epochs;

            initializeWeights();
        }

        private void initializeWeights() {
            Random random = new Random(42);

            weightsInputHidden = new double[inputSize][hiddenSize];
            weightsHiddenOutput = new double[hiddenSize][outputSize];
            biasHidden = new double[hiddenSize];
            biasOutput = new double[outputSize];

            // Xavier initialization
            double inputHiddenLimit = Math.sqrt(6.0 / (inputSize + hiddenSize));
            double hiddenOutputLimit = Math.sqrt(6.0 / (hiddenSize + outputSize));

            for (int i = 0; i < inputSize; i++) {
                for (int j = 0; j < hiddenSize; j++) {
                    weightsInputHidden[i][j] = random.nextDouble() * 2 * inputHiddenLimit - inputHiddenLimit;
                }
            }

            for (int i = 0; i < hiddenSize; i++) {
                for (int j = 0; j < outputSize; j++) {
                    weightsHiddenOutput[i][j] = random.nextDouble() * 2 * hiddenOutputLimit - hiddenOutputLimit;
                }
            }
        }

        public void fit(double[][] X, double[][] y) {
            for (int epoch = 0; epoch < epochs; epoch++) {
                double totalLoss = 0.0;

                for (int i = 0; i < X.length; i++) {
                    // Forward pass
                    double[] hidden = forwardHidden(X[i]);
                    double[] output = forwardOutput(hidden);

                    // Compute loss (MSE)
                    double[] errors = new double[outputSize];
                    for (int j = 0; j < outputSize; j++) {
                        errors[j] = output[j] - y[i][j];
                        totalLoss += errors[j] * errors[j];
                    }

                    // Backward pass
                    backward(X[i], hidden, output, errors);
                }

                if (epoch % 100 == 0) {
                    System.out.printf("[NeuralNetwork] Epoch %d, Loss: %.6f%n",
                                    epoch, totalLoss / X.length);
                }
            }
        }

        private double[] forwardHidden(double[] input) {
            double[] hidden = new double[hiddenSize];
            for (int j = 0; j < hiddenSize; j++) {
                double sum = biasHidden[j];
                for (int i = 0; i < inputSize; i++) {
                    sum += input[i] * weightsInputHidden[i][j];
                }
                hidden[j] = relu(sum);
            }
            return hidden;
        }

        private double[] forwardOutput(double[] hidden) {
            double[] output = new double[outputSize];
            for (int j = 0; j < outputSize; j++) {
                double sum = biasOutput[j];
                for (int i = 0; i < hiddenSize; i++) {
                    sum += hidden[i] * weightsHiddenOutput[i][j];
                }
                output[j] = sigmoid(sum);
            }
            return output;
        }

        private void backward(double[] input, double[] hidden, double[] output, double[] errors) {
            // Output layer gradients
            double[] outputDeltas = new double[outputSize];
            for (int j = 0; j < outputSize; j++) {
                outputDeltas[j] = errors[j] * sigmoidDerivative(output[j]);
            }

            // Hidden layer gradients
            double[] hiddenDeltas = new double[hiddenSize];
            for (int i = 0; i < hiddenSize; i++) {
                double error = 0.0;
                for (int j = 0; j < outputSize; j++) {
                    error += outputDeltas[j] * weightsHiddenOutput[i][j];
                }
                hiddenDeltas[i] = error * reluDerivative(hidden[i]);
            }

            // Update weights and biases
            // Hidden to output
            for (int i = 0; i < hiddenSize; i++) {
                for (int j = 0; j < outputSize; j++) {
                    weightsHiddenOutput[i][j] -= learningRate * outputDeltas[j] * hidden[i];
                }
            }
            for (int j = 0; j < outputSize; j++) {
                biasOutput[j] -= learningRate * outputDeltas[j];
            }

            // Input to hidden
            for (int i = 0; i < inputSize; i++) {
                for (int j = 0; j < hiddenSize; j++) {
                    weightsInputHidden[i][j] -= learningRate * hiddenDeltas[j] * input[i];
                }
            }
            for (int j = 0; j < hiddenSize; j++) {
                biasHidden[j] -= learningRate * hiddenDeltas[j];
            }
        }

        public double[][] predict(double[][] X) {
            double[][] predictions = new double[X.length][outputSize];
            for (int i = 0; i < X.length; i++) {
                double[] hidden = forwardHidden(X[i]);
                predictions[i] = forwardOutput(hidden);
            }
            return predictions;
        }

        private double relu(double x) {
            return Math.max(0, x);
        }

        private double reluDerivative(double x) {
            return x > 0 ? 1.0 : 0.0;
        }

        private double sigmoid(double x) {
            return 1.0 / (1.0 + Math.exp(-x));
        }

        private double sigmoidDerivative(double x) {
            return x * (1.0 - x);
        }
    }

    // Convolutional Neural Network (CNN) for Image Processing
    static class ConvolutionalNN {
        private final int inputHeight;
        private final int inputWidth;
        private final int numFilters;
        private final int filterSize;
        private final int poolSize;
        private final int hiddenSize;
        private final int outputSize;

        private double[][][] filters; // [numFilters][filterSize][filterSize]
        private double[] filterBiases;
        private double[][] weightsHidden;
        private double[][] weightsOutput;
        private double[] biasHidden;
        private double[] biasOutput;

        public ConvolutionalNN(int inputHeight, int inputWidth, int numFilters,
                             int filterSize, int poolSize, int hiddenSize, int outputSize) {
            this.inputHeight = inputHeight;
            this.inputWidth = inputWidth;
            this.numFilters = numFilters;
            this.filterSize = filterSize;
            this.poolSize = poolSize;
            this.hiddenSize = hiddenSize;
            this.outputSize = outputSize;

            initializeParameters();
        }

        private void initializeParameters() {
            Random random = new Random(42);

            filters = new double[numFilters][filterSize][filterSize];
            filterBiases = new double[numFilters];

            for (int f = 0; f < numFilters; f++) {
                for (int i = 0; i < filterSize; i++) {
                    for (int j = 0; j < filterSize; j++) {
                        filters[f][i][j] = random.nextGaussian() * 0.1;
                    }
                }
                filterBiases[f] = 0.0;
            }

            int convOutputSize = (inputHeight - filterSize + 1) / poolSize;
            int flattenedSize = convOutputSize * convOutputSize * numFilters;

            weightsHidden = new double[flattenedSize][hiddenSize];
            weightsOutput = new double[hiddenSize][outputSize];
            biasHidden = new double[hiddenSize];
            biasOutput = new double[outputSize];

            // Initialize fully connected layers
            for (int i = 0; i < flattenedSize; i++) {
                for (int j = 0; j < hiddenSize; j++) {
                    weightsHidden[i][j] = random.nextGaussian() * 0.1;
                }
            }

            for (int i = 0; i < hiddenSize; i++) {
                for (int j = 0; j < outputSize; j++) {
                    weightsOutput[i][j] = random.nextGaussian() * 0.1;
                }
            }
        }

        public double[][] forward(double[][] input) {
            // Convolution
            double[][][] convOutput = convolve(input);

            // Max pooling
            double[][][] pooled = maxPool(convOutput);

            // Flatten
            double[] flattened = flatten(pooled);

            // Fully connected layers
            double[] hidden = matrixVectorMultiply(weightsHidden, flattened);
            addBias(hidden, biasHidden);
            applyRelu(hidden);

            double[] output = matrixVectorMultiply(weightsOutput, hidden);
            addBias(output, biasOutput);
            applySoftmax(output);

            return new double[][]{output};
        }

        private double[][][] convolve(double[][] input) {
            int outputHeight = inputHeight - filterSize + 1;
            int outputWidth = inputWidth - filterSize + 1;
            double[][][] output = new double[numFilters][outputHeight][outputWidth];

            for (int f = 0; f < numFilters; f++) {
                for (int i = 0; i < outputHeight; i++) {
                    for (int j = 0; j < outputWidth; j++) {
                        double sum = filterBiases[f];
                        for (int fi = 0; fi < filterSize; fi++) {
                            for (int fj = 0; fj < filterSize; fj++) {
                                sum += input[i + fi][j + fj] * filters[f][fi][fj];
                            }
                        }
                        output[f][i][j] = relu(sum);
                    }
                }
            }

            return output;
        }

        private double[][][] maxPool(double[][][] input) {
            int inputHeight = input[0].length;
            int inputWidth = input[0][0].length;
            int outputHeight = inputHeight / poolSize;
            int outputWidth = inputWidth / poolSize;

            double[][][] output = new double[numFilters][outputHeight][outputWidth];

            for (int f = 0; f < numFilters; f++) {
                for (int i = 0; i < outputHeight; i++) {
                    for (int j = 0; j < outputWidth; j++) {
                        double max = Double.MIN_VALUE;
                        for (int pi = 0; pi < poolSize; pi++) {
                            for (int pj = 0; pj < poolSize; pj++) {
                                max = Math.max(max, input[f][i * poolSize + pi][j * poolSize + pj]);
                            }
                        }
                        output[f][i][j] = max;
                    }
                }
            }

            return output;
        }

        private double[] flatten(double[][][] input) {
            int totalSize = input.length * input[0].length * input[0][0].length;
            double[] flattened = new double[totalSize];
            int index = 0;

            for (int f = 0; f < input.length; f++) {
                for (int i = 0; i < input[f].length; i++) {
                    for (int j = 0; j < input[f][i].length; j++) {
                        flattened[index++] = input[f][i][j];
                    }
                }
            }

            return flattened;
        }

        private double[] matrixVectorMultiply(double[][] matrix, double[] vector) {
            double[] result = new double[matrix[0].length];
            for (int i = 0; i < matrix.length; i++) {
                for (int j = 0; j < matrix[0].length; j++) {
                    result[j] += matrix[i][j] * vector[i];
                }
            }
            return result;
        }

        private void addBias(double[] vector, double[] bias) {
            for (int i = 0; i < vector.length; i++) {
                vector[i] += bias[i];
            }
        }

        private void applyRelu(double[] vector) {
            for (int i = 0; i < vector.length; i++) {
                vector[i] = Math.max(0, vector[i]);
            }
        }

        private void applySoftmax(double[] vector) {
            double max = Arrays.stream(vector).max().orElse(0.0);
            double sum = 0.0;

            for (int i = 0; i < vector.length; i++) {
                vector[i] = Math.exp(vector[i] - max);
                sum += vector[i];
            }

            for (int i = 0; i < vector.length; i++) {
                vector[i] /= sum;
            }
        }

        private double relu(double x) {
            return Math.max(0, x);
        }
    }

    /**
     * ========================================================================
     * PATTERN 2: NATURAL LANGUAGE PROCESSING
     * ========================================================================
     */

    // Text Preprocessing Pipeline
    static class TextPreprocessor {
        private final Set<String> stopWords;
        private final Pattern punctuationPattern;

        public TextPreprocessor() {
            stopWords = new HashSet<>(Arrays.asList(
                "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for",
                "of", "with", "by", "is", "are", "was", "were", "be", "been", "being",
                "have", "has", "had", "do", "does", "did", "will", "would", "could",
                "should", "may", "might", "must", "can", "shall"
            ));
            punctuationPattern = Pattern.compile("[^a-zA-Z\\s]");
        }

        public String preprocess(String text) {
            // Convert to lowercase
            text = text.toLowerCase();

            // Remove punctuation
            text = punctuationPattern.matcher(text).replaceAll("");

            // Tokenize
            String[] tokens = text.split("\\s+");

            // Remove stop words and filter
            List<String> filteredTokens = Arrays.stream(tokens)
                .filter(token -> token.length() > 2)
                .filter(token -> !stopWords.contains(token))
                .collect(Collectors.toList());

            return String.join(" ", filteredTokens);
        }

        public List<String> tokenize(String text) {
            return Arrays.asList(preprocess(text).split("\\s+"));
        }

        public Map<String, Integer> buildVocabulary(List<String> documents) {
            Map<String, Integer> vocab = new HashMap<>();
            int index = 0;

            for (String doc : documents) {
                List<String> tokens = tokenize(doc);
                for (String token : tokens) {
                    if (!vocab.containsKey(token)) {
                        vocab.put(token, index++);
                    }
                }
            }

            return vocab;
        }
    }

    // TF-IDF Vectorizer
    static class TFIDFVectorizer {
        private Map<String, Integer> vocabulary;
        private Map<String, Double> idfScores;
        private final TextPreprocessor preprocessor;

        public TFIDFVectorizer() {
            this.preprocessor = new TextPreprocessor();
        }

        public void fit(List<String> documents) {
            // Build vocabulary
            vocabulary = preprocessor.buildVocabulary(documents);

            // Calculate IDF scores
            idfScores = new HashMap<>();
            int nDocuments = documents.size();

            for (String term : vocabulary.keySet()) {
                int df = 0; // Document frequency
                for (String doc : documents) {
                    List<String> tokens = preprocessor.tokenize(doc);
                    if (tokens.contains(term)) {
                        df++;
                    }
                }
                idfScores.put(term, Math.log((double) nDocuments / (1 + df)));
            }
        }

        public double[][] transform(List<String> documents) {
            double[][] tfidfMatrix = new double[documents.size()][vocabulary.size()];

            for (int i = 0; i < documents.size(); i++) {
                List<String> tokens = preprocessor.tokenize(documents.get(i));
                Map<String, Integer> termFreq = new HashMap<>();

                // Calculate term frequencies
                for (String token : tokens) {
                    termFreq.merge(token, 1, Integer::sum);
                }

                // Calculate TF-IDF
                for (Map.Entry<String, Integer> entry : termFreq.entrySet()) {
                    String term = entry.getKey();
                    int tf = entry.getValue();
                    double idf = idfScores.getOrDefault(term, 0.0);

                    Integer termIndex = vocabulary.get(term);
                    if (termIndex != null) {
                        double tfidf = (double) tf * idf;
                        tfidfMatrix[i][termIndex] = tfidf;
                    }
                }
            }

            return tfidfMatrix;
        }

        public double[] transform(String document) {
            return transform(Arrays.asList(document))[0];
        }
    }

    // Word Embeddings (Simplified Word2Vec-like)
    static class WordEmbeddings {
        private final int vocabSize;
        private final int embeddingDim;
        private final int windowSize;
        private final double learningRate;
        private final int epochs;

        private Map<String, Integer> wordToIndex;
        private List<String> indexToWord;
        private double[][] embeddings;

        public WordEmbeddings(int vocabSize, int embeddingDim, int windowSize,
                            double learningRate, int epochs) {
            this.vocabSize = vocabSize;
            this.embeddingDim = embeddingDim;
            this.windowSize = windowSize;
            this.learningRate = learningRate;
            this.epochs = epochs;
        }

        public void fit(List<String> sentences) {
            // Build vocabulary
            buildVocabulary(sentences);

            // Initialize embeddings
            Random random = new Random(42);
            embeddings = new double[vocabSize][embeddingDim];
            for (int i = 0; i < vocabSize; i++) {
                for (int j = 0; j < embeddingDim; j++) {
                    embeddings[i][j] = (random.nextDouble() - 0.5) * 0.1;
                }
            }

            // Train using skip-gram
            for (int epoch = 0; epoch < epochs; epoch++) {
                for (String sentence : sentences) {
                    List<String> tokens = tokenize(sentence);
                    for (int i = 0; i < tokens.size(); i++) {
                        String targetWord = tokens.get(i);
                        Integer targetIndex = wordToIndex.get(targetWord);
                        if (targetIndex == null) continue;

                        // Context words
                        for (int j = Math.max(0, i - windowSize);
                             j < Math.min(tokens.size(), i + windowSize + 1); j++) {
                            if (j == i) continue;

                            String contextWord = tokens.get(j);
                            Integer contextIndex = wordToIndex.get(contextWord);
                            if (contextIndex == null) continue;

                            // Update embeddings
                            updateEmbeddings(targetIndex, contextIndex);
                        }
                    }
                }

                if (epoch % 10 == 0) {
                    System.out.printf("[WordEmbeddings] Epoch %d completed%n", epoch);
                }
            }
        }

        private void buildVocabulary(List<String> sentences) {
            wordToIndex = new HashMap<>();
            indexToWord = new ArrayList<>();
            Map<String, Integer> wordFreq = new HashMap<>();

            // Count word frequencies
            for (String sentence : sentences) {
                List<String> tokens = tokenize(sentence);
                for (String token : tokens) {
                    wordFreq.merge(token, 1, Integer::sum);
                }
            }

            // Sort by frequency and take top vocabSize words
            wordFreq.entrySet().stream()
                .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
                .limit(vocabSize)
                .forEach(entry -> {
                    wordToIndex.put(entry.getKey(), indexToWord.size());
                    indexToWord.add(entry.getKey());
                });
        }

        private List<String> tokenize(String text) {
            return Arrays.asList(text.toLowerCase()
                .replaceAll("[^a-zA-Z\\s]", "")
                .split("\\s+"));
        }

        private void updateEmbeddings(int targetIndex, int contextIndex) {
            // Simplified: just move similar words closer
            double[] targetEmbedding = embeddings[targetIndex];
            double[] contextEmbedding = embeddings[contextIndex];

            // Calculate similarity (cosine similarity)
            double dotProduct = 0.0;
            double targetNorm = 0.0;
            double contextNorm = 0.0;

            for (int i = 0; i < embeddingDim; i++) {
                dotProduct += targetEmbedding[i] * contextEmbedding[i];
                targetNorm += targetEmbedding[i] * targetEmbedding[i];
                contextNorm += contextEmbedding[i] * contextEmbedding[i];
            }

            targetNorm = Math.sqrt(targetNorm);
            contextNorm = Math.sqrt(contextNorm);

            double similarity = dotProduct / (targetNorm * contextNorm + 1e-8);

            // Update embeddings to increase similarity
            double gradient = (1 - similarity) * learningRate;

            for (int i = 0; i < embeddingDim; i++) {
                double diff = targetEmbedding[i] - contextEmbedding[i];
                targetEmbedding[i] += gradient * diff;
                contextEmbedding[i] -= gradient * diff;
            }
        }

        public double[] getEmbedding(String word) {
            Integer index = wordToIndex.get(word);
            return index != null ? Arrays.copyOf(embeddings[index], embeddingDim) : null;
        }

        public List<String> findSimilarWords(String word, int topK) {
            double[] targetEmbedding = getEmbedding(word);
            if (targetEmbedding == null) return new ArrayList<>();

            List<WordSimilarity> similarities = new ArrayList<>();

            for (int i = 0; i < vocabSize; i++) {
                if (indexToWord.get(i).equals(word)) continue;

                double similarity = cosineSimilarity(targetEmbedding, embeddings[i]);
                similarities.add(new WordSimilarity(indexToWord.get(i), similarity));
            }

            return similarities.stream()
                .sorted((a, b) -> Double.compare(b.similarity, a.similarity))
                .limit(topK)
                .map(ws -> ws.word)
                .collect(Collectors.toList());
        }

        private double cosineSimilarity(double[] a, double[] b) {
            double dotProduct = 0.0;
            double normA = 0.0;
            double normB = 0.0;

            for (int i = 0; i < a.length; i++) {
                dotProduct += a[i] * b[i];
                normA += a[i] * a[i];
                normB += b[i] * b[i];
            }

            return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB) + 1e-8);
        }

        static class WordSimilarity {
            String word;
            double similarity;

            WordSimilarity(String word, double similarity) {
                this.word = word;
                this.similarity = similarity;
            }
        }
    }

    /**
     * ========================================================================
     * PATTERN 3: TIME SERIES ANALYSIS
     * ========================================================================
     */

    // ARIMA Model for Time Series Forecasting
    static class ARIMAModel {
        private final int p; // AR order
        private final int d; // Differencing order
        private final int q; // MA order

        private double[] arCoefficients;
        private double[] maCoefficients;
        private double constant;
        private double[] residuals;

        public ARIMAModel(int p, int d, int q) {
            this.p = p;
            this.d = d;
            this.q = q;
        }

        public void fit(double[] timeSeries) {
            double[] differenced = difference(timeSeries, d);

            // Fit ARMA model to differenced series
            fitARMA(differenced);

            // Store residuals for MA part
            residuals = new double[differenced.length];
            for (int i = Math.max(p, q); i < differenced.length; i++) {
                double predicted = constant;
                for (int j = 1; j <= p; j++) {
                    predicted += arCoefficients[j-1] * differenced[i - j];
                }
                for (int j = 1; j <= q; j++) {
                    predicted += maCoefficients[j-1] * residuals[i - j];
                }
                residuals[i] = differenced[i] - predicted;
            }
        }

        private double[] difference(double[] series, int order) {
            double[] result = Arrays.copyOf(series, series.length);
            for (int d = 0; d < order; d++) {
                for (int i = result.length - 1; i > 0; i--) {
                    result[i] = result[i] - result[i-1];
                }
            }
            return result;
        }

        private void fitARMA(double[] series) {
            // Simplified ARMA fitting using Yule-Walker equations
            arCoefficients = new double[p];
            maCoefficients = new double[q];

            // Estimate AR coefficients using autocorrelation
            double[] autocorr = computeAutocorrelation(series, Math.max(p, q) + 1);

            // Yule-Walker for AR coefficients
            if (p > 0) {
                double[][] rMatrix = new double[p][p];
                double[] rVector = new double[p];

                for (int i = 0; i < p; i++) {
                    rVector[i] = autocorr[i + 1];
                    for (int j = 0; j < p; j++) {
                        rMatrix[i][j] = autocorr[Math.abs(i - j)];
                    }
                }

                arCoefficients = solveLinearSystem(rMatrix, rVector);
            }

            // Estimate constant term
            constant = Arrays.stream(series).average().orElse(0.0);

            // Initialize MA coefficients (simplified)
            Arrays.fill(maCoefficients, 0.1);
        }

        private double[] computeAutocorrelation(double[] series, int maxLag) {
            double mean = Arrays.stream(series).average().orElse(0.0);
            double variance = 0.0;

            for (double value : series) {
                variance += (value - mean) * (value - mean);
            }
            variance /= series.length;

            double[] autocorr = new double[maxLag];
            for (int lag = 0; lag < maxLag; lag++) {
                double covariance = 0.0;
                for (int i = lag; i < series.length; i++) {
                    covariance += (series[i] - mean) * (series[i - lag] - mean);
                }
                covariance /= series.length;
                autocorr[lag] = covariance / variance;
            }

            return autocorr;
        }

        private double[] solveLinearSystem(double[][] A, double[] b) {
            // Simple Gaussian elimination (for small matrices)
            int n = b.length;
            double[] x = Arrays.copyOf(b, n);

            // Forward elimination
            for (int i = 0; i < n; i++) {
                // Find pivot
                int max = i;
                for (int j = i + 1; j < n; j++) {
                    if (Math.abs(A[j][i]) > Math.abs(A[max][i])) {
                        max = j;
                    }
                }

                // Swap rows
                double[] temp = A[i];
                A[i] = A[max];
                A[max] = temp;
                double t = x[i];
                x[i] = x[max];
                x[max] = t;

                // Eliminate
                for (int j = i + 1; j < n; j++) {
                    double factor = A[j][i] / A[i][i];
                    x[j] -= factor * x[i];
                    for (int k = i; k < n; k++) {
                        A[j][k] -= factor * A[i][k];
                    }
                }
            }

            // Back substitution
            for (int i = n - 1; i >= 0; i--) {
                x[i] /= A[i][i];
                for (int j = 0; j < i; j++) {
                    x[j] -= A[j][i] * x[i];
                }
            }

            return x;
        }

        public double[] forecast(double[] history, int steps) {
            double[] forecast = new double[steps];
            double[] extendedSeries = Arrays.copyOf(history, history.length + steps);

            // Apply differencing
            double[] differenced = difference(history, d);
            List<Double> diffList = new ArrayList<>();
            for (double val : differenced) {
                diffList.add(val);
            }

            // Generate forecasts
            for (int i = 0; i < steps; i++) {
                double predictedDiff = constant;

                // AR part
                for (int j = 1; j <= p; j++) {
                    int idx = diffList.size() - j;
                    if (idx >= 0) {
                        predictedDiff += arCoefficients[j-1] * diffList.get(idx);
                    }
                }

                // MA part
                for (int j = 1; j <= q; j++) {
                    int idx = diffList.size() - j;
                    if (idx >= 0 && idx < residuals.length) {
                        predictedDiff += maCoefficients[j-1] * residuals[idx];
                    }
                }

                diffList.add(predictedDiff);
                forecast[i] = predictedDiff;
            }

            // Inverse differencing
            return inverseDifference(forecast, history);
        }

        private double[] inverseDifference(double[] differenced, double[] original) {
            double[] result = new double[differenced.length];
            double lastValue = original[original.length - 1];

            for (int i = 0; i < differenced.length; i++) {
                result[i] = lastValue + differenced[i];
                lastValue = result[i];
            }

            return result;
        }
    }

    // Exponential Smoothing for Time Series
    static class ExponentialSmoothing {
        private final double alpha; // Smoothing parameter
        private double[] smoothedValues;

        public ExponentialSmoothing(double alpha) {
            this.alpha = alpha;
        }

        public void fit(double[] timeSeries) {
            smoothedValues = new double[timeSeries.length];
            smoothedValues[0] = timeSeries[0];

            for (int i = 1; i < timeSeries.length; i++) {
                smoothedValues[i] = alpha * timeSeries[i] + (1 - alpha) * smoothedValues[i - 1];
            }
        }

        public double[] forecast(int steps) {
            double[] forecast = new double[steps];
            double lastValue = smoothedValues[smoothedValues.length - 1];

            for (int i = 0; i < steps; i++) {
                forecast[i] = lastValue;
            }

            return forecast;
        }

        public double[] getSmoothedValues() {
            return smoothedValues;
        }
    }

    /**
     * ========================================================================
     * PATTERN 4: ANOMALY DETECTION
     * ========================================================================
     */

    // Isolation Forest for Anomaly Detection
    static class IsolationForest {
        private final int nTrees;
        private final int maxDepth;
        private final int sampleSize;
        private final List<IsolationTree> trees;

        public IsolationForest(int nTrees, int maxDepth, int sampleSize) {
            this.nTrees = nTrees;
            this.maxDepth = maxDepth;
            this.sampleSize = sampleSize;
            this.trees = new ArrayList<>();
        }

        public void fit(double[][] X) {
            Random random = new Random(42);

            for (int i = 0; i < nTrees; i++) {
                // Random sampling
                double[][] sample = new double[sampleSize][X[0].length];
                for (int j = 0; j < sampleSize; j++) {
                    int randomIndex = random.nextInt(X.length);
                    sample[j] = Arrays.copyOf(X[randomIndex], X[randomIndex].length);
                }

                // Build isolation tree
                IsolationTree tree = new IsolationTree(maxDepth);
                tree.fit(sample);
                trees.add(tree);

                System.out.printf("[IsolationForest] Built tree %d/%d%n", i + 1, nTrees);
            }
        }

        public double[] score(double[][] X) {
            double[] scores = new double[X.length];

            for (int i = 0; i < X.length; i++) {
                double avgPathLength = 0.0;
                for (IsolationTree tree : trees) {
                    avgPathLength += tree.pathLength(X[i]);
                }
                avgPathLength /= nTrees;

                // Convert to anomaly score (higher = more anomalous)
                scores[i] = Math.pow(2, -avgPathLength / averagePathLength(sampleSize));
            }

            return scores;
        }

        private double averagePathLength(int n) {
            if (n <= 1) return 0.0;
            return 2 * (Math.log(n - 1) + 0.5772156649) - 2 * (n - 1) / n;
        }

        static class IsolationTree {
            private Node root;
            private final int maxDepth;

            public IsolationTree(int maxDepth) {
                this.maxDepth = maxDepth;
            }

            public void fit(double[][] X) {
                root = buildTree(X, 0);
            }

            private Node buildTree(double[][] X, int depth) {
                if (depth >= maxDepth || X.length <= 1) {
                    return new LeafNode(X.length);
                }

                // Random split
                Random random = new Random();
                int featureIndex = random.nextInt(X[0].length);

                double min = Double.MAX_VALUE;
                double max = Double.MIN_VALUE;
                for (double[] row : X) {
                    min = Math.min(min, row[featureIndex]);
                    max = Math.max(max, row[featureIndex]);
                }

                double splitValue = min + random.nextDouble() * (max - min);

                // Split data
                List<double[]> leftData = new ArrayList<>();
                List<double[]> rightData = new ArrayList<>();

                for (double[] row : X) {
                    if (row[featureIndex] <= splitValue) {
                        leftData.add(row);
                    } else {
                        rightData.add(row);
                    }
                }

                // Handle edge cases
                if (leftData.isEmpty() || rightData.isEmpty()) {
                    return new LeafNode(X.length);
                }

                Node left = buildTree(leftData.toArray(new double[0][]), depth + 1);
                Node right = buildTree(rightData.toArray(new double[0][]), depth + 1);

                return new InternalNode(featureIndex, splitValue, left, right);
            }

            public double pathLength(double[] x) {
                return pathLength(root, x, 0);
            }

            private double pathLength(Node node, double[] x, int depth) {
                if (node instanceof LeafNode) {
                    return depth + averagePathLength(((LeafNode) node).size);
                }

                InternalNode internal = (InternalNode) node;
                if (x[internal.featureIndex] <= internal.splitValue) {
                    return pathLength(internal.left, x, depth + 1);
                } else {
                    return pathLength(internal.right, x, depth + 1);
                }
            }

            private double averagePathLength(int n) {
                if (n <= 1) return 0.0;
                return 2 * (Math.log(n - 1) + 0.5772156649) - 2 * (n - 1) / n;
            }

            interface Node {}
            static class InternalNode implements Node {
                int featureIndex;
                double splitValue;
                Node left, right;

                InternalNode(int featureIndex, double splitValue, Node left, Node right) {
                    this.featureIndex = featureIndex;
                    this.splitValue = splitValue;
                    this.left = left;
                    this.right = right;
                }
            }
            static class LeafNode implements Node {
                int size;

                LeafNode(int size) {
                    this.size = size;
                }
            }
        }
    }

    // Autoencoder for Anomaly Detection
    static class Autoencoder {
        private final int inputSize;
        private final int hiddenSize;
        private final double learningRate;
        private final int epochs;

        private double[][] encoderWeights;
        private double[][] decoderWeights;
        private double[] encoderBias;
        private double[] decoderBias;

        public Autoencoder(int inputSize, int hiddenSize, double learningRate, int epochs) {
            this.inputSize = inputSize;
            this.hiddenSize = hiddenSize;
            this.learningRate = learningRate;
            this.epochs = epochs;

            initializeWeights();
        }

        private void initializeWeights() {
            Random random = new Random(42);

            encoderWeights = new double[inputSize][hiddenSize];
            decoderWeights = new double[hiddenSize][inputSize];
            encoderBias = new double[hiddenSize];
            decoderBias = new double[inputSize];

            double limit = Math.sqrt(6.0 / (inputSize + hiddenSize));

            for (int i = 0; i < inputSize; i++) {
                for (int j = 0; j < hiddenSize; j++) {
                    encoderWeights[i][j] = random.nextDouble() * 2 * limit - limit;
                }
            }

            for (int i = 0; i < hiddenSize; i++) {
                for (int j = 0; j < inputSize; j++) {
                    decoderWeights[i][j] = random.nextDouble() * 2 * limit - limit;
                }
            }
        }

        public void fit(double[][] X) {
            for (int epoch = 0; epoch < epochs; epoch++) {
                double totalLoss = 0.0;

                for (double[] input : X) {
                    // Forward pass
                    double[] encoded = encode(input);
                    double[] decoded = decode(encoded);

                    // Compute reconstruction error
                    double[] errors = new double[inputSize];
                    for (int i = 0; i < inputSize; i++) {
                        errors[i] = decoded[i] - input[i];
                        totalLoss += errors[i] * errors[i];
                    }

                    // Backward pass
                    backward(input, encoded, decoded, errors);
                }

                if (epoch % 100 == 0) {
                    System.out.printf("[Autoencoder] Epoch %d, Loss: %.6f%n",
                                    epoch, totalLoss / X.length);
                }
            }
        }

        private double[] encode(double[] input) {
            double[] hidden = new double[hiddenSize];
            for (int j = 0; j < hiddenSize; j++) {
                double sum = encoderBias[j];
                for (int i = 0; i < inputSize; i++) {
                    sum += input[i] * encoderWeights[i][j];
                }
                hidden[j] = relu(sum);
            }
            return hidden;
        }

        private double[] decode(double[] encoded) {
            double[] output = new double[inputSize];
            for (int j = 0; j < inputSize; j++) {
                double sum = decoderBias[j];
                for (int i = 0; i < hiddenSize; i++) {
                    sum += encoded[i] * decoderWeights[i][j];
                }
                output[j] = sigmoid(sum);
            }
            return output;
        }

        private void backward(double[] input, double[] encoded, double[] decoded, double[] errors) {
            // Decoder gradients
            double[] outputDeltas = new double[inputSize];
            for (int j = 0; j < inputSize; j++) {
                outputDeltas[j] = errors[j] * sigmoidDerivative(decoded[j]);
            }

            // Encoder gradients
            double[] hiddenDeltas = new double[hiddenSize];
            for (int i = 0; i < hiddenSize; i++) {
                double error = 0.0;
                for (int j = 0; j < inputSize; j++) {
                    error += outputDeltas[j] * decoderWeights[i][j];
                }
                hiddenDeltas[i] = error * reluDerivative(encoded[i]);
            }

            // Update weights and biases
            // Decoder weights
            for (int i = 0; i < hiddenSize; i++) {
                for (int j = 0; j < inputSize; j++) {
                    decoderWeights[i][j] -= learningRate * outputDeltas[j] * encoded[i];
                }
            }
            for (int j = 0; j < inputSize; j++) {
                decoderBias[j] -= learningRate * outputDeltas[j];
            }

            // Encoder weights
            for (int i = 0; i < inputSize; i++) {
                for (int j = 0; j < hiddenSize; j++) {
                    encoderWeights[i][j] -= learningRate * hiddenDeltas[j] * input[i];
                }
            }
            for (int j = 0; j < hiddenSize; j++) {
                encoderBias[j] -= learningRate * hiddenDeltas[j];
            }
        }

        public double[] reconstruct(double[] input) {
            double[] encoded = encode(input);
            return decode(encoded);
        }

        public double[] getReconstructionErrors(double[][] X) {
            double[] errors = new double[X.length];
            for (int i = 0; i < X.length; i++) {
                double[] reconstructed = reconstruct(X[i]);
                double error = 0.0;
                for (int j = 0; j < inputSize; j++) {
                    double diff = X[i][j] - reconstructed[j];
                    error += diff * diff;
                }
                errors[i] = Math.sqrt(error);
            }
            return errors;
        }

        private double relu(double x) {
            return Math.max(0, x);
        }

        private double reluDerivative(double x) {
            return x > 0 ? 1.0 : 0.0;
        }

        private double sigmoid(double x) {
            return 1.0 / (1.0 + Math.exp(-x));
        }

        private double sigmoidDerivative(double x) {
            return x * (1.0 - x);
        }
    }

    /**
     * ========================================================================
     * DEMONSTRATION
     * ========================================================================
     */

    public static void main(String[] args) {
        System.out.println("=".repeat(70));
        System.out.println("DAY 35: ADVANCED MACHINE LEARNING PATTERNS");
        System.out.println("Neural Networks, NLP, Time Series, Anomaly Detection");
        System.out.println("=".repeat(70));

        // Demo 1: Neural Network
        System.out.println("\n=== Demo 1: Neural Network ===");
        double[][] X_nn = {
            {0.0, 0.0}, {0.0, 1.0}, {1.0, 0.0}, {1.0, 1.0}
        };
        double[][] y_nn = {
            {0.0}, {1.0}, {1.0}, {0.0} // XOR problem
        };

        NeuralNetwork nn = new NeuralNetwork(2, 4, 1, 0.1, 10000);
        nn.fit(X_nn, y_nn);

        double[][] predictions = nn.predict(X_nn);
        System.out.println("Neural Network predictions for XOR:");
        for (int i = 0; i < X_nn.length; i++) {
            System.out.printf("Input: [%.0f, %.0f] -> Output: %.3f%n",
                            X_nn[i][0], X_nn[i][1], predictions[i][0]);
        }

        // Demo 2: Text Processing
        System.out.println("\n=== Demo 2: Text Processing ===");
        TextPreprocessor preprocessor = new TextPreprocessor();
        String text = "The quick brown fox jumps over the lazy dog!";
        String processed = preprocessor.preprocess(text);
        System.out.println("Original: " + text);
        System.out.println("Processed: " + processed);

        // Demo 3: TF-IDF
        System.out.println("\n=== Demo 3: TF-IDF Vectorization ===");
        List<String> documents = Arrays.asList(
            "the cat sat on the mat",
            "the dog ran in the park",
            "cats and dogs are pets"
        );

        TFIDFVectorizer vectorizer = new TFIDFVectorizer();
        vectorizer.fit(documents);
        double[][] tfidfMatrix = vectorizer.transform(documents);

        System.out.println("TF-IDF Matrix:");
        for (int i = 0; i < tfidfMatrix.length; i++) {
            System.out.printf("Doc %d: ", i + 1);
            for (int j = 0; j < Math.min(5, tfidfMatrix[i].length); j++) {
                System.out.printf("%.3f ", tfidfMatrix[i][j]);
            }
            System.out.println("...");
        }

        // Demo 4: Time Series Forecasting
        System.out.println("\n=== Demo 4: Time Series Forecasting ===");
        double[] timeSeries = {10, 12, 13, 12, 14, 16, 16, 15, 17, 19};
        ARIMAModel arima = new ARIMAModel(1, 1, 1);
        arima.fit(timeSeries);

        double[] forecast = arima.forecast(timeSeries, 3);
        System.out.println("Original series: " + Arrays.toString(timeSeries));
        System.out.println("Forecast: " + Arrays.toString(forecast));

        // Demo 5: Anomaly Detection
        System.out.println("\n=== Demo 5: Anomaly Detection ===");
        double[][] normalData = {
            {1.0, 2.0}, {1.1, 2.1}, {0.9, 1.9}, {1.2, 2.2}, {0.8, 1.8}
        };
        double[][] testData = {
            {1.0, 2.0}, {10.0, 20.0}, {1.1, 2.1}, {0.9, 1.9} // Second point is anomaly
        };

        IsolationForest isolationForest = new IsolationForest(10, 5, 5);
        isolationForest.fit(normalData);
        double[] scores = isolationForest.score(testData);

        System.out.println("Anomaly scores:");
        for (int i = 0; i < scores.length; i++) {
            System.out.printf("Point %d: %.3f%n", i + 1, scores[i]);
        }

        System.out.println("\n" + "=".repeat(70));
        System.out.println("ALL DEMONSTRATIONS COMPLETED SUCCESSFULLY!");
        System.out.println("=".repeat(70));
    }
}
