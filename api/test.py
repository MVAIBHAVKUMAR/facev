import requests

blob_url = "http://127.0.0.1:5500/2b7c7608-4421-4ddc-9fd2-95104bcfe600"
output_file = "image.jpg"

response = requests.get(blob_url)

if response.status_code == 200:
    with open(output_file, "wb") as f:
        f.write(response.content)
    print("Image downloaded successfully!")
else:
    print(f"Failed to download image. Status code: {response.status_code}")
