# Chapter 3: OpenCV & Computer Vision

> **Prerequisite:** [02 - LangChain & LLM Orchestration](./02-langchain.md)  
> **Next Chapter:** [04 - Generative AI](./04-generative-ai.md)

## Learning Objectives

After completing this chapter, you will be able to:
- Read, write, and display images with OpenCV
- Apply geometric transformations, filters, and color space conversions
- Detect features (edges, corners, blobs) for image analysis
- Build a face detection pipeline with Haar cascades
- Process video streams frame by frame
- Integrate OpenCV with a FastAPI service

### Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| Image I/O Basics | OpenCV reads images in BGR format by default | Always convert BGR to RGB before displaying with matplotlib |
| Color Spaces | HSV enables intuitive color-based segmentation | Use `cv2.inRange()` with HSV bounds for object masking |
| Geometric Transforms | Affine and perspective transforms correct image geometry | Use `warpPerspective` for document scanning and alignment |
| Image Filters | Blurring reduces noise; Canny detects edges | Chain Gaussian blur → Canny for cleaner edge detection |
| Feature Detection | SIFT finds scale-invariant keypoints for matching | Use FLANN matcher + Lowe's ratio test for robust feature matching |
| Face Detection | Haar cascades are fast; DNN models are more accurate | Start with Haar for real-time; use DNN/SSD for accuracy-critical applications |
| Video Processing | Treat each frame independently | Process every Nth frame to maintain real-time throughput |
| YOLO Object Detection | DNN module runs YOLO models natively in OpenCV | Use NMSBoxes to filter overlapping detections |

### Chapter Roadmap

```mermaid
flowchart LR
    A[Image I/O Basics] --> B[Color Spaces]
    B --> C[Geometric Transforms]
    C --> D[Image Filters]
    D --> E[Feature Detection]
    E --> F[Face Detection]
    F --> G[Video Processing]
    G --> H[YOLO Object Detection]
    H --> I[FastAPI Deployment]
```

## 3.1 Image I/O Basics

```python
import cv2
import numpy as np

# Read an image (BGR format by default)
img = cv2.imread("input/photo.jpg")
print(f"Shape: {img.shape}")  # (height, width, channels)
print(f"Data type: {img.dtype}")

# Write an image
cv2.imwrite("output/copy.jpg", img)

# Display (in a Jupyter notebook or GUI)
cv2.imshow("Image", img)
cv2.waitKey(0)  # Wait for key press
cv2.destroyAllWindows()

# Create a blank image
blank = np.zeros((400, 400, 3), dtype=np.uint8)
blank[:] = (255, 0, 0)  # Blue in BGR
cv2.imwrite("output/blue.png", blank)
```

> **💡 Pro Tip:** OpenCV uses BGR (Blue-Green-Red) by default, not RGB. Use `cv2.cvtColor(img, cv2.COLOR_BGR2RGB)` before displaying with matplotlib, or your colors will look inverted.

> **One-Sentence Takeaway:** OpenCV reads images as NumPy arrays in BGR format; always verify your color channel order when visualizing.

## 3.2 Color Space Conversions

```python
# BGR to Grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# BGR to HSV (useful for color-based segmentation)
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

# BGR to RGB (for matplotlib display)
rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

# Color range masking (detect blue objects)
lower_blue = np.array([100, 50, 50])
upper_blue = np.array([130, 255, 255])
mask = cv2.inRange(hsv, lower_blue, upper_blue)
result = cv2.bitwise_and(img, img, mask=mask)

cv2.imwrite("output/blue_mask.png", mask)
cv2.imwrite("output/blue_objects.png", result)
```

> **⚠️ Warning:** HSV ranges in OpenCV differ from common expectations: H is 0-179 (not 360), S is 0-255, V is 0-255. Use `cv2.cvtColor` on a known color to calibrate your bounds.

> **One-Sentence Takeaway:** HSV color space makes color-based segmentation intuitive — define lower/upper bounds and use `inRange` to create a binary mask.

## 3.3 Geometric Transformations

### 3.3.1 Resize, Rotate, Crop

```python
h, w = img.shape[:2]

# Resize
resized = cv2.resize(img, (w // 2, h // 2))
cv2.imwrite("output/resized.png", resized)

# Rotate
center = (w // 2, h // 2)
matrix = cv2.getRotationMatrix2D(center, 45, 1.0)
rotated = cv2.warpAffine(img, matrix, (w, h))
cv2.imwrite("output/rotated.png", rotated)

# Crop
cropped = img[100:300, 200:400]
cv2.imwrite("output/cropped.png", cropped)
```

