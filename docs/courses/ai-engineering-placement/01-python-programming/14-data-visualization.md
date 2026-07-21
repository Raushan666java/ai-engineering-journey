# Data Visualization — Matplotlib, Seaborn, Plotly, Dashboards

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Create publication-quality plots with Matplotlib's pyplot API |
| LO2 | Use Seaborn for statistical visualizations with attractive defaults |
| LO3 | Build interactive visualizations with Plotly and Plotly Express |
| LO4 | Create multi-plot figures with subplots and custom layouts |
| LO5 | Customize plot aesthetics: colors, styles, annotations, themes |
| LO6 | Design simple dashboards for data exploration and communication |

## Introduction

Understanding data visualization is essential for AI engineers building production systems. This chapter covers the core principles, practical implementations, and interview preparation for mastering data visualization.

## Prerequisites

- Basic programming knowledge
- Understanding of data structures


## Theory

Understanding data visualization is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how data visualization works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind data visualization
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 14.1 | Matplotlib Pyplot | figure, axes, plot, scatter, bar, hist |
| 14.2 | Customization | colors, styles, annotations, legends, spines |
| 14.3 | Subplots | subplots, GridSpec, inset_axes |
| 14.4 | Seaborn | relplot, displot, catplot, heatmap, pairplot |
| 14.5 | Plotly Interactive | plotly.express, go.Figure, animations |
| 14.6 | Dashboards | ipywidgets, panel, dashboard layout design |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Data Visualization] --> B[Matplotlib]
    A --> C[Seaborn]
    A --> D[Plotly]
    A --> E[Dashboards]
    B --> F[pyplot API]
    B --> G[Customization]
    B --> H[Subplots]
    C --> I[Statistical Plots]
    C --> J[Heatmaps / Pairplots]
    D --> K[Interactive Charts]
    D --> L[Animations]
    E --> M[ipywidgets]
    E --> N[Panel Dashboards]
```text

## 14.1 Matplotlib Pyplot

Matplotlib is the foundational visualization library in Python. The pyplot API provides a MATLAB-like interface for creating figures.

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(8, 4))
plt.plot(x, y, label="sin(x)", color="steelblue", linewidth=2)
plt.plot(x, np.cos(x), label="cos(x)", color="coral", linestyle="--")
plt.xlabel("X axis")
plt.ylabel("Y axis")
plt.title("Trigonometric Functions")
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()
```text

**Common plot types**:

```python

## Scatter plot
plt.figure(figsize=(6, 4))
x = np.random.randn(100)
y = np.random.randn(100)
colors = np.random.randn(100)
sizes = np.random.randint(20, 200, 100)
plt.scatter(x, y, c=colors, s=sizes, alpha=0.6, cmap="viridis")
plt.colorbar(label="Value")
plt.show()

## Bar chart
categories = ["A", "B", "C", "D", "E"]
values = [23, 45, 12, 67, 34]
plt.bar(categories, values, color="skyblue", edgecolor="navy")
plt.title("Bar Chart Example")
plt.show()

## Histogram
data = np.random.randn(1000)
plt.hist(data, bins=30, density=True, alpha=0.7, color="steelblue")
plt.xlabel("Value")
plt.ylabel("Density")
plt.title("Histogram with Density")
plt.show()

## Box plot
groups = [np.random.randn(100) for _ in range(4)]
plt.boxplot(groups, labels=["A", "B", "C", "D"])
plt.title("Box Plot Comparison")
plt.show()
```text

**Saving figures** to disk:

```python
plt.savefig("plot.png", dpi=300, bbox_inches="tight")
plt.savefig("plot.pdf", format="pdf")
plt.savefig("plot.svg", format="svg")
```text

**The Figure and Axes API** gives more control:

```python
fig, ax = plt.subplots(figsize=(8, 4))
ax.plot(x, y, label="sin(x)")
ax.plot(x, np.cos(x), label="cos(x)")
ax.set_xlabel("X")
ax.set_ylabel("Y")
ax.set_title("Using Axes API")
ax.legend()
ax.grid(True)
plt.show()
```text

## 14.2 Customization

Fine-tune every element of your plots for publication quality.

**Colors and colormaps**:

