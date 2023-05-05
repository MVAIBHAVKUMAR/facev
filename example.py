import cv2
from deepface import DeepFace

# Load the image
img = cv2.imread("test.jpeg")

# Detect faces in the image
detector = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
faces = detector.detectMultiScale(img, 1.3, 5)


# Perform face recognition on each detected face
for (x, y, w, h) in faces:
    face = img[y:y+h, x:x+w]
    # Perform face recognition using DeepFace
    result = DeepFace.verify("elon_musk.jpeg", face)
    # Print the result
    print(result)