### 3.3.2 Perspective Transform

```python
# Four source points (corners of a document)
src_pts = np.float32([[50, 50], [200, 50], [50, 200], [200, 200]])
# Four destination points (rectangle after transform)
dst_pts = np.float32([[0, 0], [300, 0], [0, 300], [300, 300]])

matrix = cv2.getPerspectiveTransform(src_pts, dst_pts)
warped = cv2.warpPerspective(img, matrix, (300, 300))
cv2.imwrite("output/warped.png", warped)
```

> **💡 Pro Tip:** Use perspective transforms for document scanning: find the four corners of the document with contour detection, then warp to a rectangle for a clean scan effect.

> **One-Sentence Takeaway:** Geometric transformations — resize, rotate, crop, and perspective warp — are the foundation of image preprocessing pipelines.

## 3.4 Image Filters

### 3.4.1 Blurring

```python
# Gaussian blur (smoothing)
blurred = cv2.GaussianBlur(img, (5, 5), sigmaX=0)
cv2.imwrite("output/blurred.png", blurred)

# Median blur (good for salt-and-pepper noise)
median = cv2.medianBlur(img, 5)

# Bilateral filter (preserves edges)
bilateral = cv2.bilateralFilter(img, 9, 75, 75)
```

### 3.4.2 Edge Detection (Canny)

```python
# Canny edge detection
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
edges = cv2.Canny(gray, threshold1=100, threshold2=200)
cv2.imwrite("output/edges.png", edges)
```

### 3.4.3 Thresholding

```python
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Simple threshold
_, binary = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)

# Adaptive threshold (better for varying lighting)
adaptive = cv2.adaptiveThreshold(
    gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
    cv2.THRESH_BINARY, 11, 2
)
cv2.imwrite("output/adaptive_thresh.png", adaptive)
```

> **⚠️ Warning:** Canny thresholds are dataset-dependent. The default `100, 200` works for well-lit scenes, but you'll need to tune these values for low-light or high-contrast images. Use trackbars to find optimal values interactively.

> **One-Sentence Takeaway:** Image filtering reduces noise (Gaussian, median) and highlights structure (Canny edges, adaptive thresholding) for downstream analysis.

## 3.5 Feature Detection

### 3.5.1 Harris Corner Detection

```python
gray = np.float32(gray)
corners = cv2.cornerHarris(gray, blockSize=2, ksize=3, k=0.04)
corners = cv2.dilate(corners, None)

img_corners = img.copy()
img_corners[corners > 0.01 * corners.max()] = [0, 0, 255]
cv2.imwrite("output/corners.png", img_corners)
```

### 3.5.2 SIFT (Scale-Invariant Feature Transform)

```python
sift = cv2.SIFT_create()
keypoints, descriptors = sift.detectAndCompute(gray, None)

img_sift = cv2.drawKeypoints(
    img, keypoints, None,
    flags=cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS
)
cv2.imwrite("output/sift_keypoints.png", img_sift)
print(f"Found {len(keypoints)} keypoints, descriptors shape: {descriptors.shape}")
```

### 3.5.3 Feature Matching

```python
# Load two images and find matches
img1 = cv2.imread("input/obj1.jpg", cv2.IMREAD_GRAYSCALE)
img2 = cv2.imread("input/obj2.jpg", cv2.IMREAD_GRAYSCALE)

sift = cv2.SIFT_create()
kp1, des1 = sift.detectAndCompute(img1, None)
kp2, des2 = sift.detectAndCompute(img2, None)

# FLANN matcher
FLANN_INDEX_KDTREE = 1
index_params = dict(algorithm=FLANN_INDEX_KDTREE, trees=5)
search_params = dict(checks=50)
flann = cv2.FlannBasedMatcher(index_params, search_params)

matches = flann.knnMatch(des1, des2, k=2)

# Lowe's ratio test
good_matches = []
for m, n in matches:
    if m.distance < 0.7 * n.distance:
        good_matches.append(m)

print(f"Good matches: {len(good_matches)}")

# Draw matches
matched_img = cv2.drawMatches(
    img1, kp1, img2, kp2, good_matches, None,
    flags=cv2.DrawMatchesFlags_NOT_DRAW_SINGLE_POINTS
)
cv2.imwrite("output/matches.png", matched_img)
```