```python

## Named colors and hex codes
plt.plot(x, y, color="tab:blue")
plt.plot(x, y, color="#2E86AB")
plt.plot(x, y, color=(0.2, 0.4, 0.6))

## Colormaps
cmap = plt.cm.viridis
cmap = plt.cm.plasma
cmap = plt.cm.coolwarm
cmap = plt.cm.RdYlBu
```text

**Line and marker styles**:

```python
styles = [
    {"ls": "-", "marker": "o", "label": "solid"},
    {"ls": "--", "marker": "s", "label": "dashed"},
    {"ls": "-.", "marker": "^", "label": "dash-dot"},
    {"ls": ":", "marker": "d", "label": "dotted"},
]
for style in styles:
    plt.plot(x, y, **style)
```text

**Annotations and text**:

```python
plt.figure(figsize=(8, 4))
plt.plot(x, y, color="steelblue", linewidth=2)

plt.annotate(
    "Peak",
    xy=(np.pi / 2, 1),
    xytext=(np.pi / 2 + 1, 1.5),
    arrowprops=dict(arrowstyle="->", color="red", linewidth=2),
    fontsize=12, fontweight="bold"
)

plt.text(0, -1.5, "y = sin(x)", fontsize=10, style="italic")

## Highlight regions
plt.axvspan(2, 4, alpha=0.2, color="yellow")
plt.axhline(0, color="black", linewidth=0.5)
plt.axvline(np.pi, color="red", linestyle="--", alpha=0.5)

## Reference lines
plt.axhline(y=0.5, xmin=0.25, xmax=0.75, color="green", linestyle=":")
```text

**Spine and tick customization**:

```python
fig, ax = plt.subplots()
ax.plot(x, y)

## Remove top and right spines
ax.spines["top"].set_visible(False)
ax.spines["right"].set_visible(False)

## Move bottom spine
ax.spines["bottom"].set_position(("data", 0))

## Custom ticks
ax.set_xticks([0, np.pi / 2, np.pi, 3 * np.pi / 2, 2 * np.pi])
ax.set_xticklabels(["0", r"$\pi/2$", r"$\pi$", r"$3\pi/2$", r"$2\pi$"])

## Rotate tick labels
plt.xticks(rotation=45)
```text

**Style sheets** provide consistent theming:

```python
print(plt.style.available)

## ['ggplot', 'seaborn-v0_8', 'fivethirtyeight', 'dark_background', ...]

plt.style.use("seaborn-v0_8")

## Or use context manager for temporary style
with plt.style.context("ggplot"):
    plt.plot(x, y)
```text

**Customizing legends**:

```python
plt.legend(
    loc="upper right",
    frameon=True,
    fancybox=True,
    shadow=True,
    fontsize=10,
    title="Legend Title"
)
```text

## 14.3 Subplots

Multiple plots in a single figure for comparative analysis.

**Basic subplots**:

```python
fig, axes = plt.subplots(2, 3, figsize=(12, 6))
axes[0, 0].plot(x, y)
axes[0, 1].scatter(np.random.randn(50), np.random.randn(50))
axes[0, 2].hist(np.random.randn(100), bins=20)
axes[1, 0].bar(["A", "B", "C"], [10, 20, 15])
axes[1, 1].boxplot([np.random.randn(50) for _ in range(3)])
axes[1, 2].imshow(np.random.randn(10, 10), cmap="viridis")

plt.tight_layout()
plt.show()
```text

**GridSpec for irregular layouts**:

```python
from matplotlib.gridspec import GridSpec

fig = plt.figure(figsize=(10, 8))
gs = GridSpec(3, 3, figure=fig)

ax1 = fig.add_subplot(gs[0, :])
ax2 = fig.add_subplot(gs[1, :-1])
ax3 = fig.add_subplot(gs[1:, -1])
ax4 = fig.add_subplot(gs[2, 0])
ax5 = fig.add_subplot(gs[2, 1])

ax1.plot(x, y)
ax2.scatter(np.random.randn(50), np.random.randn(50))
ax3.hist(np.random.randn(100), bins=20, orientation="horizontal")
ax4.bar(["A", "B"], [10, 20])
ax5.plot(np.sin(x), np.cos(x))

plt.tight_layout()
plt.show()
```text

**Inset axes** for zoom-in details:

