# Chapter 2: Linear Regression

---

## Learning Objectives

- Derive the Simple Linear Regression model and its parameters
- Explain the concept of the Cost Function (Mean Squared Error)
- Implement and interpret Gradient Descent for parameter optimization
- Extend linear regression to multiple features (Multiple Linear Regression)

---

## Theory

### Simple Linear Regression
Simple Linear Regression is a statistical method that allows us to summarize and study relationships between two continuous (quantitative) variables: one variable ($x$), called the predictor or independent variable, and the other ($y$), called the response or dependent variable.

The model is defined by the linear equation:
$$y = w_0 + w_1x + \epsilon$$
Where:
- $y$ is the predicted output.
- $w_0$ is the y-intercept (bias term).
- $w_1$ is the slope (weight term).
- $\epsilon$ is the random error.

Our goal is to find the "best" values for $w_0$ and $w_1$ that minimize the difference between our predictions and the actual data points.

### The Cost Function: Mean Squared Error (MSE)
To measure how well our model fits the data, we use a cost function. For linear regression, the most common is the Mean Squared Error (MSE):
$$J(w_0, w_1) = \frac{1}{2n} \sum_{i=1}^{n} (h_w(x^{(i)}) - y^{(i)})^2$$
Where $h_w(x) = w_0 + w_1x$ is the hypothesis function. Minimizing this function leads to the "line of best fit."

### Optimization: Gradient Descent
Gradient Descent is an iterative optimization algorithm used to find the minimum of the cost function. We update the weights in the direction of the negative gradient:
$$w_j := w_j - \alpha \frac{\partial}{\partial w_j} J(w_0, w_1)$$
Where $\alpha$ is the learning rate. A large $\alpha$ may overshoot the minimum, while a small $\alpha$ will take too long to converge.

![Gradient Descent Optimization](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/machine-learning/ch02-gradient-descent.png)

### Multiple Linear Regression
When we have more than one predictor variable, the model becomes:
$$h_w(x) = w_0 + w_1x_1 + w_2x_2 + \dots + w_dx_d$$
In vector notation:
$$h_w(x) = \mathbf{w}^T\mathbf{x}$$
Where $\mathbf{w}$ and $\mathbf{x}$ include the bias term $w_0$ (with $x_0 = 1$).

---

## Examples

### Example 1: Predicting House Prices
Suppose we want to predict house prices based on their size in square feet.
- **Data**: $(1500, 300000), (2000, 400000), (2500, 500000)$
- **Model**: $Price = w_0 + w_1(Size)$
- **Step**: Using Ordinary Least Squares or Gradient Descent, we find $w_0 = 0$ and $w_1 = 200$.
- **Prediction**: For a house of 1800 sq ft, $Price = 0 + 200(1800) = 360,000$.

### Example 2: Multiple Features for Car Fuel Efficiency
Predicting MPG based on horsepower, weight, and year.
```python
import numpy as np
from sklearn.linear_model import LinearRegression

# Features: [Horsepower, Weight]
X = np.array([[130, 3500], [165, 4200], [150, 3800]])
y = np.array([18, 15, 16])

model = LinearRegression().fit(X, y)
print(f"Coefficients: {model.coef_}")
print(f"Intercept: {model.intercept_}")
```
**Output**: Shows how each feature contributes (positively or negatively) to the fuel efficiency.

---

## Summary

- Linear regression models the relationship between a dependent variable and one or more independent variables.
- The Mean Squared Error (MSE) is the standard metric used to evaluate the fit of the regression line.
- Gradient Descent is a fundamental algorithm for optimizing the weights by following the steepest descent of the cost function.
- Multiple Linear Regression handles complex datasets by incorporating multiple predictors into a single linear equation.
- Scaling features is often necessary for Gradient Descent to converge efficiently.

---

## Exercises

### Review Questions
1. Why do we square the errors in the MSE cost function instead of using absolute values?
2. What happens to the model if the learning rate $\alpha$ is set too high?
3. What is the difference between a parameter and a hyperparameter in the context of Gradient Descent?
4. Explain the geometric interpretation of a multiple linear regression model with two features.

### Application Problems
1. Given $w_0 = 5, w_1 = 2$, calculate the MSE for the points: $(1, 8), (2, 10), (3, 12)$.
2. Manually perform one step of Gradient Descent for $w_1$ given $x=2, y=6$, current $w_1=2$, and $\alpha=0.1$. Use the simplified cost $J = (w_1x - y)^2$.

### Challenge Problem
1. Derive the Normal Equation $\mathbf{w} = (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{y}$. Under what conditions does the matrix $\mathbf{X}^T\mathbf{X}$ become non-invertible?