> **💡 Pro Tip:** Lowe's ratio test (0.7-0.8) filters out ambiguous matches by keeping only those where the best match is significantly better than the second best. This is the single most effective technique for improving match quality.

> **One-Sentence Takeaway:** SIFT features are scale-invariant and rotation-invariant, making them ideal for matching objects across different viewpoints and scales.

## 3.6 Face Detection with Haar Cascades

OpenCV includes pre-trained classifiers for face, eye, and smile detection.

```python
# Load the cascade
face_cascade = cv2.CascadeClassifier(
    cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
)

# Detect faces
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
faces = face_cascade.detectMultiScale(
    gray,
    scaleFactor=1.1,
    minNeighbors=5,
    minSize=(30, 30)
)

print(f"Detected {len(faces)} faces")

# Draw rectangles
img_faces = img.copy()
for (x, y, w, h) in faces:
    cv2.rectangle(img_faces, (x, y), (x + w, y + h), (0, 255, 0), 2)

cv2.imwrite("output/faces.png", img_faces)
```

### 3.6.1 Face Detection with Deep Learning (DNN)

```python
# OpenCV DNN with Caffe model
net = cv2.dnn.readNetFromCaffe(
    "deploy.prototxt", "res10_300x300_ssd_iter_140000.caffemodel"
)

blob = cv2.dnn.blobFromImage(img, 1.0, (300, 300), (104.0, 177.0, 123.0))
net.setInput(blob)
detections = net.forward()

img_dnn = img.copy()
for i in range(detections.shape[2]):
    confidence = detections[0, 0, i, 2]
    if confidence > 0.7:
        box = detections[0, 0, i, 3:7] * np.array([w, h, w, h])
        (x1, y1, x2, y2) = box.astype("int")
        cv2.rectangle(img_dnn, (x1, y1), (x2, y2), (0, 255, 0), 2)
        cv2.putText(img_dnn, f"{confidence:.2f}", (x1, y1 - 10),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

cv2.imwrite("output/faces_dnn.png", img_dnn)
```

> **💡 Pro Tip:** Tune `scaleFactor` and `minNeighbors` for your use case. Lower `scaleFactor` (e.g., 1.05) detects more faces but is slower; higher `minNeighbors` (e.g., 7-8) reduces false positives.

> **One-Sentence Takeaway:** Haar cascades offer fast, CPU-friendly face detection, while DNN-based methods (SSD, YOLO) provide higher accuracy at the cost of computational overhead.

## 3.7 Video Processing

### 3.7.1 Reading Video Frames

```python
cap = cv2.VideoCapture("input/video.mp4")
frame_count = 0

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    if frame_count % 30 == 0:  # Process every 30th frame
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, 1.1, 5)
        print(f"Frame {frame_count}: {len(faces)} faces")

    frame_count += 1

cap.release()
print(f"Total frames: {frame_count}")
```

### 3.7.2 Real-Time Face Detection (Webcam)

```python
cap = cv2.VideoCapture(0)  # 0 = default webcam

while True:
    ret, frame = cap.read()
    if not ret:
        break

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.1, 5)

    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

    cv2.imshow("Face Detection", frame)
    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

cap.release()
cv2.destroyAllWindows()
```

### 3.7.3 Writing Video Output

```python
cap = cv2.VideoCapture("input/video.mp4")
fourcc = cv2.VideoWriter_fourcc(*"mp4v")
out = cv2.VideoWriter("output/processed.mp4", fourcc, 30.0, (640, 480))

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    frame = cv2.resize(frame, (640, 480))
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    edges = cv2.Canny(gray, 100, 200)
    edges_bgr = cv2.cvtColor(edges, cv2.COLOR_GRAY2BGR)
    out.write(edges_bgr)

cap.release()
out.release()
```

> **⚠️ Warning:** VideoCapture does not always return frames at a consistent rate. Always check `ret` before processing each frame, and consider a frame buffer to handle dropped frames in real-time applications.

> **One-Sentence Takeaway:** Video processing treats streams as frame sequences — use VideoCapture for input, VideoWriter for output, and process every Nth frame to maintain real-time throughput.

## 3.8 Image Processing Pipeline

![Image Processing Pipeline](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/applied-ai/ch03-image-processing.png)