```python
fig, ax = plt.subplots(figsize=(8, 4))
ax.plot(x, y)

inset = ax.inset_axes([0.6, 0.6, 0.3, 0.3])
inset.plot(x[:20], y[:20], color="red", linewidth=2)
inset.set_title("Zoom", fontsize=8)
```text

**Shared axes** for aligned subplots:

```python
fig, axes = plt.subplots(2, 1, sharex=True, sharey=True, figsize=(8, 5))
axes[0].plot(x, np.sin(x))
axes[0].set_title("sin(x)")
axes[1].plot(x, np.cos(x))
axes[1].set_title("cos(x)")
plt.xlabel("X (shared)")
```text

**Twin axes** for dual y-axes:

```python
fig, ax1 = plt.subplots()
ax1.plot(x, np.sin(x), color="steelblue")
ax1.set_ylabel("sin(x)", color="steelblue")

ax2 = ax1.twinx()
ax2.plot(x, np.exp(x / 5), color="coral")
ax2.set_ylabel("exp(x/5)", color="coral")
```text

## 14.4 Seaborn

Seaborn provides high-level statistical visualizations with attractive defaults and Pandas integration.

```python
import seaborn as sns
import pandas as pd

tips = sns.load_dataset("tips")
```text

**Relational plots** show relationships between variables:

```python

## Scatter with hue and style
sns.scatterplot(
    data=tips, x="total_bill", y="tip",
    hue="time", style="sex", size="size",
    palette="deep"
)

## relplot with facets
sns.relplot(
    data=tips, x="total_bill", y="tip",
    col="time", hue="sex", kind="scatter"
)

## Line plot with confidence interval
sns.lineplot(
    data=tips, x="size", y="tip",
    hue="time", errorbar=("ci", 95)
)
```text

**Distribution plots**:

```python

## Histogram with KDE
sns.histplot(tips["tip"], bins=20, kde=True)

## KDE plot
sns.kdeplot(tips["tip"], fill=True, alpha=0.5)

## Displot with facets
sns.displot(
    data=tips, x="tip",
    col="time", row="sex",
    kind="hist", bins=15
)

## ECDF plot
sns.ecdfplot(tips["tip"])
```text

**Categorical plots**:

```python

## Box plot
sns.boxplot(data=tips, x="day", y="total_bill", hue="sex")

## Violin plot
sns.violinplot(data=tips, x="day", y="total_bill", hue="sex", split=True)

## Strip / swarm plot
sns.stripplot(data=tips, x="day", y="total_bill", jitter=True)
sns.swarmplot(data=tips, x="day", y="total_bill", color="black")

## Bar plot with error bars
sns.barplot(data=tips, x="day", y="total_bill", hue="sex")

## Count plot
sns.countplot(data=tips, x="day", hue="sex")
```text

**Heatmap and correlation**:

```python
corr = tips.select_dtypes("number").corr()

sns.heatmap(
    corr, annot=True, cmap="coolwarm", center=0,
    square=True, fmt=".2f", linewidths=0.5
)

## Cluster heatmap with dendrograms
sns.clustermap(corr, annot=True, cmap="coolwarm")
```text

**Pairplot and jointplot** for multivariate exploration:

```python
sns.pairplot(
    tips, hue="time",
    diag_kind="kde",
    corner=True
)

sns.jointplot(
    data=tips, x="total_bill", y="tip",
    kind="hex"
)

sns.jointplot(
    data=tips, x="total_bill", y="tip",
    kind="reg"
)
```text

**FacetGrid** for custom multi-plot layouts:

```python
g = sns.FacetGrid(tips, col="time", row="sex", margin_titles=True)
g.map(sns.scatterplot, "total_bill", "tip", alpha=0.6)
g.add_legend()
```text

**Regression plots**:

```python
sns.regplot(data=tips, x="total_bill", y="tip", ci=95)
sns.lmplot(data=tips, x="total_bill", y="tip", hue="sex", col="time")
```text

## 14.5 Plotly Interactive

Plotly creates interactive, web-based visualizations that support hover, zoom, and pan.

```python
import plotly.express as px
import plotly.graph_objects as go

## Plotly Express (high-level API)
df = px.data.iris()
fig = px.scatter(
    df, x="sepal_width", y="sepal_length",
    color="species", size="petal_length",
    hover_data=["petal_width"],
    title="Iris Dataset"
)
fig.show()
```text

**Chart types**:

