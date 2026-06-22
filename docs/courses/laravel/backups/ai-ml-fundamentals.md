# Chapter P6: AI/ML Fundamentals & Laravel Integration

---

## Learning Objectives

- Distinguish between supervised, unsupervised, and reinforcement learning paradigms and their appropriate use cases
- Explain the bias-variance tradeoff, overfitting vs. underfitting, and the role of training/testing/validation splits
- Implement regression, classification, clustering, and association learning using PHP-ML with real datasets
- Build and evaluate neural network classifiers and anomaly detectors using Rubix ML pipelines
- Construct text processing pipelines including tokenization, TF-IDF vectorization, and sentiment analysis in PHP
- Design Artisan command pipelines for training, persisting, versioning, and scheduling model retraining
- Create hybrid endpoints that combine structured ML predictions with LLM reasoning via Laravel AI SDK tools
- Engineer feature pipelines with Laravel queues for cleaning, transforming, and selecting features at scale
- Apply MLOps practices including experiment tracking, model registry, drift detection, and deployment strategies

---

## Theory

![AI and ML Fundamentals](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/ai-ml-fundamentals.png)


### 1. Machine Learning Fundamentals

Machine learning is a branch of artificial intelligence that enables systems to learn patterns from data without being explicitly programmed for every decision rule. Rather than writing if-else logic to detect spam, you feed the system thousands of labeled emails and let the algorithm infer the boundary between spam and legitimate mail.

#### Supervised Learning

Supervised learning uses a labeled dataset where each example has an input vector \( X \) and a known output \( y \). The algorithm learns a mapping function \( f: X \to y \).

**Regression** predicts a continuous value. A model that estimates house price from square footage is a regression problem.

**Classification** predicts a discrete class label. An email is either spam or not spam; a handwritten digit is one of ten categories.

```php
// Conceptual: supervised learning pseudocode
$dataset = [
    ['sqft' => 1400, 'bedrooms' => 3, 'price' => 320000],
    ['sqft' => 1800, 'bedrooms' => 4, 'price' => 410000],
    ['sqft' => 950,  'bedrooms' => 2, 'price' => 210000],
];

// The algorithm learns: price â‰ˆ f(sqft, bedrooms)
// After training: predict(1200, 3) â†’ 285000
```

#### Unsupervised Learning

Unsupervised learning has no labels. The algorithm finds hidden structure in the data â€” clusters of similar customers, groups of related news articles, or anomalous transactions that deviate from the norm.

```php
// Conceptual: clustering discovers groups without labels
$customers = [
    ['age' => 24, 'annual_income' => 45000, 'spending_score' => 72],
    ['age' => 55, 'annual_income' => 92000, 'spending_score' => 18],
    ['age' => 31, 'annual_income' => 61000, 'spending_score' => 88],
];

// Algorithm assigns each to cluster 0, 1, or 2
// Cluster 0: "young high-spenders", Cluster 1: "older low-spenders"
```

#### Reinforcement Learning

An agent learns by interacting with an environment, receiving rewards or penalties for actions. Used in game-playing AI, robotics, and dynamic pricing. PHP implementations exist but are rare; this paradigm typically runs in Python with TensorFlow or PyTorch and is consumed via API.

#### Training, Validation, and Test Split

Every ML project begins by partitioning available data into three disjoint sets:

| Split | Purpose | Typical Size |
|-------|---------|-------------|
| Training | The model sees this data and adjusts its internal parameters | 60â€“80% |
| Validation | Used to tune hyperparameters and select between model variants | 10â€“20% |
| Test | Held back until the final evaluation. Measures real generalization | 10â€“20% |

```php
use Phpml\Dataset\Demo\IrisDataset;
use Phpml\CrossValidation\RandomSplit;

$dataset = new IrisDataset();
$split = new RandomSplit($dataset, 0.7, true);

$trainingSamples = $split->getTrainSamples();   // 105 samples
$trainingLabels   = $split->getTrainLabels();
$testSamples      = $split->getTestSamples();    // 45 samples
$testLabels        = $split->getTestLabels();
```

A model that scores 99% on training but 60% on test is **overfitting** â€” it memorized the training data instead of learning general patterns. A model that scores 60% on both is **underfitting** â€” it is too simple to capture the underlying structure.

#### The Bias-Variance Tradeoff

**Bias** is the error introduced by approximating a complex reality with a simplistic model. A linear regression on a sinusoidal dataset has high bias â€” it simply cannot curve.

**Variance** is the error introduced by the model's sensitivity to small fluctuations in the training set. A deep decision tree that carves perfect boundaries around every training point has high variance â€” re-train it on a slightly different set and the boundaries shift wildly.

```
                 Underfitting    |    Balanced    |    Overfitting
                 (High Bias)     |                 |   (High Variance)
                                |                 |
    Training Error    75%        |      10%        |      0.1%
    Test Error        78%        |      12%        |      42%
```

The goal is to find the sweet spot where both bias and variance are low. Increasing model complexity reduces bias but increases variance. Regularization, cross-validation, and more training data all help manage this tradeoff.

#### Evaluation Metrics

**Classification Metrics**

| Metric | Formula | Use Case |
|--------|---------|----------|
| Accuracy | (TP + TN) / (TP + TN + FP + FN) | Balanced classes |
| Precision | TP / (TP + FP) | Minimize false positives (spam detection) |
| Recall | TP / (TP + FN) | Minimize false negatives (cancer screening) |
| F1 Score | 2 Ã— (Precision Ã— Recall) / (Precision + Recall) | Imbalanced classes |

```php
use Phpml\Metric\ClassificationReport;
use Phpml\Metric\ConfusionMatrix;

$actualLabels = [1, 0, 1, 1, 0, 0, 1, 0];
$predictedLabels = [1, 0, 0, 1, 0, 0, 1, 1];

$report = new ClassificationReport($actualLabels, $predictedLabels);
$precision = $report->getPrecision();  // [0 => 0.67, 1 => 1.0]
$recall    = $report->getRecall();     // [0 => 0.67, 1 => 1.0]
$f1        = $report->getF1score();    // [0 => 0.67, 1 => 1.0]
$accuracy  = $report->getAccuracy();   // 0.75

$matrix = ConfusionMatrix::compute($actualLabels, $predictedLabels, [0, 1]);
// [[2, 1],  // class 0: 2 true negative, 1 false positive
//  [0, 4]]  // class 1: 0 false negative, 4 true positive
```

**Regression Metrics**

| Metric | Formula | Interpretation |
|--------|---------|----------------|
| MAE (Mean Absolute Error) | (1/n) Î£ |yáµ¢ âˆ’ Å·áµ¢| | Average magnitude of error in original units |
| MSE (Mean Squared Error) | (1/n) Î£ (yáµ¢ âˆ’ Å·áµ¢)Â² | Penalizes large errors more heavily |
| RMSE (Root Mean Squared Error) | âˆšMSE | Interpretable in original units, penalizes outliers |

```php
use Phpml\Metric\Regression;

$actual = [320000, 410000, 210000, 550000, 375000];
$predicted = [310000, 395000, 225000, 530000, 380000];

$mae  = Regression::meanAbsoluteError($actual, $predicted);
$mse  = Regression::meanSquaredError($actual, $predicted);
$rmse = sqrt($mse);
$r2   = Regression::r2Score($actual, $predicted);

echo "MAE:  $" . number_format($mae, 2);   // MAE:  $12,000.00
echo "RMSE: $" . number_format($rmse, 2);  // RMSE: $14,577.38
echo "RÂ²:   " . number_format($r2, 4);     // RÂ²:   0.9681
```

The RÂ² score ranges from negative infinity to 1. A value of 1 means perfect prediction. A value of 0 means the model performs no better than predicting the mean. Negative values indicate the model is worse than the mean baseline.

---

### 2. Classical ML with PHP-ML

PHP-ML is the most widely used machine learning library for PHP. It provides implementations of the most common algorithms with a clean, unified API.

#### Installation

```bash
composer require php-ai/php-ml
```

#### 2.1 Regression â€” Linear Regression

Linear regression models the relationship between input features and a continuous target as a linear combination:

```
Å· = wâ‚€ + wâ‚xâ‚ + wâ‚‚xâ‚‚ + ... + wâ‚™xâ‚™
```

The algorithm finds the weights **w** that minimize the sum of squared residuals â€” the **ordinary least squares** (OLS) solution.

```php
<?php

use Phpml\Regression\LeastSquares;
use Phpml\ModelManager;

// Training data: [square_feet, bedrooms, age] â†’ price
$samples = [
    [1400, 3, 5],
    [1800, 4, 2],
    [950,  2, 15],
    [2200, 5, 1],
    [1200, 3, 8],
    [1600, 3, 3],
];
$targets = [320000, 410000, 210000, 550000, 285000, 375000];

$regression = new LeastSquares();
$regression->train($samples, $targets);

$predictedPrice = $regression->predict([1500, 3, 4]);
echo "Predicted price: \$" . number_format($predictedPrice);

// Persist the trained model
$modelManager = new ModelManager();
$modelManager->saveToFile($regression, storage_path('models/housing.model'));
```

The `LeastSquares` class solves the normal equation analytically using matrix operations. It works well when the relationship is approximately linear and features are not highly correlated (multicollinearity inflates variance).

#### 2.2 Classification â€” Naive Bayes

Naive Bayes applies Bayes' theorem with the "naive" assumption that features are conditionally independent given the class. Despite this unrealistic assumption, it performs well on text classification, spam filtering, and sentiment analysis.

```php
<?php

use Phpml\Classification\NaiveBayes;
use Phpml\FeatureExtraction\TfIdfTransformer;
use Phpml\Tokenization\WhitespaceTokenizer;
use Phpml\FeatureExtraction\TokenCountVectorizer;

$samples = [
    'low price amazing quality',
    'cheap product great value',
    'terrible waste of money',
    'worst purchase ever regret',
    'fantastic love this product',
    'horrible broke immediately',
];

$labels = ['positive', 'positive', 'negative', 'negative', 'positive', 'negative'];

// Convert text to numerical feature vectors
$tokenizer = new WhitespaceTokenizer();
$vectorizer = new TokenCountVectorizer($tokenizer);
$vectorizer->fit($samples);
$vectorizer->transform($samples);

$transformer = new TfIdfTransformer();
$transformer->fit($samples);
$transformer->transform($samples);

$classifier = new NaiveBayes();
$classifier->train($samples, $labels);

$testSample = ['incredible quality fantastic product'];
$vectorizer->transform($testSample);
$transformer->transform($testSample);

$prediction = $classifier->predict($testSample[0]);
$probs      = $classifier->predictProbability($testSample[0]);

echo "Prediction: {$prediction}";              // positive
echo "Confidence: " . round(max($probs), 4);    // 0.9213
```

#### 2.3 Classification â€” Support Vector Machines (SVM)

SVM finds the hyperplane that maximizes the margin between classes. It works well in high-dimensional spaces and is effective for text classification and image recognition.

```php
<?php

use Phpml\Classification\SVC;
use Phpml\SupportVectorMachine\Kernel;

// Iris dataset: sepal_length, sepal_width, petal_length, petal_width â†’ species
$samples = [
    [5.1, 3.5, 1.4, 0.2],
    [4.9, 3.0, 1.4, 0.2],
    [7.0, 3.2, 4.7, 1.4],
    [6.4, 3.2, 4.5, 1.5],
    [6.3, 3.3, 6.0, 2.5],
    [5.8, 2.7, 5.1, 1.9],
];
$labels = ['setosa', 'setosa', 'versicolor', 'versicolor', 'virginica', 'virginica'];

$classifier = new SVC(
    kernel: Kernel::RBF,    // Radial Basis Function â€” handles non-linear boundaries
    degree: 3,              // Polynomial degree (ignored for RBF)
    cost: 1000.0,           // Penalty parameter â€” higher = less tolerance for misclassification
    shrinking: true,
    tolerance: 0.001,
    cacheSize: 200
);

$classifier->train($samples, $labels);

$test = [[5.9, 3.0, 4.2, 1.5]];
$prediction = $classifier->predict($test[0]);
echo "Predicted species: {$prediction}";  // versicolor
```

The `cost` parameter controls the tradeoff between a smooth decision boundary and classifying every training point correctly. High cost values risk overfitting.

#### 2.4 Classification â€” K-Nearest Neighbors

KNN is a lazy learner that stores all training data and classifies new points by majority vote among their k nearest neighbors.