## 3.9 Image Processing Pipeline with FastAPI

```python
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import Response
import cv2
import numpy as np

app = FastAPI(title="Vision API")

@app.post("/detect-faces")
async def detect_faces(file: UploadFile = File(...)):
    contents = await file.read()
    nparr = np.frombuffer(contents, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    face_cascade = cv2.CascadeClassifier(
        cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
    )
    faces = face_cascade.detectMultiScale(gray, 1.1, 5)

    for (x, y, w, h) in faces:
        cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)

    _, encoded = cv2.imencode(".jpg", img)
    return Response(content=encoded.tobytes(), media_type="image/jpeg")

@app.post("/filter")
async def apply_filter(file: UploadFile = File(...), filter_type: str = "edges"):
    contents = await file.read()
    nparr = np.frombuffer(contents, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    if filter_type == "edges":
        result = cv2.Canny(gray, 100, 200)
        result = cv2.cvtColor(result, cv2.COLOR_GRAY2BGR)
    elif filter_type == "blur":
        result = cv2.GaussianBlur(img, (15, 15), 0)
    else:
        result = img

    _, encoded = cv2.imencode(".jpg", result)
    return Response(content=encoded.tobytes(), media_type="image/jpeg")
```

## 3.9 Face Detection Workflow

![Face Detection Workflow](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/applied-ai/ch03-face-detection.png)

> **💡 Pro Tip:** Use `cv2.imencode` to convert OpenCV images to bytes for HTTP responses — it avoids writing temporary files to disk and keeps your API stateless.

> **One-Sentence Takeaway:** FastAPI + OpenCV makes a powerful combo for deploying vision APIs that accept image uploads and return processed results.

## 3.10 Object Detection with YOLO (via OpenCV DNN)

```python
# Load YOLO (download yolov3.weights and yolov3.cfg first)
net = cv2.dnn.readNet("yolov3.weights", "yolov3.cfg")

with open("coco.names", "r") as f:
    classes = [line.strip() for line in f.readlines()]

layer_names = net.getLayerNames()
output_layers = [layer_names[i - 1] for i in net.getUnconnectedOutLayers()]

blob = cv2.dnn.blobFromImage(img, 0.00392, (416, 416), (0, 0, 0), True, crop=False)
net.setInput(blob)
outputs = net.forward(output_layers)

boxes, confidences, class_ids = [], [], []
for output in outputs:
    for detection in output:
        scores = detection[5:]
        class_id = np.argmax(scores)
        confidence = scores[class_id]
        if confidence > 0.5:
            cx, cy, bw, bh = detection[:4] * np.array([w, h, w, h])
            boxes.append([int(cx - bw / 2), int(cy - bh / 2), int(bw), int(bh)])
            confidences.append(float(confidence))
            class_ids.append(class_id)

# Non-max suppression
indices = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)
for i in indices:
    x, y, bw, bh = boxes[i]
    label = f"{classes[class_ids[i]]}: {confidences[i]:.2f}"
    cv2.rectangle(img, (x, y), (x + bw, y + bh), (0, 255, 0), 2)
    cv2.putText(img, label, (x, y - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

cv2.imwrite("output/yolo_detection.png", img)
```

> **⚠️ Warning:** YOLO weights files are large (~250MB) and not distributed with OpenCV. Download them separately from the official repository and verify the file paths before running detection.

> **One-Sentence Takeaway:** OpenCV's DNN module runs YOLO models natively, enabling 80-class object detection with non-max suppression for clean results.

### Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|------------|----------------|----------|
| **BGR vs RGB** | OpenCV's default color order differs from standard | BGR is historical; always convert for correct display | Matplotlib visualization, web image output |
| **Affine vs Perspective** | Affine preserves parallelism; perspective does not | Affine = 2D transform (rotate, scale); Perspective = 3D warp | Affine: image alignment; Perspective: document scanning |
| **Haar vs DNN** | Haar: feature-based, fast; DNN: learned, accurate | Haar runs on CPU in real-time; DNN needs GPU for speed | Haar: webcam; DNN: server-side analysis |
| **SIFT vs ORB** | SIFT: patented, scale-invariant; ORB: free, faster | SIFT more accurate; ORB better for real-time on CPU | SIFT: panorama stitching; ORB: mobile apps |
| **Canny vs Sobel** | Canny: multi-stage edge detector; Sobel: gradient magnitude | Canny produces thinner, cleaner edges | Canny: general edge detection; Sobel: gradient direction analysis |