```python

## Line chart
fig = px.line(
    x=pd.date_range("2024-01-01", periods=100),
    y=np.random.randn(100).cumsum(),
    title="Random Walk"
)

## Bar chart
fig = px.bar(
    tips, x="day", y="total_bill",
    color="sex", barmode="group",
    title="Average Bill by Day"
)

## Histogram
fig = px.histogram(tips, x="tip", nbins=20, color="time")

## Box plot
fig = px.box(tips, x="day", y="total_bill", color="sex")

## Heatmap
fig = px.imshow(
    corr.values, text_auto=".2f",
    x=corr.columns, y=corr.columns,
    color_continuous_scale="RdBu_r"
)
```text

**Graph Objects** (low-level API) for full control:

```python
fig = go.Figure()

fig.add_trace(go.Scatter(
    x=x, y=np.sin(x),
    mode="lines+markers",
    name="sin(x)",
    line=dict(color="steelblue", width=3),
    marker=dict(size=6)
))

fig.add_trace(go.Bar(
    x=categories, y=values,
    name="Values",
    marker_color="skyblue"
))

fig.update_layout(
    title="Custom Figure",
    xaxis_title="X",
    yaxis_title="Y",
    template="plotly_dark",
    hovermode="x unified"
)

fig.show()
```text

**Animation**:

```python
gapminder = px.data.gapminder()
fig = px.scatter(
    gapminder, x="gdpPercap", y="lifeExp",
    size="pop", color="continent",
    animation_frame="year",
    animation_group="country",
    log_x=True, size_max=60,
    title="Gapminder Over Time"
)
fig.show()

## Animated line
px.line(
    gapminder[gapminder["country"] == "India"],
    x="year", y="lifeExp",
    animation_frame="year",
    title="India Life Expectancy"
)
```text

**3D plots and faceted layouts**:

```python

## 3D scatter
fig = px.scatter_3d(
    df, x="sepal_width", y="sepal_length", z="petal_length",
    color="species", size="petal_width"
)

## Faceted histogram
fig = px.histogram(
    tips, x="tip", facet_col="time",
    facet_row="sex", nbins=15
)
```text

**Subplots in Plotly**:

```python
from plotly.subplots import make_subplots

fig = make_subplots(rows=2, cols=2, subplot_titles=["Scatter", "Bar", "Hist", "Box"])
fig.add_trace(go.Scatter(x=x, y=np.sin(x), mode="lines"), row=1, col=1)
fig.add_trace(go.Bar(x=categories, y=values), row=1, col=2)
fig.add_trace(go.Histogram(x=np.random.randn(200)), row=2, col=1)
fig.add_trace(go.Box(y=np.random.randn(200)), row=2, col=2)
fig.update_layout(height=600, showlegend=False)
fig.show()
```text

## 14.6 Dashboards

Combine visualizations into interactive dashboards for data exploration.

**ipywidgets for interactive controls**:

```python
import ipywidgets as widgets
from IPython.display import display

@widgets.interact(
    x_column=tips.select_dtypes("number").columns,
    y_column=tips.select_dtypes("number").columns,
    color=tips.columns.tolist()
)
def interactive_plot(x_column, y_column, color):
    fig, ax = plt.subplots(figsize=(8, 5))
    for val in tips[color].unique():
        subset = tips[tips[color] == val]
        ax.scatter(subset[x_column], subset[y_column],
                   label=val, alpha=0.6)
    ax.set_xlabel(x_column)
    ax.set_ylabel(y_column)
    ax.set_title(f"{y_column} vs {x_column}")
    ax.legend()
    plt.show()
```text

**Panel dashboard** for more complex layouts:

```python
import panel as pn
import holoviews as hv

pn.extension()

## Widgets
x_select = pn.widgets.Select(
    name="X axis",
    options=tips.select_dtypes("number").columns.tolist()
)
y_select = pn.widgets.Select(
    name="Y axis",
    options=tips.select_dtypes("number").columns.tolist(),
    value="tip"
)
color_select = pn.widgets.Select(
    name="Color",
    options=["sex", "time", "day"]
)

## Reactive plot
@pn.depends(x_select, y_select, color_select)
def scatter_plot(x, y, color):
    return tips.hvplot.scatter(x=x, y=y, by=color,
                                width=600, height=400)

dashboard = pn.Column(
    pn.Row(x_select, y_select, color_select),
    scatter_plot
)
dashboard.servable()
```text