```php
<?php

use Phpml\Classification\KNearestNeighbors;

$samples = [
    [1, 1], [1, 2], [2, 1], [2, 2],  // Class A
    [5, 5], [5, 6], [6, 5], [6, 6],  // Class B
];
$labels = ['A', 'A', 'A', 'A', 'B', 'B', 'B', 'B'];

$classifier = new KNearestNeighbors($k = 3);
$classifier->train($samples, $labels);

echo $classifier->predict([1.5, 1.5]);   // A (surrounded by A's)
echo $classifier->predict([5.5, 5.5]);   // B
echo $classifier->predict([3.0, 3.0]);   // A or B? Depends on nearest 3
```

KNN requires no training time (it simply stores the data) but prediction time scales linearly with the dataset size. Feature scaling is critical â€” if one feature ranges from 1â€“10 and another from 1â€“1000, the distance calculation is dominated by the larger feature.

#### 2.5 Clustering â€” K-Means

K-Means partitions data into K clusters, each represented by the centroid of its members.

```php
<?php

use Phpml\Clustering\KMeans;

// Customer segments: [age, annual_income, spending_score]
$customers = [
    [25, 39000, 78], [42, 82000, 22], [31, 61000, 91],
    [55, 105000, 15], [28, 48000, 85], [36, 72000, 65],
    [48, 95000, 30], [22, 28000, 95], [60, 115000, 10],
    [33, 68000, 72], [45, 88000, 40], [27, 42000, 88],
];

$kmeans = new KMeans(3);  // 3 clusters â€” high-spenders, mid-range, low-spenders
$clusters = $kmeans->cluster($customers);

foreach ($clusters as $index => $members) {
    echo "Cluster {$index}: " . count($members) . " customers\n";
    foreach ($members as $member) {
        echo "  Age: {$member[0]}, Income: {$member[1]}, Score: {$member[2]}\n";
    }
}
```

K-Means requires the number of clusters to be specified upfront. The **elbow method** helps choose K: run K-Means with K = 1 through 10, plot the within-cluster sum of squares, and look for the "elbow" where adding more clusters yields diminishing returns.

#### 2.6 Clustering â€” DBSCAN

DBSCAN does not require specifying the number of clusters. It groups points that are closely packed together and marks points in low-density regions as outliers.

```php
<?php

use Phpml\Clustering\DBSCAN;

$points = [
    [1, 1], [1, 2], [2, 1], [2, 2],     // Dense cluster A
    [10, 10], [10, 11], [11, 10],         // Dense cluster B
    [50, 50],                              // Outlier
];

$dbscan = new DBSCAN($epsilon = 3, $minSamples = 3);
$clusters = $dbscan->cluster($points);

// Cluster 0: 4 points, Cluster 1: 3 points, [50,50] is noise (unclustered)
```

`$epsilon` is the maximum distance between two points to be considered neighbors. `$minSamples` is the minimum number of points to form a dense region. DBSCAN is excellent for geospatial data, anomaly detection, and any domain where clusters have arbitrary shapes.

#### 2.7 Association Learning â€” Apriori

The Apriori algorithm discovers association rules in transactional data. It identifies items that frequently appear together â€” "customers who bought X also bought Y."

```php
<?php

use Phpml\Association\Apriori;

$transactions = [
    ['milk', 'bread', 'eggs'],
    ['milk', 'bread', 'butter'],
    ['beer', 'bread', 'eggs'],
    ['milk', 'beer', 'bread', 'butter'],
    ['beer', 'eggs', 'chips'],
];

$apriori = new Apriori(
    support: 0.4,  // Itemset appears in at least 40% of transactions
    confidence: 0.7 // Rule holds in at least 70% of applicable cases
);

$apriori->train($transactions, []);

$rules = $apriori->getRules();
foreach ($rules as $rule) {
    $antecedent = implode(', ', $rule['antecedent']);
    $consequent = implode(', ', $rule['consequent']);
    $support = $rule['support'];
    $confidence = $rule['confidence'];
    echo "{$antecedent} â†’ {$consequent} (support: {$support}, confidence: {$confidence})\n";
}

// Example output:
// bread â†’ milk (support: 0.6, confidence: 0.75)
// milk, bread â†’ butter (support: 0.4, confidence: 0.67)
```

#### 2.8 Dataset Management

PHP-ML provides structured Dataset classes and cross-validation utilities.

```php
<?php

use Phpml\Dataset\CsvDataset;
use Phpml\Dataset\ArrayDataset;
use Phpml\CrossValidation\RandomSplit;
use Phpml\CrossValidation\StratifiedRandomSplit;
use Phpml\CrossValidation\Split;

// Load from CSV
$dataset = new CsvDataset(
    filename: storage_path('ml-data/housing.csv'),
    samplesColumn: 3,  // Number of feature columns before the label
    headingRow: true   // First row is headers â€” skip it
);

// Create from arrays
$samples = [[1, 2], [3, 4], [5, 6]];
$labels = ['a', 'b', 'c'];
$arrayDataset = new ArrayDataset($samples, $labels);

// Random split (70/30)
$split = new RandomSplit($dataset, 0.7);

// Stratified split â€” preserves class proportions in both sets
$stratified = new StratifiedRandomSplit($dataset, 0.7);

echo "Train samples: " . count($split->getTrainSamples());     // 70% of total
echo "Test samples:  " . count($split->getTestSamples());      // 30% of total
```

`StratifiedRandomSplit` ensures that if your dataset has 80% class A and 20% class B, both training and test sets maintain that ratio. This is essential for imbalanced datasets.

#### 2.9 Cross-Validation

Cross-validation evaluates model performance by training and testing on multiple folds, reducing the variance of the performance estimate.

```php
<?php

use Phpml\CrossValidation\RandomSplit;
use Phpml\Classification\NaiveBayes;
use Phpml\Metric\Accuracy;

$dataset = new CsvDataset('emails.csv', 5000, true);
$split = new RandomSplit($dataset, 0.7);

$classifier = new NaiveBayes();
$classifier->train($split->getTrainSamples(), $split->getTrainLabels());

$predicted = $classifier->predict($split->getTestSamples());
$accuracy = Accuracy::score($split->getTestLabels(), $predicted);

echo "Accuracy: " . number_format($accuracy * 100, 2) . "%";
```

For k-fold cross-validation (more robust than a single split):

```php
<?php

use Phpml\CrossValidation\KFold;

$dataset = new ArrayDataset($samples, $labels);
$kFold = new KFold($dataset, $folds = 5);

$scores = [];
foreach ($kFold as $index => [$train, $test]) {
    $classifier = new NaiveBayes();
    $classifier->train($train->getSamples(), $train->getLabels());

    $predicted = $classifier->predict($test->getSamples());
    $scores[] = Accuracy::score($test->getLabels(), $predicted);
}

$meanAccuracy = array_sum($scores) / count($scores);
$stdDev = sqrt(array_sum(array_map(fn($s) => ($s - $meanAccuracy) ** 2, $scores)) / count($scores));

echo "Mean accuracy: " . number_format($meanAccuracy * 100, 2) . "%\n";
echo "Std deviation: " . number_format($stdDev * 100, 2) . "%\n";
```

#### 2.10 Model Persistence

Save and reload trained models without retraining.

```php
<?php

use Phpml\ModelManager;
use Phpml\Classification\NaiveBayes;

$manager = new ModelManager();

// Save
$manager->saveToFile($classifier, storage_path('models/spam-detector.model'));

// Load
$restored = $manager->restoreFromFile(storage_path('models/spam-detector.model'));
$prediction = $restored->predict($newEmailVector);
```

#### 2.11 Confusion Matrix

```php
<?php

use Phpml\Metric\ConfusionMatrix;

$actual    = [1, 0, 1, 1, 0, 0, 1, 0, 1, 0];
$predicted = [1, 0, 0, 1, 0, 1, 1, 0, 0, 0];

$matrix = ConfusionMatrix::compute($actual, $predicted, [1, 0]);

// $matrix[actualClass][predictedClass]
$tp = $matrix[1][1]; // True positives
$tn = $matrix[0][0]; // True negatives
$fp = $matrix[0][1]; // False positives
$fn = $matrix[1][0]; // False negatives

echo "TP: $tp, TN: $tn, FP: $fp, FN: $fn";
```

---

### 3. Advanced ML with Rubix ML

Rubix ML is a more modern, feature-rich machine learning library for PHP. It introduces pipelines, transformers, neural networks, and an ecosystem of specialized learners.

#### Installation

```bash
composer require rubix/ml
```

Rubix ML requires the PHP extension `ext-tensor` for optimal performance on matrix operations, but it can fall back to pure PHP implementations.

#### 3.1 Datasets

```php
<?php

use Rubix\ML\Datasets\Labeled;
use Rubix\ML\Datasets\Unlabeled;
use Rubix\ML\Extractors\CSV;

// Labeled dataset: samples with known labels
$dataset = new Labeled(
    samples: [
        [5.1, 3.5, 1.4, 0.2],
        [4.9, 3.0, 1.4, 0.2],
        [7.0, 3.2, 4.7, 1.4],
    ],
    labels: ['setosa', 'setosa', 'versicolor']
);

// Load from CSV
$dataset = Labeled::fromIterator(new CSV('iris.csv', header: true));

// Unlabeled dataset: for predictions on new data
$unlabeled = new Unlabeled([
    [5.5, 2.8, 4.0, 1.2],
    [6.2, 3.1, 5.0, 2.1],
]);
```

#### 3.2 Preprocessing

Transformers prepare raw data for learning. Rubix ML chains them in **pipelines**.

```php
<?php

use Rubix\ML\Transformers\StandardScaler;
use Rubix\ML\Transformers\MinMaxScaler;
use Rubix\ML\Transformers\OneHotEncoder;
use Rubix\ML\Transformers\MissingDataImputer;
use Rubix\ML\Transformers\NumericStringConverter;
use Rubix\ML\Pipeline;

$dataset = new Labeled($samples, $labels);

// StandardScaler: z-score normalization (mean=0, std=1)
$scaler = new StandardScaler(true); // true = center (subtract mean)
$scaler->fit($dataset);
$scaler->transform($dataset);
// After transform: each feature has mean ~0 and standard deviation ~1

// MinMaxScaler: scale to a bounded range [0, 1]
$minMax = new MinMaxScaler(0.0, 1.0);
$minMax->fit($dataset);
$minMax->transform($dataset);

// OneHotEncoder: convert categorical strings to binary vectors
$encoder = new OneHotEncoder();
$datasetWithCategories = new Labeled(
    [['red', 'large'], ['blue', 'small'], ['red', 'medium']],
    ['A', 'B', 'A']
);
$encoder->fit($datasetWithCategories);
$encoder->transform($datasetWithCategories);
// After: ["red", "large"] â†’ [1.0, 0.0, 1.0, 0.0, 0.0]
//         ["blue", "small"] â†’ [0.0, 1.0, 0.0, 0.0, 1.0]

// MissingDataImputer: fill null values with strategic defaults
$imputer = new MissingDataImputer('?', new StandardScaler());
// Replaces '?' with the mean of the column
```

#### 3.3 Regression with Rubix ML

```php
<?php

use Rubix\ML\Learners\Regression\Ridge;
use Rubix\ML\Learners\Regression\RegressionTree;
use Rubix\ML\Learners\Regression\KDNeighborsRegressor;
use Rubix\ML\Transformers\StandardScaler;
use Rubix\ML\Pipeline;
use Rubix\ML\Datasets\Labeled;
use Rubix\ML\CrossValidation\Metrics\RMSE;
use Rubix\ML\CrossValidation\Metrics\MAE;

$samples = [
    [1400, 3, 5], [1800, 4, 2], [950, 2, 15],
    [2200, 5, 1], [1200, 3, 8], [1600, 3, 3],
];
$labels = [320000, 410000, 210000, 550000, 285000, 375000];

$dataset = new Labeled($samples, $labels);

// Ridge Regression â€” linear model with L2 regularization
$estimator = new Pipeline([
    new StandardScaler(),
], new Ridge(alpha: 1.0));

$estimator->train($dataset);

$predictions = $estimator->predict(new Unlabeled([
    [1500, 3, 4],
    [2000, 4, 6],
]));

$rmse = (new RMSE())->score($predictions, [300000, 400000]);
echo "RMSE: $rmse";
```

#### 3.4 Classification â€” LogisticRegression