### Quick Reference

| Category | Key Function |
|----------|-------------|
| I/O | `cv2.imread`, `cv2.imwrite`, `cv2.imdecode`, `cv2.imencode` |
| Color | `cv2.cvtColor`, `cv2.inRange` |
| Geometry | `cv2.resize`, `cv2.warpAffine`, `cv2.warpPerspective` |
| Filters | `cv2.GaussianBlur`, `cv2.Canny`, `cv2.threshold`, `cv2.adaptiveThreshold` |
| Features | `cv2.SIFT_create`, `cv2.cornerHarris`, `cv2.FlannBasedMatcher` |
| Face Detection | `cv2.CascadeClassifier`, `cv2.dnn.blobFromImage` |
| Video | `cv2.VideoCapture`, `cv2.VideoWriter` |
| DNN | `cv2.dnn.readNet`, `cv2.dnn.NMSBoxes` |

### Cross-Application Matrix

| Technique | AI Engineering | Data Science | Web Dev | Research |
|-----------|---------------|-------------|---------|----------|
| Color Space Conversion | Preprocessing pipeline | Feature extraction | Image upload handling | Visual analysis |
| Geometric Transforms | Data augmentation | Image normalization | Photo editing tools | Image registration |
| Image Filtering | Noise reduction | Cleanup for OCR | Photo filters | Signal processing |
| Feature Detection | Object matching | Image similarity search | Visual search | 3D reconstruction |
| Face Detection | Access control systems | Demographic analysis | Photo tagging | Social science |
| Video Processing | Surveillance analytics | Motion tracking | Video streaming | Behavioral analysis |
| YOLO Detection | Inventory management | Object counting | AR applications | Wildlife monitoring |

## Summary

- OpenCV provides 2500+ optimized algorithms for image and video processing.
- Core operations: color space conversion, geometric transforms, filtering, thresholding.
- Feature detection (SIFT, Harris corners, Canny edges) enables image matching and analysis.
- Haar cascades offer fast face detection; DNN-based detectors (SSD, YOLO) are more accurate.
- Video processing treats each frame independently; use VideoCapture/VideoWriter for streams.
- Deploy vision pipelines with FastAPI for HTTP-based inference.

## Chapter Quiz

**Q1:** Why does a matplotlib plot of an OpenCV image look color-inverted?

- A. OpenCV compresses images differently
- B. OpenCV uses BGR order, while matplotlib expects RGB
- C. The image resolution is too low
- D. OpenCV images are always grayscale

<details>
<summary>Answer</summary>

**B.** OpenCV reads images in BGR (Blue-Green-Red) format. Use `cv2.cvtColor(img, cv2.COLOR_BGR2RGB)` before displaying with matplotlib.
</details>

**Q2:** Which OpenCV function would you use to create a clean flat scan of a photographed document?

- A. `cv2.resize`
- B. `cv2.warpPerspective`
- C. `cv2.GaussianBlur`
- D. `cv2.cornerHarris`

<details>
<summary>Answer</summary>

**B.** `cv2.warpPerspective` applies a perspective transform that can map the four corners of a photographed document to a rectangle, creating a flat scan.
</details>

**Q3:** What is the primary advantage of using a DNN-based face detector over Haar cascades?

- A. It runs faster on CPU
- B. It requires no training data
- C. It provides higher accuracy with confidence scores and handles varied poses/lighting better
- D. It does not require OpenCV

<details>
<summary>Answer</summary>

**C.** DNN-based detectors (SSD, YOLO) are more accurate, provide confidence scores, and handle varied poses better than Haar cascades, though they require more computational resources.
</details>

## Exercises

1. Write a script that detects faces in every frame of a video and draws a blur overlay over each face (privacy masking).
2. Build an image stitching pipeline that takes 3 overlapping photos and produces a panorama using SIFT features and homography.
3. Implement a color-based object tracker: select a colored object on the first frame, track it across subsequent frames using HSV masking and centroid tracking.
4. Deploy a YOLO object detection model as a FastAPI endpoint that accepts an image URL and returns JSON bounding boxes.
5. Create a document scanner: detect the largest quadrilateral in an image, apply perspective transform to flatten it, and apply adaptive thresholding for OCR readiness.
