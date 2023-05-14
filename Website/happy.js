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
		// .then(response => response.json())
		// .then(data => {
		// 	console.log('Vaibhav')
		// 	console.log(data)
		// })
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

if (generateButton) {
	generateButton.addEventListener('click', function () {
		console.log('Generating excel sheet...');
		recognizeFace();
	});
} else {
	console.error('Could not find generate button element');
}