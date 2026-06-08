**DAY 35 QUICK REFERENCE — ML & AI CHEAT SHEETS**

- Scaling: `StandardScaler` (z-score), `MinMaxScaler` (0-1)
- Metrics: Accuracy, Precision, Recall, F1, ROC-AUC, PR-AUC, RMSE, MAE
- Regularization: L1 (sparse), L2 (weight decay), Dropout (DL)
- Initialization: Xavier/Glorot, He for ReLU
- Activations: ReLU (hidden), Sigmoid (binary), Softmax (multi-class)
- Optimizers: SGD, SGD+momentum, Adam
- Ensemble: Bagging (Random Forest), Boosting (Gradient Boosting)
- Feature selection: PCA, recursive feature elimination, mutual information
- Time-series: use walk-forward CV, evaluate multiple horizons
- NLP: TF-IDF -> simple classifier; word embeddings -> semantic features
- Anomaly detection: Isolation Forest scores, autoencoder reconstruction errors
- Model deployment: containerize, version model, use health checks and canary traffic

Quick tips:
- Use stratified splits when classes are imbalanced
- Use early stopping with a validation set
- Monitor feature drift and trigger retraining
- For reproducibility: fix seeds and record data versions
