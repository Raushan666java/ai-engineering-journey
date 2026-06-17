# Chapter 3: OpenCV & Computer Vision

## Learning Objectives

After completing this chapter, you will be able to:
- Read, write, and display images with OpenCV
- Apply geometric transformations, filters, and color space conversions
- Detect features (edges, corners, blobs) for image analysis
- Build a face detection pipeline with Haar cascades
- Process video streams frame by frame
- Integrate OpenCV with a FastAPI service

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

## 3.8 Image Processing Pipeline

![Image Processing Pipeline](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/applied-ai/ch03-image-processing.png)

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

![Face Detection Workflow](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/applied-ai/ch03-face-detection.png)

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

## Summary

- OpenCV provides 2500+ optimized algorithms for image and video processing.
- Core operations: color space conversion, geometric transforms, filtering, thresholding.
- Feature detection (SIFT, Harris corners, Canny edges) enables image matching and analysis.
- Haar cascades offer fast face detection; DNN-based detectors (SSD, YOLO) are more accurate.
- Video processing treats each frame independently; use VideoCapture/VideoWriter for streams.
- Deploy vision pipelines with FastAPI for HTTP-based inference.

## Exercises

1. Write a script that detects faces in every frame of a video and draws a blur overlay over each face (privacy masking).
2. Build an image stitching pipeline that takes 3 overlapping photos and produces a panorama using SIFT features and homography.
3. Implement a color-based object tracker: select a colored object on the first frame, track it across subsequent frames using HSV masking and centroid tracking.
4. Deploy a YOLO object detection model as a FastAPI endpoint that accepts an image URL and returns JSON bounding boxes.
5. Create a document scanner: detect the largest quadrilateral in an image, apply perspective transform to flatten it, and apply adaptive thresholding for OCR readiness.