```php
<?php

use Rubix\ML\Classifiers\LogisticRegression;
use Rubix\ML\NeuralNet\Optimizers\Adam;
use Rubix\ML\NeuralNet\CostFunctions\CrossEntropy;
use Rubix\ML\Transformers\StandardScaler;
use Rubix\ML\Pipeline;

$samples = [
    [5.1, 3.5, 1.4, 0.2], [4.9, 3.0, 1.4, 0.2],
    [7.0, 3.2, 4.7, 1.4], [6.4, 3.2, 4.5, 1.5],
    [6.3, 3.3, 6.0, 2.5], [5.8, 2.7, 5.1, 1.9],
];
$labels = [0, 0, 1, 1, 2, 2];  // Encode classes as integers

$estimator = new Pipeline([
    new StandardScaler(),
], new LogisticRegression(
    optimizer: new Adam(0.01),
    costFn: new CrossEntropy(),
    epochs: 100,
    batchSize: 3
));

$estimator->train(new Labeled($samples, $labels));

$predictions = $estimator->predict(new Unlabeled([
    [5.9, 3.0, 4.2, 1.5],
]));

echo "Predicted class: {$predictions[0]}"; // 1 (versicolor)

// Probability estimates
$probabilities = $estimator->proba(new Unlabeled([
    [5.9, 3.0, 4.2, 1.5],
]));
print_r($probabilities[0]);
// [0 => 0.02, 1 => 0.91, 2 => 0.07] â€” 91% confidence in class 1
```

#### 3.5 Neural Networks â€” Multilayer Perceptron

A Multilayer Perceptron (MLP) is a feedforward neural network with one or more hidden layers. Rubix ML's MLP classifier supports configurable layers, activation functions, optimizers, and regularization.

```php
<?php

use Rubix\ML\Classifiers\MultilayerPerceptron;
use Rubix\ML\NeuralNet\Layers\Dense;
use Rubix\ML\NeuralNet\Layers\Dropout;
use Rubix\ML\NeuralNet\Layers\Activation;
use Rubix\ML\NeuralNet\ActivationFunctions\ReLU;
use Rubix\ML\NeuralNet\ActivationFunctions\Softmax;
use Rubix\ML\NeuralNet\Optimizers\Adam;
use Rubix\ML\Transformers\StandardScaler;
use Rubix\ML\Pipeline;
use Rubix\ML\Datasets\Labeled;
use Rubix\ML\Datasets\Unlabeled;

$dataset = new Labeled($samples, $labels);

$estimator = new Pipeline([
    new StandardScaler(),
], new MultilayerPerceptron([
    new Dense(100),       // Hidden layer with 100 neurons
    new Activation(new ReLU()),
    new Dropout(0.2),     // Drop 20% of neurons during training (prevents overfitting)
    new Dense(50),
    new Activation(new ReLU()),
    new Dense(3),          // Output layer: 3 classes
    new Activation(new Softmax()),
], optimizer: new Adam(0.001), epochs: 200, batchSize: 16));

$estimator->train($dataset);

$predictions = $estimator->predict(new Unlabeled($testSamples));
$probabilities = $estimator->proba(new Unlabeled($testSamples));
```

The architecture above has 4 â†’ 100 â†’ 50 â†’ 3 neurons. Dropout randomly disables 20% of neurons each training iteration, forcing the network to learn redundant representations and reducing overfitting.

#### 3.6 Random Forest

Random Forest combines many decision trees trained on random subsets of data and features. It is robust, handles non-linear relationships, and provides feature importance scores.

```php
<?php

use Rubix\ML\Classifiers\RandomForest;
use Rubix\ML\Classifiers\ClassificationTree;
use Rubix\ML\Transformers\StandardScaler;
use Rubix\ML\Pipeline;

$estimator = new Pipeline([
    new StandardScaler(),
], new RandomForest(
    base: new ClassificationTree(maxHeight: 20, minSamples: 3),
    estimators: 100,       // 100 trees in the forest
    ratio: 0.1,            // Each tree sees 10% of the training data (bootstrap sample)
    substitute: 0.2        // Feature subsampling ratio
));

$estimator->train(new Labeled($samples, $labels));

$importance = $estimator->featureImportances();
// ['feature_0' => 0.35, 'feature_1' => 0.12, 'feature_2' => 0.40, 'feature_3' => 0.13]
// Higher = more important for prediction
```

#### 3.7 Cross-Validation and Hyperparameter Tuning

```php
<?php

use Rubix\ML\CrossValidation\KFold;
use Rubix\ML\CrossValidation\Metrics\Accuracy;
use Rubix\ML\Classifiers\KNearestNeighbors;
use Rubix\ML\Transformers\StandardScaler;
use Rubix\ML\Pipeline;

$dataset = Labeled::fromIterator(new CSV('iris.csv', header: true));

$validator = new KFold(5);
$metric = new Accuracy();

$estimator = new Pipeline([
    new StandardScaler(),
], new KNearestNeighbors(3));

$scores = $validator->test($estimator, $dataset, $metric);

echo "Mean accuracy: " . number_format($scores->mean() * 100, 2) . "%\n";
echo "Std dev:      " . number_format($scores->std() * 100, 2) . "%\n";
```

For **hyperparameter tuning** using grid search:

```php
<?php

use Rubix\ML\GridSearch;
use Rubix\ML\Classifiers\KNearestNeighbors;
use Rubix\ML\Classifiers\SoftmaxClassifier;
use Rubix\ML\CrossValidation\Metrics\Accuracy;
use Rubix\ML\Transformers\StandardScaler;
use Rubix\ML\Pipeline;

$params = [
    KNearestNeighbors::K => [1, 3, 5, 7, 10],
    KNearestNeighbors::WEIGHTS => ['uniform', 'distance'],
];

$estimator = new GridSearch(
    base: new Pipeline([
        new StandardScaler(),
    ], new KNearestNeighbors()),
    params: $params,
    metric: new Accuracy(),
    validator: new KFold(5)
);

$estimator->train($dataset);

echo "Best params: " . json_encode($estimator->best());
// {"k": 5, "weights": "distance"}
```

#### 3.8 Model Persistence (RBX Format)

```php
<?php

use Rubix\ML\Persisters\Filesystem;
use Rubix\ML\Persisters\Serialized;
use Rubix\ML\Serializers\RBX;

$serializer = new RBX();

// Save
$serializer->serialize($estimator, new Filesystem(storage_path('models/iris.rbx')));

// Load
$restored = $serializer->deserialize(new Filesystem(storage_path('models/iris.rbx')));
$prediction = $restored->predict(new Unlabeled([[5.9, 3.0, 4.2, 1.5]]));
```

#### 3.9 Anomaly Detection

Rubix ML provides specialized learners for detecting outliers and anomalies.

```php
<?php

use Rubix\ML\AnomalyDetectors\IsolationForest;
use Rubix\ML\AnomalyDetectors\LocalOutlierFactor;
use Rubix\ML\Transformers\StandardScaler;
use Rubix\ML\Pipeline;

// Isolation Forest: isolates anomalies by randomly partitioning the feature space
$detector = new Pipeline([
    new StandardScaler(),
], new IsolationForest(
    estimators: 100,
    contamination: 0.05  // Expected proportion of outliers in the dataset
));
$detector->train(new Labeled($samples, $labels));

// predict() returns 1 for normal, -1 for anomaly
$anomalies = $detector->predict(new Unlabeled($testSamples));

// Local Outlier Factor: compares local density of a point to its neighbors
$lof = new Pipeline([
    new StandardScaler(),
], new LocalOutlierFactor(
    k: 20,               // Number of nearest neighbors
    contamination: 0.1
));
$lof->train($dataset);
$outlierFlags = $lof->predict(new Unlabeled($testSamples));
```

---

### 4. Natural Language Processing in PHP

Natural Language Processing (NLP) enables machines to understand, interpret, and generate human language. While PHP is not the dominant language for NLP research, PHP-ML provides practical tools for text classification, sentiment analysis, and feature extraction.

#### 4.1 Tokenization

Tokenization splits text into individual tokens (words, phrases, or n-grams).

```php
<?php

use Phpml\Tokenization\WhitespaceTokenizer;
use Phpml\Tokenization\WordTokenizer;
use Phpml\Tokenization\NGramTokenizer;
use Phpml\Tokenization\SkipGramTokenizer;

$text = "The quick brown fox jumps over the lazy dog";

// WhitespaceTokenizer: split on whitespace
$tokenizer = new WhitespaceTokenizer();
print_r($tokenizer->tokenize($text));
// ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// WordTokenizer: splits on non-word characters (more robust)
$wordTokenizer = new WordTokenizer();
print_r($wordTokenizer->tokenize($text));
// ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// NGramTokenizer: produces sequences of N tokens
$nGramTokenizer = new NGramTokenizer(2, 3); // min 2, max 3
print_r($nGramTokenizer->tokenize($text));
// ['The quick', 'quick brown', ..., 'The quick brown', 'quick brown fox', ...]

// SkipGramTokenizer: like n-grams but with gaps
$skipGram = new SkipGramTokenizer(3, 2);  // 3-grams with max 2 skips
print_r($skipGram->tokenize($text));
```

#### 4.2 Stop Words

Stop words are common words (the, a, is, at) that carry little semantic meaning. Removing them reduces noise and improves model performance.

```php
<?php

use Phpml\Tokenization\WhitespaceTokenizer;
use Phpml\FeatureExtraction\TokenCountVectorizer;
use Phpml\FeatureExtraction\StopWords\English;

$samples = [
    'the product is amazing and I love it',
    'this is a terrible waste of money',
    'I really like this fantastic product',
];

$tokenizer = new WhitespaceTokenizer();
$vectorizer = new TokenCountVectorizer($tokenizer, new English());
$vectorizer->fit($samples);
$vectorizer->transform($samples);

foreach ($samples as $sample) {
    echo "[" . implode(", ", $sample) . "]\n";
}
// 'the product is amazing and I love it'
// â†’ After removing stop words: [product, amazing, love]
// 'this is a terrible waste of money'
// â†’ After: [terrible, waste, money]
```

#### 4.3 TF-IDF Vectorization

TF-IDF (Term Frequency â€” Inverse Document Frequency) assigns higher weight to words that are frequent in a specific document but rare across all documents.

```php
<?php

use Phpml\FeatureExtraction\TfIdfTransformer;
use Phpml\FeatureExtraction\TokenCountVectorizer;
use Phpml\Tokenization\WhitespaceTokenizer;

$samples = [
    'low price amazing quality',
    'cheap product great value',
    'terrible waste of money',
    'fantastic love this product',
];

$tokenizer = new WhitespaceTokenizer();
$vectorizer = new TokenCountVectorizer($tokenizer);
$vectorizer->fit($samples);
$vectorizer->transform($samples);

$transformer = new TfIdfTransformer();
$transformer->fit($samples);
$transformer->transform($samples);

// Each sample is now a TF-IDF weighted vector
// Common words like "product" get lower weight than distinctive words like "terrible"
foreach ($samples as $i => $vector) {
    echo "Document {$i}: ";
    foreach ($vector as $word => $weight) {
        echo "{$word}=" . round($weight, 4) . " ";
    }
    echo "\n";
}
```

#### 4.4 Word Frequency Analysis

```php
<?php

use Phpml\FeatureExtraction\TokenCountVectorizer;
use Phpml\Tokenization\WhitespaceTokenizer;

$documents = [
    'laravel is the best PHP framework for building web applications',
    'rubix ml provides machine learning tools for PHP developers',
    'php ml is a library for machine learning in php',
    'laravel ai sdk integrates language models into php applications',
];

$tokenizer = new WhitespaceTokenizer();
$vectorizer = new TokenCountVectorizer($tokenizer);
$vectorizer->fit($documents);
$vectorizer->transform($documents);

$vocabulary = $vectorizer->getVocabulary();
$frequencies = array_count_values(array_merge(...$documents));
arsort($frequencies);

echo "Total vocabulary size: " . count($vocabulary) . "\n";
echo "Top 10 most frequent words:\n";
$i = 0;
foreach ($frequencies as $word => $count) {
    if ($i++ >= 10) break;
    echo "  {$word}: {$count}\n";
}
```

#### 4.5 Sentiment Analysis Pipeline

Complete sentiment analysis pipeline combining PHP-ML components.