**Matplotlib-based dashboard with ipywidgets**:

```python
from ipywidgets import VBox, HBox

day_selector = widgets.SelectMultiple(
    options=tips["day"].unique().tolist(),
    value=["Sun", "Sat"],
    description="Days"
)

sex_selector = widgets.ToggleButtons(
    options=["All", "Male", "Female"],
    value="All"
)

@widgets.interact(
    days=widgets.SelectMultiple(
        options=tips["day"].unique().tolist(),
        value=tips["day"].unique().tolist()
    ),
    sex=widgets.ToggleButtons(
        options=["All", "Male", "Female"]
    )
)
def dashboard(days, sex):
    filtered = tips[tips["day"].isin(days)]
    if sex != "All":
        filtered = filtered[filtered["sex"] == sex.lower()]

    fig, axes = plt.subplots(1, 3, figsize=(14, 4))

    axes[0].scatter(filtered["total_bill"], filtered["tip"], alpha=0.6)
    axes[0].set_xlabel("Total Bill")
    axes[0].set_ylabel("Tip")
    axes[0].set_title("Tips vs Total Bill")

    axes[1].hist(filtered["total_bill"], bins=15, color="skyblue", edgecolor="white")
    axes[1].set_xlabel("Total Bill")
    axes[1].set_ylabel("Frequency")
    axes[1].set_title("Bill Distribution")

    filtered.boxplot(column="tip", by="day", ax=axes[2])
    axes[2].set_title("Tips by Day")
    axes[2].set_xlabel("Day")

    plt.tight_layout()
    plt.show()
```text

**Voilà** converts notebooks to standalone dashboards:

```bash
voila dashboard.ipynb --port 8866
```text

## TypeScript Parallel

```typescript
// Simple chart renderer using HTML Canvas
function renderLineChart(
    canvasId: string,
    data: { x: number[]; y: number[] },
    options: { color?: string; title?: string } = {}
) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    const { width, height } = canvas;
    const padding = 40;

    ctx.clearRect(0, 0, width, height);

    // Scale
    const xMin = Math.min(...data.x);
    const xMax = Math.max(...data.x);
    const yMin = Math.min(...data.y);
    const yMax = Math.max(...data.y);

    // Draw axes
    ctx.strokeStyle = "#333";
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Draw line
    ctx.strokeStyle = options.color || "steelblue";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < data.x.length; i++) {
        const px = padding + (data.x[i] - xMin) / (xMax - xMin) * (width - 2 * padding);
        const py = height - padding - (data.y[i] - yMin) / (yMax - yMin) * (height - 2 * padding);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.stroke();
}

// Bar chart
function renderBarChart(
    canvasId: string,
    categories: string[],
    values: number[]
) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    const { width, height } = canvas;
    const padding = 40;
    const barWidth = (width - 2 * padding) / categories.length - 5;

    const maxVal = Math.max(...values);
    ctx.clearRect(0, 0, width, height);

    categories.forEach((cat, i) => {
        const x = padding + i * (barWidth + 5);
        const barHeight = (values[i] / maxVal) * (height - 2 * padding);
        const y = height - padding - barHeight;

        ctx.fillStyle = "skyblue";
        ctx.fillRect(x, y, barWidth, barHeight);
        ctx.strokeStyle = "navy";
        ctx.strokeRect(x, y, barWidth, barHeight);

        ctx.fillStyle = "#333";
        ctx.textAlign = "center";
        ctx.fillText(cat, x + barWidth / 2, height - padding + 15);
    });
}
```text

## Summary

- Matplotlib's pyplot API provides a MATLAB-like interface for creating static plots
- The Figure + Axes API gives finer control over plot elements and layout
- Colors, line styles, annotations, and style sheets customize plot appearance
- subplots(), GridSpec, and inset_axes create complex multi-plot layouts
- Seaborn offers high-level statistical visualizations with Pandas integration
- Pairplot, heatmap, and FacetGrid enable multivariate data exploration
- Plotly Express creates interactive web-based visualizations with minimal code
- Plotly Graph Objects provide full control over interactive chart properties
- ipywidgets and Panel enable interactive dashboard creation from notebooks
- Voilà converts Jupyter notebooks into standalone dashboard applications

