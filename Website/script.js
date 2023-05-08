// Get the button element
const button = document.getElementById('submit-btn');

// Add event listener for click event
button.addEventListener('click', () => {
  // Get the input element
  const input = document.getElementById('image-input');

  // Get the value of the input
  const image = input.value;

  // Call the face recognition API with the image URL
  recognizeFace(image);
});

// Function to call the face recognition API
function recognizeFace(image) {
  // Send a request to the API endpoint
  fetch('https://api.facerecognition.com/recognize', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image: image })
  })
  .then(response => response.json())
  .then(data => {
    // Display the result on the page
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `The face in the image belongs to ${data.name}.`;
  })
  .catch(error => {
    console.error(error);
    alert('There was an error recognizing the face.');
  });
}