```php
<?php

use Phpml\Classification\NaiveBayes;
use Phpml\FeatureExtraction\TfIdfTransformer;
use Phpml\FeatureExtraction\TokenCountVectorizer;
use Phpml\Tokenization\WhitespaceTokenizer;
use Phpml\ModelManager;

class SentimentAnalyzer
{
    private NaiveBayes $classifier;
    private TokenCountVectorizer $vectorizer;
    private TfIdfTransformer $transformer;
    private ?string $modelPath;

    public function __construct(?string $modelPath = null)
    {
        $this->modelPath = $modelPath;
        $this->vectorizer = new TokenCountVectorizer(new WhitespaceTokenizer());
        $this->transformer = new TfIdfTransformer();
        $this->classifier = new NaiveBayes();
    }

    public function train(array $texts, array $labels): void
    {
        $samples = $texts;

        $this->vectorizer->fit($samples);
        $this->vectorizer->transform($samples);

        $this->transformer->fit($samples);
        $this->transformer->transform($samples);

        $this->classifier->train($samples, $labels);

        if ($this->modelPath) {
            $manager = new ModelManager();
            $manager->saveToFile($this->classifier, $this->modelPath . '_classifier.model');
        }
    }

    public function predict(string $text): array
    {
        $sample = [$text];

        $this->vectorizer->transform($sample);
        $this->transformer->transform($sample);

        $label = $this->classifier->predict($sample[0]);
        $probabilities = $this->classifier->predictProbability($sample[0]);

        return [
            'label' => $label,
            'confidence' => max($probabilities),
            'probabilities' => $probabilities,
        ];
    }

    public static function fromFile(string $modelPath): self
    {
        $instance = new self($modelPath);
        $manager = new ModelManager();
        $instance->classifier = $manager->restoreFromFile($modelPath . '_classifier.model');
        return $instance;
    }
}

// Usage
$analyzer = new SentimentAnalyzer(storage_path('models/sentiment'));

$analyzer->train(
    [
        'I love this product it is amazing',
        'Absolutely fantastic quality and value',
        'Terrible worst purchase I ever made',
        'Complete waste of money do not buy',
        'Really happy with my purchase excellent',
        'Disappointed poor quality broke quickly',
    ],
    ['positive', 'positive', 'negative', 'negative', 'positive', 'negative']
);

$result = $analyzer->predict('This is incredible quality I am thrilled');
echo "Sentiment: {$result['label']}\n";
echo "Confidence: " . round($result['confidence'], 4) . "\n";
```

#### 4.6 Stemming

Stemming reduces words to their root form (running â†’ run, better â†’ better, walked â†’ walk). PHP-ML provides a Porter Stemmer implementation.

```php
<?php

use Phpml\Tokenization\WordTokenizer;

class SimpleStemmer
{
    private static array $suffixes = [
        'ing' => '', 'ed' => '', 'ly' => '', 'es' => '',
        's' => '', 'ment' => '', 'tion' => '', 'ness' => '',
        'able' => '', 'ible' => '', 'er' => '', 'est' => '',
    ];

    public static function stem(string $word): string
    {
        $lower = strtolower($word);

        foreach (self::$suffixes as $suffix => $replacement) {
            if (strlen($lower) > 4 && str_ends_with($lower, $suffix)) {
                $lower = substr($lower, 0, -strlen($suffix)) . $replacement;
                break;
            }
        }

        // Handle double consonants at end (running â†’ run)
        if (strlen($lower) > 3) {
            $last = substr($lower, -1);
            $secondLast = substr($lower, -2, 1);
            if ($last === $secondLast && in_array($last, ['b', 'd', 'g', 'l', 'm', 'n', 'p', 'r', 't'])) {
                $lower = substr($lower, 0, -1);
            }
        }

        return $lower;
    }

    public static function stemText(string $text): string
    {
        $tokenizer = new WordTokenizer();
        $words = $tokenizer->tokenize($text);
        $stemmed = array_map([self::class, 'stem'], $words);
        return implode(' ', $stemmed);
    }
}

echo SimpleStemmer::stem('running');   // run
echo SimpleStemmer::stem('quickly');   // quick
echo SimpleStemmer::stem('better');    // better (irregular, unchanged)
echo SimpleStemmer::stem('studies');   // studi
```

---

### 5. ML Model Workflow in Laravel

Integrating ML models into a Laravel application requires a structured workflow for training, storing, versioning, and deploying models.

#### 5.1 Artisan Commands for Training

Create dedicated Artisan commands for each training pipeline:

```php
<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Phpml\Classification\NaiveBayes;
use Phpml\FeatureExtraction\TfIdfTransformer;
use Phpml\FeatureExtraction\TokenCountVectorizer;
use Phpml\Tokenization\WhitespaceTokenizer;
use Phpml\ModelManager;
use App\Models\TrainingData;
use SplFileObject;

class TrainSentimentModel extends Command
{
    protected $signature = 'ml:train-sentiment
        {--source= : Path to CSV training data}
        {--version=1.0 : Model version tag}
        {--force : Retrain even if model exists}';

    protected $description = 'Train sentiment analysis model from labeled data';

    public function handle(): int
    {
        $modelPath = storage_path("models/sentiment/v{$this->option('version')}");
        $modelFile = "{$modelPath}_classifier.model";

        if (file_exists($modelFile) && !$this->option('force')) {
            $this->warn("Model version {$this->option('version')} already exists. Use --force to retrain.");
            return Command::FAILURE;
        }

        $this->info('Loading training data...');
        [$texts, $labels] = $this->loadData($this->option('source'));

        $this->info("Training on " . count($texts) . " samples...");

        $vectorizer = new TokenCountVectorizer(new WhitespaceTokenizer());
        $transformer = new TfIdfTransformer();
        $classifier = new NaiveBayes();

        $samples = $texts;
        $vectorizer->fit($samples);
        $vectorizer->transform($samples);
        $transformer->fit($samples);
        $transformer->transform($samples);
        $classifier->train($samples, $labels);

        if (!is_dir(dirname($modelPath))) {
            mkdir(dirname($modelPath), 0755, true);
        }

        $manager = new ModelManager();
        $manager->saveToFile($classifier, $modelFile);

        // Save vectorizer and transformer state for inference
        file_put_contents(
            "{$modelPath}_pipeline.json",
            json_encode([
                'version' => $this->option('version'),
                'trained_at' => now()->toIso8601String(),
                'samples' => count($texts),
                'vocabulary' => $vectorizer->getVocabulary(),
                'classes' => array_unique($labels),
            ])
        );

        $this->info("Model saved to {$modelFile}");
        $this->info("Training complete. Version: {$this->option('version')}");

        return Command::SUCCESS;
    }

    private function loadData(?string $source): array
    {
        if ($source && file_exists($source)) {
            $file = new SplFileObject($source);
            $file->setFlags(SplFileObject::READ_CSV | SplFileObject::SKIP_EMPTY);
            $texts = [];
            $labels = [];
            foreach ($file as $row) {
                if (count($row) >= 2) {
                    $texts[] = $row[0];
                    $labels[] = strtolower(trim($row[1]));
                }
            }
            return [$texts, $labels];
        }

        // Fallback: load from database
        $records = TrainingData::where('type', 'sentiment')->where('used', false)->get();
        return [$records->pluck('text')->toArray(), $records->pluck('label')->toArray()];
    }
}
```

#### 5.2 Scheduling Retraining

Laravel's task scheduler runs model retraining on a regular cadence.

```php
<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected function schedule(Schedule $schedule): void
    {
        // Retrain sentiment model weekly with new labeled data
        $schedule->command('ml:train-sentiment --force --version=weekly-{date}')
            ->weekly()
            ->mondays()
            ->at('03:00')
            ->withoutOverlapping()
            ->sendOutputTo(storage_path('logs/ml-training.log'))
            ->emailOutputTo('ml-team@example.com');

        // Retrain recommendation model daily
        $schedule->command('ml:train-recommender --force')
            ->dailyAt('02:00')
            ->withoutOverlapping(60)
            ->onSuccess(fn() => info('Recommender model updated successfully'))
            ->onFailure(fn() => notify(new ModelTrainingFailed('recommender')));

        // Evaluate all production models every Sunday
        $schedule->command('ml:evaluate-models')
            ->weekly()
            ->sundays()
            ->at('05:00');

        // Check for data drift in features
        $schedule->command('ml:check-drift')
            ->hourly()
            ->withoutOverlapping();
    }
}
```

#### 5.3 Model Versioning