## Practical Takeaways

| Scenario | Use | Avoid |
|----------|-----|-------|
| Quick exploration | Seaborn pairplot / displot | Manual subplot configuration |
| Publication figure | Matplotlib with Axes API | Default styles and colors |
| Interactive report | Plotly Express | Static Matplotlib images |
| Statistical relationships | Seaborn regplot / lmplot | Manual regression plotting |
| Multi-plot comparison | GridSpec or FacetGrid | Overlapping subplot axes |
| Time series | Plotly line with hover | Static line plots |
| Correlation analysis | Seaborn heatmap | Manual colored tables |
| Dashboard | Panel + hvplot | Heavy JavaScript frameworks |
| Large datasets | Plotly with datashader | Plotting 1M+ raw points |

## Interview Q&A

<details class="tp-qa-card" data-qid="p02-s14-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: Difference between pyplot and Axes API?</summary>
  <div class="tp-qa-answer"><p>pyplot uses a global state machine (plt.plot(), plt.xlabel()) and is convenient for quick plots. The Axes API (fig, ax = plt.subplots(); ax.plot()) provides object-oriented control over individual subplots, enabling precise customization, reusable code, and complex layouts.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s14-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: When to use Seaborn vs Matplotlib?</summary>
  <div class="tp-qa-answer"><p>Use Seaborn for statistical visualizations (distributions, regressions, categorical data) with minimal code and attractive defaults. Use Matplotlib for fine-grained control over every plot element, custom layouts, and publication-quality figures. They work well together: Seaborn plots can be customized with the Matplotlib Axes API.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s14-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: How to create a figure with 3 rows and 4 columns?</summary>
  <div class="tp-qa-answer"><p>Use <code>fig, axes = plt.subplots(3, 4, figsize=(12, 8))</code>. axes is a 2D array indexed by row and column. Use <code>plt.tight_layout()</code> to prevent overlap. For irregular layouts, use GridSpec: <code>gs = GridSpec(3, 4); ax1 = fig.add_subplot(gs[0, :])</code>.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s14-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: How does FacetGrid work in Seaborn?</summary>
  <div class="tp-qa-answer"><p>FacetGrid creates a grid of subplots based on categorical variables. <code>g = sns.FacetGrid(data, col="time", row="sex")</code> creates one subplot per combination. <code>g.map(sns.scatterplot, "x", "y")</code> draws a scatter plot in each subplot. It automatically shares axes for comparability.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s14-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: Plotly Express vs Graph Objects?</summary>
  <div class="tp-qa-answer"><p>Plotly Express (px) is a high-level API that creates complete figures from Pandas DataFrames in one line. It auto-generates layout, legend, and hover information. Graph Objects (go) is a low-level API for building figures trace by trace, offering full control over every aspect. Use Express for exploration, Graph Objects for production.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s14-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: How to add animation to a Plotly chart?</summary>
  <div class="tp-qa-answer"><p>Use the <code>animation_frame</code> parameter in Plotly Express. For scatter: <code>px.scatter(data, x, y, animation_frame="year")</code>. Each unique value in animation_frame becomes a frame. Plotly interpolates between frames for smooth transitions. Works with scatter, bar, line, and other Express chart types.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s14-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: How to combine Matplotlib and ipywidgets?</summary>
  <div class="tp-qa-answer"><p>Use @widgets.interact decorator on a function that takes widget values as parameters and creates Matplotlib plots. Each widget change calls the function, updating the plot. Common widgets: Select, Slider, SelectMultiple, ToggleButtons. Use plt.clf() to clear before redrawing, or update Axes data directly for performance.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s14-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: How to handle large datasets in visualizations?</summary>
  <div class="tp-qa-answer"><p>For 100k+ points: use hexbin plots in Matplotlib, Seaborn's kind="hex" in jointplot, or Plotly with datashader for rasterized rendering. Subsampling (random sample of 10k) works for exploration. Histograms and KDE plots aggregate data into a fixed number of bins regardless of data size.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s14-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: How to create a dashboard from a Jupyter notebook?</summary>
  <div class="tp-qa-answer"><p>Use Voilà to convert notebooks to standalone web apps: <code>voila notebook.ipynb</code>. Use ipywidgets for interactivity within notebooks. Use Panel for more sophisticated dashboards with reactive programming. Both support Matplotlib, Bokeh, and Plotly visualizations. For production, consider Dash by Plotly.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s14-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: How to save a figure with high resolution?</summary>
  <div class="tp-qa-answer"><p>Use <code>plt.savefig("figure.png", dpi=300, bbox_inches="tight")</code>. dpi=300 is standard for print. bbox_inches="tight" removes extra whitespace. For vector formats, use PDF (<code>plt.savefig("figure.pdf")</code>) or SVG (<code>plt.savefig("figure.svg")</code>) for resolution-independent publication figures.</p></div><button class="tp-qa-mark-btn">✓ Mark Reviewed</button><button class="tp-qa-bookmark-btn">★ Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which Matplotlib API gives the most control over subplot elements? a) pyplot b) Axes c) pylab d) inline

