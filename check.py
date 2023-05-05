from deepface import DeepFace

image = 'data/img68.jpg'

res = DeepFace.find(img_path=image, db_path='db', enforce_detection=False)
print(res)