Maintain a model registry database table for version tracking.

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('model_registry', function (Blueprint $table) {
            $table->id();
            $table->string('name');                    // sentiment, recommender, etc.
            $table->string('version');                  // 1.0, 2.0, weekly-2025-03-10
            $table->string('algorithm');                // NaiveBayes, RandomForest
            $table->json('metrics')->nullable();         // {"accuracy": 0.94, "f1": 0.93}
            $table->json('parameters')->nullable();      // {"alpha": 1.0, "kernel": "rbf"}
            $table->string('status');                    // staging, production, archived
            $table->string('file_path');                 // Relative path in storage
            $table->integer('training_samples')->default(0);
            $table->string('training_duration')->nullable();
            $table->foreignId('trained_by_user_id')->nullable()->constrained('users');
            $table->timestamp('trained_at')->nullable();
            $table->timestamps();

            $table->unique(['name', 'version']);
            $table->index(['name', 'status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('model_registry');
    }
};
```

Register a model after training:

```php
<?php

namespace App\Services;

use App\Models\ModelRegistry;
use Illuminate\Support\Facades\Storage;

class ModelRegistryService
{
    public function register(
        string $name,
        string $version,
        string $algorithm,
        array $metrics,
        array $parameters,
        string $filePath,
        int $trainingSamples,
    ): ModelRegistry {
        return ModelRegistry::create([
            'name' => $name,
            'version' => $version,
            'algorithm' => $algorithm,
            'metrics' => $metrics,
            'parameters' => $parameters,
            'status' => 'staging',
            'file_path' => $filePath,
            'training_samples' => $trainingSamples,
            'trained_at' => now(),
        ]);
    }

    public function promoteToProduction(string $name, string $version): void
    {
        // Demote current production
        ModelRegistry::where('name', $name)
            ->where('status', 'production')
            ->update(['status' => 'archived']);

        // Promote new version
        ModelRegistry::where('name', $name)
            ->where('version', $version)
            ->update(['status' => 'production']);
    }

    public function getProductionModel(string $name): ?ModelRegistry
    {
        return ModelRegistry::where('name', $name)
            ->where('status', 'production')
            ->latest('trained_at')
            ->first();
    }
}
```

#### 5.4 A/B Testing Models in Production

Compare two model versions live with a traffic split.

```php
<?php

namespace App\Http\Controllers\Api;

use App\Models\ModelRegistry;
use App\Services\SentimentService;
use Illuminate\Http\JsonResponse;

class SentimentController extends Controller
{
    public function __construct(
        private SentimentService $sentimentService
    ) {}

    public function analyze(Request $request): JsonResponse
    {
        $data = $request->validate(['text' => 'required|string|max:5000']);

        // A/B test: 20% of traffic sees version 2.0, 80% sees 1.0
        $useV2 = random_int(1, 100) <= 20;

        $modelVersion = $useV2 ? '2.0' : '1.0';

        $result = $this->sentimentService->analyze(
            $data['text'],
            $modelVersion
        );

        // Log which model handled this request for later comparison
        Log::channel('ml-abtest')->info('Sentiment prediction', [
            'model' => $modelVersion,
            'text_hash' => md5($data['text']),
            'prediction' => $result['label'],
            'confidence' => $result['confidence'],
            'user_id' => $request->user()?->id,
        ]);

        return response()->json([
            'sentiment' => $result['label'],
            'confidence' => $result['confidence'],
            'model_version' => $modelVersion,
        ]);
    }
}
```

#### 5.5 Feature Stores with MySQL/Redis

A feature store provides a centralized repository of pre-computed features.

```php
<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redis;

class FeatureStore
{
    private const CACHE_PREFIX = 'features:';
    private const CACHE_TTL = 3600; // 1 hour

    public function computeAndStore(int $userId): array
    {
        $features = DB::transaction(function () use ($userId) {
            $user = DB::table('users')->find($userId);
            $orders = DB::table('orders')->where('user_id', $userId);
            $reviews = DB::table('reviews')->where('user_id', $userId);

            $totalOrders = (clone $orders)->count();
            $totalSpent = (clone $orders)->sum('total');
            $avgOrderValue = $totalOrders > 0 ? $totalSpent / $totalOrders : 0;
            $daysSinceLastOrder = (clone $orders)
                ->max('created_at')
                ? now()->diffInDays((clone $orders)->max('created_at'))
                : 999;

            $negativeReviews = (clone $reviews)
                ->where('rating', '<=', 2)
                ->count();
            $totalReviews = (clone $reviews)->count();
            $negativeReviewRatio = $totalReviews > 0
                ? $negativeReviews / $totalReviews
                : 0;

            return [
                'total_orders' => $totalOrders,
                'total_spent' => $totalSpent,
                'avg_order_value' => $avgOrderValue,
                'days_since_last_order' => $daysSinceLastOrder,
                'negative_review_ratio' => $negativeReviewRatio,
                'account_age_days' => now()->diffInDays($user->created_at),
                'is_active_subscriber' => $user->subscribed_at ? 1 : 0,
            ];
        });

        // Store in Redis for low-latency access
        Redis::hmset(self::CACHE_PREFIX . $userId, $features);
        Redis::expire(self::CACHE_PREFIX . $userId, self::CACHE_TTL);

        // Store historical snapshot in MySQL for training data
        DB::table('feature_snapshots')->insert([
            'user_id' => $userId,
            'features' => json_encode($features),
            'snapshot_at' => now(),
        ]);

        return $features;
    }

    public function get(int $userId): ?array
    {
        $cached = Redis::hgetall(self::CACHE_PREFIX . $userId);
        if (!empty($cached)) {
            return array_map(fn($v) => is_numeric($v) ? (float) $v : $v, $cached);
        }

        return null;
    }

    public function getBatch(array $userIds): array
    {
        $pipe = Redis::pipeline();
        foreach ($userIds as $id) {
            $pipe->hgetall(self::CACHE_PREFIX . $id);
        }
        $results = $pipe->execute();

        $features = [];
        foreach ($userIds as $i => $id) {
            if (!empty($results[$i])) {
                $features[$id] = array_map(
                    fn($v) => is_numeric($v) ? (float) $v : $v,
                    $results[$i]
                );
            }
        }
        return $features;
    }
}
```

---

### 6. Laravel AI SDK + Classical ML Integration

The most powerful pattern in modern Laravel applications is combining classical ML predictions with LLM reasoning. The ML model outputs structured predictions; the LLM explains them in natural language, considers business context, and takes actions.

#### 6.1 ML Tool for AI Agents

Create a custom tool that wraps a Rubix ML classifier and exposes it to AI agents.

```php
<?php

namespace App\Ai\Tools;

use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Ai\Contracts\Tool;
use Laravel\Ai\Tools\Request;
use Rubix\ML\Serializers\RBX;
use Rubix\ML\Persisters\Filesystem;
use Rubix\ML\Datasets\Unlabeled;
use Stringable;

class SentimentAnalysisTool implements Tool
{
    private static ?\Rubix\ML\Pipeline $model = null;

    public function description(): Stringable|string
    {
        return 'Analyzes the sentiment of text as positive or negative. ' .
               'Returns the predicted label and confidence score. ' .
               'Use this when you need to determine the emotional tone of user feedback, reviews, or messages.';
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'text' => $schema->string()
                ->required()
                ->maxLength(5000)
                ->description('The text to analyze for sentiment'),
        ];
    }

    public function handle(Request $request): Stringable|string
    {
        $text = $request['text'];

        $model = $this->loadModel();

        $prediction = $model->predict(new Unlabeled([[$text]]));
        $probabilities = $model->proba(new Unlabeled([[$text]]));

        $label = $prediction[0];
        $confidence = max($probabilities[0]);

        return json_encode([
            'sentiment' => $label === 1 ? 'positive' : 'negative',
            'confidence' => round($confidence, 4),
            'positive_probability' => round($probabilities[0][1] ?? 0, 4),
            'negative_probability' => round($probabilities[0][0] ?? 0, 4),
        ]);
    }

    private function loadModel(): \Rubix\ML\Pipeline
    {
        if (self::$model === null) {
            $serializer = new RBX();
            self::$model = $serializer->deserialize(
                new Filesystem(storage_path('models/sentiment_v2.rbx'))
            );
        }
        return self::$model;
    }
}
```

#### 6.2 Hybrid Prediction + Explanation Endpoint

```php
<?php

namespace App\Http\Controllers\Api;

use App\Services\CustomerChurnService;
use Illuminate\Http\JsonResponse;
use Laravel\Ai\Facades\AI;

class ChurnPredictionController extends Controller
{
    public function __construct(
        private CustomerChurnService $churnService
    ) {}

    public function predict(Request $request): JsonResponse
    {
        $data = $request->validate([
            'customer_id' => 'required|exists:customers,id',
        ]);

        // Step 1: Compute features
        $features = $this->churnService->computeFeatures($data['customer_id']);

        // Step 2: Get classical ML prediction
        $mlResult = $this->churnService->predictChurn($features);

        // Step 3: Use LLM to generate a human-readable explanation
        $explanation = AI::agent('analyst')
            ->instructions(
                'You are a customer retention analyst. Given ML prediction results ' .
                'and customer features, explain WHY the model made this prediction and ' .
                'recommend specific retention actions. Be concise and data-driven.'
            )
            ->prompt(json_encode([
                'ml_prediction' => $mlResult,
                'customer_features' => $features,
                'customer_id' => $data['customer_id'],
            ]))
            ->generate();

        // Step 4: Log the hybrid inference
        $this->churnService->logPrediction(
            customerId: $data['customer_id'],
            mlResult: $mlResult,
            explanation: $explanation,
        );

        return response()->json([
            'churn_risk' => $mlResult['risk_level'],
            'probability' => $mlResult['probability'],
            'contributing_factors' => $mlResult['top_features'],
            'ai_explanation' => $explanation,
            'recommended_actions' => $mlResult['actions'],
        ]);
    }
}
```

#### 6.3 ML Predictions as Context for Agent Reasoning

Feed multiple ML model outputs into a single agent for holistic decision-making.

```php
<?php

namespace App\Services;

use Laravel\Ai\Facades\AI;
use App\Models\Order;
use App\Models\Customer;

class IntelligentOrderRoutingService
{
    public function routeOrder(Order $order): array
    {
        $customer = $order->customer;

        // Collect predictions from multiple ML models in parallel
        $fraudScore = $this->predictFraud($order);
        $sentiment = $this->analyzeSentiment($customer->recentFeedback());
        $churnRisk = $this->predictChurn($customer);
        $lifetimeValue = $this->predictLTV($customer);

        // Feed all predictions into an LLM agent for decision-making
        $decision = AI::agent('order-router')
            ->instructions(
                'You are an order routing agent. Based on ML predictions about this ' .
                'order and customer, decide how to route the order. ' .
                'Options: "auto_approve", "manual_review", "flag_for_fraud_team", ' .
                '"escalate_to_manager". Consider fraud risk, customer sentiment, ' .
                'churn risk, and lifetime value in your decision.'
            )
            ->prompt(json_encode([
                'order_id' => $order->id,
                'amount' => $order->total,
                'is_new_customer' => $customer->orders_count <= 1,
                'predictions' => [
                    'fraud_score' => $fraudScore,
                    'customer_sentiment' => $sentiment,
                    'churn_risk_percent' => $churnRisk,
                    'predicted_ltv' => $lifetimeValue,
                ],
            ]))
            ->generate();

        $parsedDecision = json_decode($decision, true);

        // Execute the decision
        match ($parsedDecision['action'] ?? 'manual_review') {
            'auto_approve' => $this->approve($order),
            'manual_review' => $this->queueReview($order),
            'flag_for_fraud_team' => $this->flagFraud($order, $parsedDecision),
            'escalate_to_manager' => $this->escalate($order, $parsedDecision),
        };

        return [
            'action' => $parsedDecision['action'],
            'rationale' => $parsedDecision['rationale'] ?? '',
            'ml_signals' => $parsedDecision['signals_used'] ?? [],
        ];
    }

    private function predictFraud(Order $order): array
    {
        $features = [
            $order->total,
            $order->items()->count(),
            $order->is_express_shipping ? 1 : 0,
            $order->billing_address_id === $order->shipping_address_id ? 0 : 1,
            $order->customer->orders_count,
            $order->customer->failed_payments_count,
        ];

        $model = $this->loadModel('fraud-detection.rbx');
        $prediction = $model->predict(new Unlabeled([$features]));

        return [
            'is_fraudulent' => $prediction[0] === 1,
            'score' => $model->proba(new Unlabeled([$features]))[0][1],
        ];
    }
}
```

#### 6.4 Combining Structured ML Output with LLM Reasoning

```php
<?php

namespace App\Services;

use Laravel\Ai\Facades\AI;
use Phpml\Association\Apriori;
use Phpml\ModelManager;

class ProductRecommendationService
{
    public function getRecommendations(int $userId, array $cartItems): array
    {
        // Classical ML: association rule mining on purchase history
        $rules = $this->getAssociationRules($cartItems);

        // Classical ML: collaborative filtering (user-based similarity)
        $similarUsers = $this->findSimilarUsers($userId);

        // Classical ML: content-based filtering (product features)
        $contentBased = $this->contentBasedRecommendations($cartItems);

        // LLM synthesizes all signals into a final recommendation with explanations
        $recommendation = AI::agent('recommender')
            ->instructions(
                'You are a product recommendation engine. Given association rules, ' .
                'similar user purchases, and content-based matches, synthesize a ' .
                'ranked list of 5 product recommendations. For each, explain why ' .
                'it is recommended using natural language. Consider: ' .
                '1. Products frequently bought together with items in the cart ' .
                '2. Products purchased by similar customers ' .
                '3. Products with matching attributes to cart items ' .
                'Return JSON with: product_id, name, reason, confidence_score'
            )
            ->prompt(json_encode([
                'cart_items' => $cartItems,
                'association_rules' => $rules,
                'similar_users_purchases' => $similarUsers,
                'content_based_matches' => $contentBased,
            ]))
            ->generate();

        return json_decode($recommendation, true);
    }

    private function getAssociationRules(array $cartItems): array
    {
        $manager = new ModelManager();
        $apriori = $manager->restoreFromFile(
            storage_path('models/apriori-purchases.model')
        );

        $rules = $apriori->getRules();
        $relevant = [];

        foreach ($rules as $rule) {
            $antecedent = $rule['antecedent'];
            if (!empty(array_intersect($antecedent, $cartItems))) {
                $relevant[] = [
                    'if_bought' => $antecedent,
                    'recommend' => $rule['consequent'],
                    'confidence' => $rule['confidence'],
                    'support' => $rule['support'],
                ];
            }
        }

        // Sort by confidence descending
        usort($relevant, fn($a, $b) => $b['confidence'] <=> $a['confidence']);

        return array_slice($relevant, 0, 10);
    }
}
```

---

### 7. Feature Engineering Pipelines

Features are the raw material of machine learning. Well-engineered features often matter more than the choice of algorithm.

#### 7.1 Data Collection

```php
<?php

namespace App\Services\FeatureEngineering;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\LazyCollection;

class DataCollector
{
    public function collectUserFeatures(int $batchSize = 1000): LazyCollection
    {
        return DB::table('users')
            ->join('orders', 'users.id', '=', 'orders.user_id')
            ->join('order_items', 'orders.id', '=', 'order_items.order_id')
            ->join('products', 'order_items.product_id', '=', 'products.id')
            ->leftJoin('reviews', 'order_items.id', '=', 'reviewable_id')
            ->leftJoin('user_sessions', 'users.id', '=', 'user_sessions.user_id')
            ->select([
                'users.id as user_id',
                'users.created_at as user_created_at',
                'users.is_subscribed',
                DB::raw('COUNT(DISTINCT orders.id) as total_orders'),
                DB::raw('COALESCE(SUM(orders.total), 0) as total_spent'),
                DB::raw('COALESCE(AVG(order_items.quantity), 0) as avg_items_per_order'),
                DB::raw('COALESCE(AVG(orders.total), 0) as avg_order_value'),
                DB::raw('COALESCE(MAX(orders.created_at), users.created_at) as last_order_date'),
                DB::raw('COUNT(DISTINCT products.category_id) as distinct_categories'),
                DB::raw('COALESCE(AVG(reviews.rating), 0) as avg_rating'),
                DB::raw('COUNT(DISTINCT user_sessions.id) as session_count'),
            ])
            ->groupBy('users.id', 'users.created_at', 'users.is_subscribed')
            ->lazy($batchSize);
    }
}
```

#### 7.2 Data Cleaning (Nulls, Outliers)

```php
<?php

namespace App\Services\FeatureEngineering;

use Illuminate\Support\Collection;

class DataCleaner
{
    public function handleNulls(Collection $data, array $strategies): Collection
    {
        return $data->map(function ($row) use ($strategies) {
            foreach ($strategies as $column => $strategy) {
                if (is_null($row->$column) || $row->$column === '') {
                    $row->$column = match ($strategy) {
                        'mean' => $this->columnMean($data, $column),
                        'median' => $this->columnMedian($data, $column),
                        'zero' => 0,
                        'mode' => $this->columnMode($data, $column),
                        'drop' => null,
                        default => $strategy,
                    };
                }
            }
            return $row;
        })->reject(fn($row) => in_array(null, (array) $row, true));
    }

    public function removeOutliersIQR(Collection $data, array $columns, float $multiplier = 1.5): Collection
    {
        return $data->filter(function ($row) use ($columns, $multiplier) {
            foreach ($columns as $col) {
                $values = $data->pluck($col)->sort()->values();
                $count = $values->count();
                $q1 = $values->get((int) ($count * 0.25));
                $q3 = $values->get((int) ($count * 0.75));
                $iqr = $q3 - $q1;
                $lower = $q1 - $multiplier * $iqr;
                $upper = $q3 + $multiplier * $iqr;

                if ($row->$col < $lower || $row->$col > $upper) {
                    return false;
                }
            }
            return true;
        });
    }

    public function capOutliers(Collection $data, array $columns, float $percentile = 0.99): Collection
    {
        return $data->map(function ($row) use ($columns, $percentile, $data) {
            foreach ($columns as $col) {
                $values = $data->pluck($col)->sort()->values();
                $index = (int) ($values->count() * $percentile);
                $cap = $values->get($index);
                if ($row->$col > $cap) {
                    $row->$col = $cap;
                }
            }
            return $row;
        });
    }

    private function columnMean(Collection $data, string $column): float
    {
        return $data->pluck($column)->filter()->average();
    }

    private function columnMedian(Collection $data, string $column): float
    {
        $values = $data->pluck($column)->filter()->sort()->values();
        $mid = (int) ($values->count() / 2);
        return $values->count() % 2 === 0
            ? ($values->get($mid - 1) + $values->get($mid)) / 2
            : $values->get($mid);
    }

    private function columnMode(Collection $data, string $column): mixed
    {
        return $data->pluck($column)->filter()->mode()[0] ?? 0;
    }
}
```

#### 7.3 Feature Transformation

```php
<?php

namespace App\Services\FeatureEngineering;

use Illuminate\Support\Collection;

class FeatureTransformer
{
    public function scaleMinMax(Collection $data, array $columns): Collection
    {
        $mins = [];
        $maxs = [];

        foreach ($columns as $col) {
            $mins[$col] = $data->min($col);
            $maxs[$col] = $data->max($col);
        }

        return $data->map(function ($row) use ($columns, $mins, $maxs) {
            foreach ($columns as $col) {
                $range = $maxs[$col] - $mins[$col];
                $row->$col = $range > 0
                    ? ($row->$col - $mins[$col]) / $range
                    : 0;
            }
            return $row;
        });
    }

    public function scaleStandard(Collection $data, array $columns): Collection
    {
        $means = [];
        $stds = [];

        foreach ($columns as $col) {
            $values = $data->pluck($col);
            $means[$col] = $values->average();
            $stds[$col] = sqrt(
                $values->sum(fn($v) => ($v - $means[$col]) ** 2) / max($values->count() - 1, 1)
            );
        }

        return $data->map(function ($row) use ($columns, $means, $stds) {
            foreach ($columns as $col) {
                $row->$col = $stds[$col] > 0
                    ? ($row->$col - $means[$col]) / $stds[$col]
                    : 0;
            }
            return $row;
        });
    }

    public function logTransform(Collection $data, array $columns): Collection
    {
        return $data->map(function ($row) use ($columns) {
            foreach ($columns as $col) {
                $row->$col = log(max($row->$col, 0) + 1);
            }
            return $row;
        });
    }

    public function oneHotEncode(Collection $data, string $column): Collection
    {
        $categories = $data->pluck($column)->unique()->values();

        return $data->map(function ($row) use ($column, $categories) {
            foreach ($categories as $cat) {
                $safeName = str_replace([' ', '-', '.'], '_', "{$column}_{$cat}");
                $row->$safeName = $row->$column === $cat ? 1 : 0;
            }
            unset($row->$column);
            return $row;
        });
    }

    public function createInteractionTerms(
        Collection $data,
        string $col1,
        string $col2,
        string $newName = null
    ): Collection {
        $name = $newName ?? "{$col1}_x_{$col2}";

        return $data->map(function ($row) use ($col1, $col2, $name) {
            $row->$name = $row->$col1 * $row->$col2;
            return $row;
        });
    }
}
```

#### 7.4 Feature Selection (Correlation, Importance)

```php
<?php

namespace App\Services\FeatureEngineering;

use Illuminate\Support\Collection;

class FeatureSelector
{
    public function byCorrelation(Collection $data, string $target, float $threshold = 0.1): array
    {
        $features = $data->first() ? array_keys(get_object_vars($data->first())) : [];
        $features = array_diff($features, [$target]);

        $selected = [];

        foreach ($features as $feature) {
            $correlation = $this->pearsonCorrelation(
                $data->pluck($feature)->toArray(),
                $data->pluck($target)->toArray()
            );

            if (abs($correlation) >= $threshold) {
                $selected[$feature] = $correlation;
            }
        }

        arsort($selected);
        return $selected;
    }

    public function byVariance(Collection $data, float $threshold = 0.01): array
    {
        $features = $data->first() ? array_keys(get_object_vars($data->first())) : [];

        $selected = [];
        foreach ($features as $feature) {
            $values = $data->pluck($feature)->toArray();
            $mean = array_sum($values) / count($values);
            $variance = array_sum(array_map(fn($v) => ($v - $mean) ** 2, $values)) / count($values);

            if ($variance >= $threshold) {
                $selected[$feature] = $variance;
            }
        }

        arsort($selected);
        return $selected;
    }

    public function byMutualInformation(Collection $data, string $target, int $topK = 10): array
    {
        $features = $data->first() ? array_keys(get_object_vars($data->first())) : [];
        $features = array_diff($features, [$target]);

        $targetValues = $data->pluck($target)->toArray();
        $targetEntropy = $this->entropy($targetValues);

        $scores = [];

        foreach ($features as $feature) {
            $featureValues = $data->pluck($feature)->toArray();
            $jointEntropy = $this->jointEntropy($featureValues, $targetValues);
            $mi = $targetEntropy + $this->entropy($featureValues) - $jointEntropy;
            $scores[$feature] = $mi;
        }

        arsort($scores);
        return array_slice($scores, 0, $topK);
    }

    private function pearsonCorrelation(array $x, array $y): float
    {
        $n = count($x);
        $meanX = array_sum($x) / $n;
        $meanY = array_sum($y) / $n;

        $numerator = 0;
        $denomX = 0;
        $denomY = 0;

        for ($i = 0; $i < $n; $i++) {
            $dx = $x[$i] - $meanX;
            $dy = $y[$i] - $meanY;
            $numerator += $dx * $dy;
            $denomX += $dx * $dx;
            $denomY += $dy * $dy;
        }

        $denominator = sqrt($denomX * $denomY);
        return $denominator > 0 ? $numerator / $denominator : 0;
    }

    private function entropy(array $values): float
    {
        $n = count($values);
        $counts = array_count_values($values);
        $entropy = 0;

        foreach ($counts as $count) {
            $p = $count / $n;
            $entropy -= $p * log($p);
        }

        return $entropy;
    }

    private function jointEntropy(array $x, array $y): float
    {
        $n = count($x);
        $pairs = array_map(fn($a, $b) => "{$a}:{$b}", $x, $y);
        $counts = array_count_values($pairs);
        $entropy = 0;

        foreach ($counts as $count) {
            $p = $count / $n;
            $entropy -= $p * log($p);
        }

        return $entropy;
    }
}
```

#### 7.5 Batch Processing with Laravel Queues

Process feature engineering at scale using Laravel queue jobs.

```php
<?php

namespace App\Jobs;

use App\Services\FeatureEngineering\FeatureStore;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Log;

class ComputeUserFeaturesJob implements ShouldQueue
{
    use Queueable;

    public function __construct(
        private readonly int $userId,
        private readonly bool $storeHistorical = true
    ) {}

    public function handle(FeatureStore $featureStore): void
    {
        try {
            $features = $featureStore->computeAndStore(
                userId: $this->userId,
                storeHistorical: $this->storeHistorical
            );

            Log::channel('ml-features')->info('Features computed', [
                'user_id' => $this->userId,
                'feature_count' => count($features),
            ]);
        } catch (\Throwable $e) {
            Log::channel('ml-features')->error('Feature computation failed', [
                'user_id' => $this->userId,
                'error' => $e->getMessage(),
            ]);

            $this->release(30); // Retry in 30 seconds
        }
    }

    public function tags(): array
    {
        return ['feature-engineering', "user:{$this->userId}"];
    }
}

class BatchFeatureEngineeringJob implements ShouldQueue
{
    use Queueable;

    public function __construct(
        private readonly array $userIds,
        private readonly int $batchSize = 100
    ) {}

    public function handle(): void
    {
        foreach (array_chunk($this->userIds, $this->batchSize) as $batch) {
            foreach ($batch as $userId) {
                ComputeUserFeaturesJob::dispatch($userId);
            }
        }
    }
}
```

Dispatch feature computation from a controller:

```php
<?php

namespace App\Http\Controllers\Api;

use App\Jobs\ComputeUserFeaturesJob;
use App\Jobs\BatchFeatureEngineeringJob;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class FeatureController extends Controller
{
    public function computeForUser(int $userId): JsonResponse
    {
        ComputeUserFeaturesJob::dispatch($userId);

        return response()->json(['message' => 'Feature computation queued']);
    }

    public function recomputeAll(): JsonResponse
    {
        $userIds = User::pluck('id')->toArray();

        BatchFeatureEngineeringJob::dispatch($userIds);

        return response()->json([
            'message' => 'Batch feature engineering queued',
            'users' => count($userIds),
        ]);
    }
}
```

---

### 8. Model Evaluation & MLOps Basics

MLOps (Machine Learning Operations) brings DevOps principles to ML workflows â€” experiment tracking, model registry, drift monitoring, and safe deployment strategies.

#### 8.1 Experiment Tracking

```php
<?php

namespace App\Services\MlOps;

use App\Models\MlExperiment;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Stopwatch\Stopwatch;

class ExperimentTracker
{
    private array $parameters = [];
    private array $metrics = [];
    private array $tags = [];
    private ?Stopwatch $stopwatch = null;
    private ?string $runId = null;

    public function startRun(string $experimentName, array $parameters = []): string
    {
        $this->runId = (string) str()->uuid();
        $this->parameters = $parameters;
        $this->metrics = [];
        $this->tags = [
            'started_at' => now()->toIso8601String(),
            'php_version' => PHP_VERSION,
        ];

        $this->stopwatch = new Stopwatch();
        $this->stopwatch->start($this->runId);

        MlExperiment::create([
            'run_id' => $this->runId,
            'experiment_name' => $experimentName,
            'parameters' => $parameters,
            'tags' => $this->tags,
            'status' => 'running',
        ]);

        Log::channel('ml-experiments')->info("Experiment started: {$experimentName}", [
            'run_id' => $this->runId,
        ]);

        return $this->runId;
    }

    public function logMetric(string $key, float $value): void
    {
        $this->metrics[$key] = $value;

        if ($this->runId) {
            MlExperiment::where('run_id', $this->runId)
                ->update(['metrics' => $this->metrics]);
        }
    }

    public function logMetrics(array $metrics): void
    {
        foreach ($metrics as $key => $value) {
            $this->metrics[$key] = $value;
        }

        if ($this->runId) {
            MlExperiment::where('run_id', $this->runId)
                ->update(['metrics' => $this->metrics]);
        }
    }

    public function endRun(string $status = 'completed'): void
    {
        if (!$this->stopwatch || !$this->runId) {
            return;
        }

        $event = $this->stopwatch->stop($this->runId);
        $duration = $event->getDuration() / 1000; // milliseconds â†’ seconds

        MlExperiment::where('run_id', $this->runId)->update([
            'status' => $status,
            'duration_seconds' => $duration,
            'completed_at' => now(),
        ]);

        Log::channel('ml-experiments')->info("Experiment ended: {$status}", [
            'run_id' => $this->runId,
            'duration' => $duration,
            'metrics' => $this->metrics,
        ]);
    }

    public function getBestRun(string $experimentName, string $metric, string $mode = 'max'): ?MlExperiment
    {
        $query = MlExperiment::where('experiment_name', $experimentName)
            ->where('status', 'completed');

        return $mode === 'max'
            ? $query->orderByRaw("JSON_UNQUOTE(JSON_EXTRACT(metrics, '$.{$metric}')) DESC")->first()
            : $query->orderByRaw("JSON_UNQUOTE(JSON_EXTRACT(metrics, '$.{$metric}')) ASC")->first();
    }
}
```

Migrations for experiment tracking:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ml_experiments', function (Blueprint $table) {
            $table->id();
            $table->uuid('run_id')->unique();
            $table->string('experiment_name');
            $table->json('parameters');
            $table->json('metrics')->nullable();
            $table->json('tags')->nullable();
            $table->string('status'); // running, completed, failed
            $table->float('duration_seconds')->nullable();
            $table->timestamp('completed_at')->nullable();
            $table->timestamps();

            $table->index('experiment_name');
            $table->index('status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ml_experiments');
    }
};
```

#### 8.2 Model Registry

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class ModelRegistry extends Model
{
    protected $table = 'model_registry';

    protected $fillable = [
        'name',
        'version',
        'algorithm',
        'metrics',
        'parameters',
        'status',
        'file_path',
        'training_samples',
        'training_duration',
        'trained_by_user_id',
        'trained_at',
    ];

    protected function casts(): array
    {
        return [
            'metrics' => 'array',
            'parameters' => 'array',
            'trained_at' => 'datetime',
        ];
    }

    public function getFullPath(): string
    {
        return Storage::disk('ml-models')->path($this->file_path);
    }

    public function promote(): void
    {
        static::where('name', $this->name)
            ->where('status', 'production')
            ->update(['status' => 'archived']);

        $this->update(['status' => 'production']);
    }

    public function archive(): void
    {
        $this->update(['status' => 'archived']);
    }

    public function scopeProduction(Builder $query, string $name): Builder
    {
        return $query->where('name', $name)->where('status', 'production');
    }

    public function scopeStaging(Builder $query, string $name): Builder
    {
        return $query->where('name', $name)->where('status', 'staging');
    }
}
```

#### 8.3 Feature Drift Detection

```php
<?php

namespace App\Services\MlOps;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class DriftDetector
{
    private float $alertThreshold = 0.05; // 5% drift triggers alert
    private int $windowSize = 1000;        // Number of recent predictions to analyze

    public function checkFeatureDrift(string $modelName, array $currentFeatures): array
    {
        $baseline = $this->getBaselineStatistics($modelName);
        $driftReport = [];

        foreach ($currentFeatures as $feature => $value) {
            if (!isset($baseline[$feature])) {
                continue;
            }

            $stat = $baseline[$feature];
            $drift = match ($stat['type']) {
                'numeric' => $this->numericDrift($value, $stat),
                'categorical' => $this->categoricalDrift($value, $stat),
                default => 0,
            };

            if ($drift > $this->alertThreshold) {
                $driftReport[$feature] = [
                    'drift_score' => $drift,
                    'current_value' => $value,
                    'baseline_mean' => $stat['mean'] ?? null,
                    'baseline_std' => $stat['std'] ?? null,
                    'severity' => $drift > 0.1 ? 'high' : ($drift > 0.05 ? 'medium' : 'low'),
                ];
            }
        }

        if (!empty($driftReport)) {
            Log::channel('ml-drift')->warning('Feature drift detected', [
                'model' => $modelName,
                'drifted_features' => $driftReport,
            ]);
        }

        return $driftReport;
    }

    private function numericDrift(float $value, array $baseline): float
    {
        if ($baseline['std'] == 0) {
            return $value === $baseline['mean'] ? 0 : 1;
        }

        $zScore = abs($value - $baseline['mean']) / $baseline['std'];
        return min($zScore / 3, 1.0); // Normalize: 3+ std deviations = 1.0
    }

    private function categoricalDrift(string $value, array $baseline): float
    {
        $expectedFreq = $baseline['frequencies'][$value] ?? 0;
        $baselineTotal = array_sum($baseline['frequencies']);

        if ($baselineTotal === 0) return 1;

        $expectedProb = $expectedFreq / $baselineTotal;
        return 1 - $expectedProb;
    }

    private function getBaselineStatistics(string $modelName): array
    {
        $baseline = DB::table('feature_baselines')
            ->where('model_name', $modelName)
            ->latest('computed_at')
            ->first();

        return $baseline ? json_decode($baseline->statistics, true) : [];
    }

    public function computeBaseline(string $modelName): void
    {
        $recentFeatures = DB::table('feature_snapshots')
            ->where('model_name', $modelName)
            ->latest('snapshot_at')
            ->limit($this->windowSize)
            ->get();

        if ($recentFeatures->isEmpty()) {
            return;
        }

        $statistics = [];
        foreach ($recentFeatures as $snapshot) {
            $features = json_decode($snapshot->features, true);
            foreach ($features as $feature => $value) {
                if (!isset($statistics[$feature])) {
                    $statistics[$feature] = ['values' => [], 'type' => is_numeric($value) ? 'numeric' : 'categorical'];
                }
                $statistics[$feature]['values'][] = $value;
            }
        }

        $computed = [];
        foreach ($statistics as $feature => $info) {
            $values = $info['values'];
            if ($info['type'] === 'numeric') {
                $mean = array_sum($values) / count($values);
                $variance = array_sum(array_map(fn($v) => ($v - $mean) ** 2, $values)) / count($values);
                $computed[$feature] = [
                    'type' => 'numeric',
                    'mean' => $mean,
                    'std' => sqrt($variance),
                    'min' => min($values),
                    'max' => max($values),
                ];
            } else {
                $frequencies = array_count_values($values);
                $computed[$feature] = [
                    'type' => 'categorical',
                    'frequencies' => $frequencies,
                    'unique_count' => count($frequencies),
                ];
            }
        }

        DB::table('feature_baselines')->insert([
            'model_name' => $modelName,
            'statistics' => json_encode($computed),
            'sample_count' => count($recentFeatures),
            'computed_at' => now(),
        ]);
    }
}
```

#### 8.4 Concept Drift Detection

```php
<?php

namespace App\Services\MlOps;

use App\Models\ModelRegistry;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ConceptDriftDetector
{
    public function checkConceptDrift(string $modelName, array $predictions, array $groundTruths = []): array
    {
        if (empty($groundTruths)) {
            $groundTruths = $this->getDelayedGroundTruths($modelName, $predictions);
        }

        if (empty($groundTruths) || empty($predictions)) {
            return ['drift_detected' => false, 'reason' => 'insufficient_data'];
        }

        $correct = 0;
        $total = min(count($predictions), count($groundTruths));

        for ($i = 0; $i < $total; $i++) {
            if ($predictions[$i]['predicted_label'] === $groundTruths[$i]['actual_label']) {
                $correct++;
            }
        }

        $accuracy = $correct / max($total, 1);

        // Compare against moving window of previous accuracies
        $recentAccuracy = $this->getRecentAccuracy($modelName);

        $driftScore = $recentAccuracy ? ($recentAccuracy - $accuracy) / $recentAccuracy : 0;

        $result = [
            'drift_detected' => $driftScore > 0.1,  // 10% accuracy drop = drift
            'current_accuracy' => $accuracy,
            'baseline_accuracy' => $recentAccuracy,
            'drift_score' => $driftScore,
            'sample_size' => $total,
        ];

        if ($result['drift_detected']) {
            Log::channel('ml-drift')->warning('Concept drift detected', [
                'model' => $modelName,
                'accuracy_drop' => $driftScore,
            ]);
        }

        return $result;
    }

    private function getRecentAccuracy(string $modelName): ?float
    {
        $row = DB::table('model_performance_log')
            ->where('model_name', $modelName)
            ->orderBy('logged_at', 'desc')
            ->first();

        return $row?->accuracy;
    }

    private function getDelayedGroundTruths(string $modelName, array $predictions): array
    {
        // Fetch actual outcomes from business events
        $predictionIds = array_column($predictions, 'prediction_id');

        return DB::table('prediction_outcomes')
            ->whereIn('prediction_id', $predictionIds)
            ->select('prediction_id', 'actual_label')
            ->get()
            ->toArray();
    }
}
```

#### 8.5 Automated Retraining Triggers

```php
<?php

namespace App\Services\MlOps;

use App\Jobs\TrainModelJob;
use App\Models\ModelRegistry;
use Illuminate\Support\Facades\Log;

class AutoRetrainer
{
    public function __construct(
        private DriftDetector $driftDetector,
        private ConceptDriftDetector $conceptDriftDetector,
    ) {}

    public function evaluateAndRetrain(string $modelName): array
    {
        $model = ModelRegistry::production($modelName)->first();

        if (!$model) {
            return ['action' => 'no_production_model', 'model' => $modelName];
        }

        $actions = [];

        // Check feature drift
        $featureDrift = $this->driftDetector->checkFeatureDrift(
            $modelName,
            $this->getCurrentFeatureDistribution($modelName)
        );

        if (!empty($featureDrift)) {
            $actions[] = 'feature_drift_detected';
        }

        // Check concept drift
        $recentPredictions = $this->getRecentPredictions($modelName);
        $conceptDrift = $this->conceptDriftDetector->checkConceptDrift(
            $modelName,
            $recentPredictions
        );

        if ($conceptDrift['drift_detected']) {
            $actions[] = 'concept_drift_detected';
        }

        // Check time-based retraining window
        $daysSinceTraining = now()->diffInDays($model->trained_at);
        if ($daysSinceTraining >= 30) {
            $actions[] = 'retraining_window_exceeded';
        }

        // Check for new training data
        $newSamples = $this->countNewTrainingSamples($modelName, $model->trained_at);
        if ($newSamples > 10000) {
            $actions[] = 'sufficient_new_data';
        }

        // Decide whether to retrain
        $shouldRetrain = count($actions) >= 2
            || in_array('concept_drift_detected', $actions)
            || ($daysSinceTraining >= 30 && $newSamples > 1000);

        if ($shouldRetrain) {
            $newVersion = $this->bumpVersion($modelName);

            TrainModelJob::dispatch($modelName, $newVersion);

            Log::channel('ml-ops')->info('Auto-retraining triggered', [
                'model' => $modelName,
                'current_version' => $model->version,
                'new_version' => $newVersion,
                'reasons' => $actions,
            ]);

            return [
                'action' => 'retraining_initiated',
                'current_version' => $model->version,
                'new_version' => $newVersion,
                'reasons' => $actions,
            ];
        }

        return [
            'action' => 'no_retraining_needed',
            'reasons' => $actions,
        ];
    }

    private function bumpVersion(string $modelName): string
    {
        $latest = ModelRegistry::where('name', $modelName)
            ->latest('trained_at')
            ->first();

        if (!$latest) {
            return '1.0.0';
        }

        $parts = explode('.', $latest->version);
        $parts[count($parts) - 1] = (int) ($parts[count($parts) - 1] ?? 0) + 1;

        return implode('.', $parts);
    }

    private function getCurrentFeatureDistribution(string $modelName): array
    {
        return DB::table('feature_snapshots')
            ->where('model_name', $modelName)
            ->latest('snapshot_at')
            ->limit(1000)
            ->get()
            ->reduce(function ($carry, $snapshot) {
                $features = json_decode($snapshot->features, true) ?? [];
                foreach ($features as $key => $value) {
                    if (!isset($carry[$key])) $carry[$key] = $value;
                }
                return $carry;
            }, []);
    }

    private function getRecentPredictions(string $modelName): array
    {
        return DB::table('prediction_log')
            ->where('model_name', $modelName)
            ->latest('created_at')
            ->limit(500)
            ->get(['prediction_id', 'predicted_label'])
            ->toArray();
    }

    private function countNewTrainingSamples(string $modelName, $since): int
    {
        return DB::table('training_data')
            ->where('model_name', $modelName)
            ->where('created_at', '>', $since)
            ->count();
    }
}
```

#### 8.6 Deployment Strategies

```php
<?php

namespace App\Services\MlOps;

use App\Models\ModelRegistry;
use Illuminate\Support\Facades\Log;

class ModelDeployer
{
    /**
     * Shadow deployment: deploy the new model alongside production
     * but only log its predictions. No user impact.
     */
    public function deployShadow(ModelRegistry $newModel): void
    {
        $newModel->update(['status' => 'shadow']);

        Log::channel('ml-ops')->info('Model deployed as shadow', [
            'model' => $newModel->name,
            'version' => $newModel->version,
        ]);
    }

    /**
     * Promote shadow to canary: route 5% of traffic to the new model.
     * Monitor metrics before expanding.
     */
    public function promoteToCanary(ModelRegistry $model, int $trafficPercent = 5): void
    {
        $model->update([
            'status' => 'canary',
            'parameters' => array_merge($model->parameters ?? [], [
                'canary_traffic_percent' => $trafficPercent,
            ]),
        ]);

        Log::channel('ml-ops')->info('Model promoted to canary', [
            'model' => $model->name,
            'version' => $model->version,
            'traffic_percent' => $trafficPercent,
        ]);
    }

    /**
     * Blue-green: instant switch with immediate rollback capability.
     */
    public function blueGreenDeploy(ModelRegistry $newModel): void
    {
        $production = ModelRegistry::production($newModel->name)->first();

        // Mark the new model as the "blue" (active) deployment
        $newModel->update(['status' => 'production']);

        // The previous production becomes "green" (standby)
        if ($production) {
            $production->update(['status' => 'green']);
        }

        Log::channel('ml-ops')->info('Blue-green deployment complete', [
            'model' => $newModel->name,
            'blue_version' => $newModel->version,
            'green_version' => $production?->version,
        ]);
    }

    /**
     * Rollback: switch back to the previous version.
     */
    public function rollback(string $modelName): ?ModelRegistry
    {
        $current = ModelRegistry::production($modelName)->first();
        $previous = ModelRegistry::where('name', $modelName)
            ->whereIn('status', ['green', 'archived'])
            ->latest('trained_at')
            ->first();

        if (!$previous) {
            Log::channel('ml-ops')->warning('Rollback failed â€” no previous model', [
                'model' => $modelName,
            ]);
            return null;
        }

        if ($current) {
            $current->update(['status' => 'archived']);
        }

        $previous->update(['status' => 'production']);

        Log::channel('ml-ops')->warning('Model rolled back', [
            'model' => $modelName,
            'from_version' => $current?->version,
            'to_version' => $previous->version,
        ]);

        return $previous;
    }
}
```

#### 8.7 Monitoring Model Performance with Laravel Pulse

Create a custom Pulse recorder for ML model metrics:

```php
<?php

namespace App\Services\MlOps;

use Illuminate\Support\Facades\DB;
use Laravel\Pulse\Recorders\Concerns\Sampling;

class MlPerformanceRecorder
{
    use Sampling;

    public function record(array $prediction, array $outcome): void
    {
        if (!$this->shouldSample()) {
            return;
        }

        $correct = $prediction['predicted_label'] === ($outcome['actual_label'] ?? null) ? 1 : 0;

        DB::table('model_performance_log')->insert([
            'model_name' => $prediction['model_name'],
            'model_version' => $prediction['model_version'],
            'prediction_id' => $prediction['prediction_id'],
            'predicted_label' => $prediction['predicted_label'],
            'actual_label' => $outcome['actual_label'] ?? null,
            'confidence' => $prediction['confidence'],
            'correct' => $correct,
            'latency_ms' => $prediction['latency_ms'],
            'logged_at' => now(),
        ]);
    }

    public function computeAggregates(string $modelName, string $interval = '1 hour'): array
    {
        $since = now()->sub($interval);

        $stats = DB::table('model_performance_log')
            ->where('model_name', $modelName)
            ->where('logged_at', '>=', $since)
            ->selectRaw('
                COUNT(*) as total_predictions,
                SUM(correct) as correct_predictions,
                AVG(confidence) as avg_confidence,
                AVG(latency_ms) as avg_latency_ms,
                AVG(CASE WHEN correct = 1 THEN confidence END) as avg_confidence_when_correct,
                AVG(CASE WHEN correct = 0 THEN confidence END) as avg_confidence_when_wrong
            ')
            ->first();

        return [
            'model' => $modelName,
            'interval' => $interval,
            'total_predictions' => (int) $stats->total_predictions,
            'accuracy' => $stats->total_predictions > 0
                ? $stats->correct_predictions / $stats->total_predictions
                : 0,
            'avg_confidence' => (float) $stats->avg_confidence,
            'avg_latency_ms' => (float) $stats->avg_latency_ms,
            'calibration_error' => $this->calibrationError(
                $stats->avg_confidence_when_correct,
                $stats->avg_confidence_when_wrong
            ),
        ];
    }

    private function calibrationError(?float $correctConf, ?float $wrongConf): float
    {
        if ($correctConf === null || $wrongConf === null) {
            return 0;
        }
        // Well-calibrated: high confidence when correct, low when wrong
        return $correctConf - $wrongConf;
    }
}
```

#### 8.8 Metric Configuration for Laravel Pulse

```php
<?php

// config/pulse.php â€” ML-specific Pulse configuration

return [
    'recorders' => [
        // ... existing recorders ...

        \App\Services\MlOps\MlPerformanceRecorder::class => [
            'enabled' => env('PULSE_ML_RECORDER_ENABLED', true),
            'sample_rate' => env('PULSE_ML_SAMPLE_RATE', 0.1),
        ],
    ],
];
```

Custom Pulse card for the dashboard:

```blade
{{-- resources/views/vendor/pulse/cards/ml-model-performance.blade.php --}}
<x-pulse::card :cols="$cols" :rows="$rows" :class="$class">
    <x-pulse::card-header name="ML Model Performance">
        <x-slot:icon>
            <x-pulse::icons.box />
        </x-slot:icon>
    </x-pulse::card-header>

    <x-pulse::scroll>
        <div class="grid grid-cols-2 gap-4 p-4">
            @foreach($models as $model)
                <div class="rounded-lg border p-3">
                    <div class="font-medium text-sm">{{ $model['name'] }} v{{ $model['version'] }}</div>
                    <div class="mt-2 space-y-1 text-xs">
                        <div class="flex justify-between">
                            <span>Accuracy</span>
                            <span class="font-mono">{{ number_format($model['accuracy'] * 100, 1) }}%</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Avg Latency</span>
                            <span class="font-mono">{{ number_format($model['avg_latency_ms'], 1) }}ms</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Predictions (1h)</span>
                            <span class="font-mono">{{ number_format($model['total_predictions']) }}</span>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </x-pulse::scroll>
</x-pulse::card>
```

---

## Summary

This chapter introduced the complete pipeline for integrating machine learning into Laravel applications, spanning both classical ML algorithms and modern LLM-based AI.

**Machine Learning Fundamentals**: We established the three paradigms â€” supervised learning (regression and classification with labeled data), unsupervised learning (clustering and association discovery without labels), and reinforcement learning (agent-environment interaction). The training/validation/test split, bias-variance tradeoff, and evaluation metrics (accuracy, precision, recall, F1, RMSE, MAE, RÂ²) form the theoretical foundation for every ML project.

**Classical ML with PHP-ML**: PHP-ML provides accessible implementations of the most important algorithms â€” LeastSquares regression, Naive Bayes classification, SVM with configurable kernels, K-Nearest Neighbors, K-Means and DBSCAN clustering, and Apriori association learning. Dataset management with CSV loading, random and stratified splitting, k-fold cross-validation, and model persistence via the ModelManager complete the workflow.

**Advanced ML with Rubix ML**: Rubix ML introduces pipelines, transformers (StandardScaler, MinMaxScaler, OneHotEncoder, MissingDataImputer), and more sophisticated learners including LogisticRegression with Adam optimization, MultilayerPerceptron with configurable hidden layers and dropout regularization, Random Forest with feature importance scoring, and anomaly detectors (IsolationForest, LocalOutlierFactor). RBX serialization provides production-grade model persistence.

**Natural Language Processing**: PHP-ML's tokenizers (Whitespace, Word, N-Gram, SkipGram), stop word removal, TF-IDF vectorization, and the Porter Stemmer enable building text classification and sentiment analysis pipelines entirely in PHP.

**Laravel ML Workflow**: Artisan commands encapsulate training pipelines. The scheduler enables periodic retraining. A model registry database table tracks versioning. A/B testing splits traffic between model versions. Feature stores in Redis and MySQL provide low-latency feature access.

**Hybrid AI Integration**: Classical ML models exposed as Laravel AI SDK tools give LLM agents direct access to structured predictions. The agent can call a churn model, receive probability scores, and synthesize natural-language explanations with business recommendations â€” combining the reliability of statistical models with the reasoning flexibility of large language models.

**Feature Engineering**: Complete data pipelines for collection, cleaning (null handling, IQR outlier removal, capping), transformation (min-max scaling, standard scaling, log transform, one-hot encoding, interaction terms), feature selection (correlation, variance, mutual information), and batch queue processing prepare production data for training.

**MLOps**: Experiment tracking logs every training run with parameters and metrics. The model registry manages staging, production, shadow, canary, and green versions. Feature drift and concept drift detectors trigger automatic retraining. Deployment strategies (shadow â†’ canary â†’ blue-green) with immediate rollback capability ensure safe model updates.

---

## Exercises

### Review Questions

1. What is the difference between supervised and unsupervised learning? Give two examples of each from a Laravel e-commerce application.

2. Explain the bias-variance tradeoff. How does increasing the `cost` parameter in an SVM affect bias and variance?

3. Why is it essential to keep the test set separate from the training set? What happens if you use test set performance to tune hyperparameters?

4. Compare PHP-ML's Naive Bayes with Rubix ML's LogisticRegression. When would you choose one over the other?

5. What is the purpose of a pipeline in Rubix ML? How does it simplify the training and prediction workflow?

6. Explain the difference between TF-IDF and simple token count vectorization. Why does TF-IDF often produce better classification results?

7. How would you structure a Laravel Artisan command that trains a model weekly and logs results to a database table?

8. Describe the flow of a hybrid prediction endpoint that combines a Rubix ML classifier with an LLM agent explanation. What are the advantages of this approach?

9. What is feature drift and how does it differ from concept drift? Give a concrete example of each.

10. Compare shadow deployment, canary deployment, and blue-green deployment. When would you use each strategy?

### Application Problems

**Problem 1: Sentiment Analysis Pipeline**

Build a complete sentiment analysis system using PHP-ML that:
- Loads a CSV dataset with two columns: `text` and `label`
- Tokenizes text, removes stop words, and applies TF-IDF transformation
- Trains a Naive Bayes classifier
- Evaluates with a confusion matrix and F1 score
- Persists the trained model and pipeline state
- Provides a Laravel Artisan command for training and a controller method for prediction

**Problem 2: Customer Churn Predictor with Rubix ML**

Create a customer churn prediction service using Rubix ML that:
- Defines a feature set (total orders, avg order value, days since last order, negative review ratio, account age, subscription status)
- Trains a LogisticRegression model with StandardScaler in a pipeline
- Uses 5-fold cross-validation and reports mean accuracy and standard deviation
- Saves the model in RBX format
- Exposes the model as a Laravel AI SDK tool so an agent can predict churn and explain the result
- Implements feature drift monitoring on the model's input distribution

**Problem 3: Product Recommendation Engine**

Implement a hybrid recommendation engine that:
- Uses Apriori association learning (PHP-ML) to find products frequently bought together
- Stores association rules in the database and refreshes them daily via the Laravel scheduler
- Creates a Laravel AI SDK tool that retrieves association rules for a given cart
- Builds an agent that takes cart contents, fetches association rules, and produces ranked natural-language recommendations
- Logs recommendation performance (click-through rate, conversion rate) for MLOps monitoring

**Problem 4: Model Registry and Deployment**

Implement a complete model lifecycle management system:
- Create the `model_registry` migration and model
- Build an Artisan command `ml:register` that saves a trained model and registers it
- Build an Artisan command `ml:promote` that moves a model from staging to production
- Implement a `ModelDeployer` service with shadow, canary (5% traffic), and blue-green strategies
- Create a rollback mechanism that switches back to the previous production model
- Add Pulse monitoring cards showing accuracy, latency, and prediction volume per model

### Challenge Problems

**Challenge 1: Multi-Model Fraud Detection System**

Build a fraud detection system that combines multiple ML models with LLM reasoning:
- Train three models: an IsolationForest anomaly detector (Rubix ML), a LogisticRegression classifier (Rubix ML), and an SVM classifier (PHP-ML)
- Create a Laravel AI SDK tool that runs all three models on an order and returns their predictions
- Build an agent that receives the three predictions, resolves conflicts, and produces a final fraud decision with explanation
- Implement a human-in-the-loop pattern: low-confidence predictions trigger a notification to the fraud team
- Track model performance (precision, recall, false positive rate) per model and overall system accuracy
- Implement automated retraining when fraud patterns shift (concept drift)

**Challenge 2: Real-Time Feature Engineering Pipeline**

Design a real-time feature engineering system:
- Use Laravel queues to process feature computation asynchronously
- Implement a Redis-backed feature store with TTL-based cache invalidation
- Build a CDC (Change Data Capture) pattern using Eloquent model events to trigger feature recomputation when user data changes
- Create a batch feature engineering job that recomputes features for all active users nightly
- Implement feature validation (null checks, range checks, distribution checks) before features enter the store
- Add a feature importance analysis that runs weekly and recommends feature removal or addition

**Challenge 3: Self-Optimizing Prediction System**

Build a system that automatically improves its own predictions:
- Two models serve predictions simultaneously (A/B test with 50/50 split)
- An `MlPerformanceRecorder` logs every prediction and its eventual outcome
- A weekly evaluation job compares the models on accuracy, calibration (confidence calibration curve), latency, and coverage
- The better-performing model automatically gets 60% traffic next week; the underperformer gets 40%
- If a model's accuracy drops more than 5% below its baseline, trigger an alert and rollback
- If both models degrade simultaneously, suspect data or concept drift and alert the ML team
- Generate a weekly report with model comparison charts and drift analysis

**Challenge 4: LLM-Augmented Recommendation with Feedback Loop**

Create a recommendation system that learns from user feedback:
- Train a PHP-ML K-Means clustering model on user purchase history to create customer segments
- Train a Rubix ML Random Forest to predict product preferences within each segment
- Create an LLM agent that receives customer segment, predicted preferences, and real-time context (season, inventory, promotions) to generate personalized recommendations
- Track user engagement with each recommendation (click, add-to-cart, purchase, ignore)
- Feed engagement data back as training data for the next model retraining cycle
- Implement a bandit algorithm: the system explores new recommendations 10% of the time and exploits known preferences 90% of the time
- Monitor for recommendation feedback loops (the system only recommends what users have already bought) and apply exploration noise when detected