// select the form elements
const classSelect = document.getElementById('class');
const sectionSelect = document.getElementById('section');
const imageUpload = document.getElementById('image-upload');
const imageDisplay = document.getElementById('image-display');
const generateExcelBtn = document.getElementById('generate-excel');

// add event listeners for form elements
classSelect.addEventListener('change', updateClass);
sectionSelect.addEventListener('change', updateSection);
imageUpload.addEventListener('change', updateImage);
generateExcelBtn.addEventListener('click', ()=>{
  console.log('Generating excel sheet...');
  recognizeFace();
});

// function to update class selection
function updateClass() {
  const selectedClass = classSelect.value;
  console.log('Selected class:', selectedClass);
}

// function to update section selection
function updateSection() {
  const selectedSection = sectionSelect.value;
  console.log('Selected section:', selectedSection);
}

// function to update image display
function updateImage() {
  const file = imageUpload.files[0];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = function() {
    imageDisplay.src = fileReader.result;
  }
}

// function to generate excel sheet
function generateExcel() {
  console.log('Generating excel sheet...');
  recognizeFace()
}

// Function to call the face recognition API
function recognizeFace() {
  // Send a request to the API endpoint
  fetch('http://127.0.0.1:5000/Find', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "img_path": "C:/Users/mvaib/OneDrive - rupee/Desktop/facev/data/img68.jpg",
      "db_path": "C:/Users/mvaib/OneDrive - rupee/Desktop/facev/db"
  })
  })
  .then(response => response.json())
  .then(data => {
    // Display the result on the page
    // const resultContainer = document.getElementById('result-container');
    // resultContainer.innerHTML = `The face in the image belongs to ${data.name}.`;
    console.log(data)
  })
  .catch(error => {
    console.error(error);
    alert('There was an error recognizing the face.');
  });
}
