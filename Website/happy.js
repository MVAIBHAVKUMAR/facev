// function recognizeFace() {
//     // Send a request to the API endpoint
//     fetch('http://127.0.0.1:5000/Find', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'json'
//         },
//         body: ({
//             "img_path": "C:/Users/mvaib/OneDrive - rupee/Desktop/facev/data/img68.jpg",
//             "db_path": "C:/Users/mvaib/OneDrive - rupee/Desktop/facev/db"
//         })
//     })
//         .then(response => response.json())
//         .then(data => {
//             // Display the result on the page
//             // const resultContainer = document.getElementById('result-container');
//             // resultContainer.innerHTML = `The face in the image belongs to ${data.name}.`;
//             console.log(data)
//         })
//         // .catch(error => {
//         //     console.error(error);
//         //     alert('There was an error recognizing the face.');
//         // });
// }

function recognizeFace() {
const url = 'http://127.0.0.1:5000/Find';
const data = {
  img_path: 'C:/Users/mvaib/OneDrive - rupee/Desktop/facev/data/img68.jpg',
  db_path: 'C:/Users/mvaib/OneDrive - rupee/Desktop/facev/db'
};

fetch(url, {
  method: 'Find',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
  console.log('Response:', data);
})
.catch(error => {
  console.error('Error:', error);
});
}

// console.log('heloo')

// const generateExcelBtn = document.getElementById('generate-excel');
// document.getElementById("generate").addEventListener('click',function () {
//     console.log('Generating excel sheet...');
//     recognizeFace();
// });

const generateButton = document.getElementById("generate");
if (generateButton) {
  generateButton.addEventListener('click',function () {
    console.log('Generating excel sheet...');
    recognizeFace();
  });
} else {
  console.error('Could not find generate button element');
}
