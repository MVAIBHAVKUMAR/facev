// Get the face recognition button element
const faceRecognitionBtn = document.querySelector('#face-recognition-btn');

// Add event listener to the button
faceRecognitionBtn.addEventListener('click', () => {
  // Get the video element and set its source
  const video = document.querySelector('#video');
  video.srcObject = navigator.mediaDevices.getUserMedia({ video: true });

  // Get the canvas element and the context
  const canvas = document.querySelector('#canvas');
  const context = canvas.getContext('2d');

  // Get the face detector
  const faceDetector = new window.FaceDetector();

  // Start capturing the video stream
  video.onloadedmetadata = function() {
    video.play();
    setInterval(async () => {
      // Draw the video frame on the canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Detect faces in the canvas
      const faces = await faceDetector.detect(canvas);

      // Draw a rectangle around each face
      faces.forEach(face => {
        const { x, y, width, height } = face.boundingBox;
        context.strokeStyle = '#00FF00';
        context.lineWidth = 2;
        context.strokeRect(x, y, width, height);
      });
    }, 1000);
  };
});

