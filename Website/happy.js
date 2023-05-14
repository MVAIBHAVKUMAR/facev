function recognizeFace() {
	const url = 'http://127.0.0.1:5000/find';
	const data = {
		"img_path": 'C:/Users/mvaib/OneDrive - rupee/Desktop/facev/data/img68.jpg',
		"db_path": 'C:/Users/mvaib/OneDrive - rupee/Desktop/facev/db'
	};

	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => response.blob())
		.then(blob => {
			// Create a temporary URL for the blob object
			const url = window.URL.createObjectURL(blob);
			console.log(url);


			// Create a link element and simulate a click to trigger a download
			const a = document.createElement('a');

			a.href = url;
			a.download = 'results.xlsx';

			console.log(a);
			// container.appendChild('a');
			const parent = document.querySelector('#download');
			if (parent) {
				parent.appendChild(a);
			} else {
				console.error('Parent element not found');
			}

			a.click();
			window.URL.revokeObjectURL(url);
		})
		.catch(error => {
			console.error('Error:', error);
		});
}

const generateButton = document.getElementById("generate");
const container = document.getElementById('download');
const getClass = document.getElementById('class');
const getSection = document.getElementById('section');
var input = document.getElementById("image-upload");

function handleFileSelect(evt) {
	var file = evt.target.files[0]; // Get the file object
	console.log(file);
	var reader = new FileReader();

	reader.onload = function () {
		var path = reader.result; // Get the path from the reader's result
		console.log(path);
	};

	reader.readAsDataURL(file); // Read the file as a data URL
}


input.addEventListener('change', handleFileSelect, false);



if (generateButton) {
	generateButton.addEventListener('click', function () {
		console.log('Generating excel sheet...');
		// recognizeFace();
		var file = input.files[0];
		var path = URL.createObjectURL(file);
		console.log(window.location.pathname);
		console.log(path);
	});
} else {
	console.error('Could not find generate button element');
}