<details class="tp-qa-card" data-qid="p02-s14-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Axes API provides object-oriented control</strong></p></div></details>

**Q2**: What does sns.pairplot() display? a) pairwise scatter plots b) bar charts c) time series d) pie charts

<details class="tp-qa-card" data-qid="p02-s14-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) pairwise scatter plots for all numeric columns</strong></p></div></details>

**Q3**: Which Plotly API is best for quick exploration? a) Graph Objects b) Plotly Express c) Plotly Dash d) Plotly Figure

<details class="tp-qa-card" data-qid="p02-s14-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Plotly Express (px) for one-line interactive charts</strong></p></div></details>

**Q4**: How to create an animated scatter plot in Plotly? a) animation_frame parameter b) animate=True c) loop=True d) VideoWriter

<details class="tp-qa-card" data-qid="p02-s14-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) use animation_frame parameter in px.scatter</strong></p></div></details>

**Q5**: What converts a Jupyter notebook to a standalone dashboard? a) Voilà b) nbconvert c) Panel d) ipywidgets

<details class="tp-qa-card" data-qid="p02-s14-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) Voilà converts notebooks to standalone dashboards</strong></p></div></details>

## Exercises

**Easy** — Create a line plot of sin(x) and cos(x) on the same figure with custom colors, line styles, and a legend.

**Easy** — Use Seaborn to create a box plot comparing total_bill across days from the tips dataset.

**Medium** — Create a 2x2 subplot layout with: scatter plot, histogram, bar chart, and box plot. Customize each with titles and axis labels.

**Medium** — Use Plotly Express to create an animated scatter plot of the gapminder dataset, showing life expectancy vs GDP per capita over time.

**Hard** — Build a complete interactive dashboard using ipywidgets that lets users filter a dataset by multiple categorical columns and view three coordinated plots (scatter, histogram, box plot) that update on filter change.

**Hard** — Implement a custom chart renderer in TypeScript using HTML Canvas that draws a scatter plot with axis labels, gridlines, and tooltips on hover.

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- Key concept 1: Core principle of 01-python-programming
- Key concept 2: Common implementation pattern
- Key concept 3: Time/space complexity to remember
- Key concept 4: When to apply this technique
- Key concept 5: Common interview pattern
- Key concept 6: Edge cases to handle
- Key concept 7: Related concepts for deeper understanding

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 01-python-programming. When would you choose one approach over another?
2. Design a system that efficiently handles 01-python-programming at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 01-python-programming. What was your approach and what was the result?
2. How would you explain 01-python-programming to a non-technical stakeholder?

#### Microsoft Style
1. How does 01-python-programming integrate with enterprise systems and cloud architectures?
2. What are the security implications of 01-python-programming?

#### NVIDIA Style
1. How would you optimize 01-python-programming for GPU-accelerated computing?
2. What parallel processing patterns apply to 01-python-programming?

#### AI Startup Style
1. How would you implement 01-python-programming in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 01-python-programming?

### Resume Tips
- **Technical Skills**: List 01-python-programming under relevant technical skills
- **Project Description**: "Implemented 01-python-programming to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 01-python-programming in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 01-python-programming
- [ ] Practice 3-5 problems related to 01-python-programming
- [ ] Prepare 2 real-world examples of using 01-python-programming
- [ ] Know the time/space complexity of common 01-python-programming operations
- [ ] Have questions ready about how the company uses 01-python-programming> **Next**: [01 — SQL Basics →](../02-sql-and-databases/01-sql-basics.md)
