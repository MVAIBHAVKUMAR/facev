from retinaface import RetinaFace
from PIL import Image 
import math
import numpy as np
import cv2 
import matplotlib.pyplot as plt 

im = Image.open(r'db/Vaibhav_1.jpg')

res = RetinaFace.detect_faces(img_path='db/Vaibhav_1.jpg')

# This line is just to check the values of the 
print(res['face_1']['facial_area'])

left = res['face_1']['facial_area'][0]
upper = res['face_1']['facial_area'][1]
right = res['face_1']['facial_area'][2]
lower = res['face_1']['facial_area'][3]

im1 = im.crop((left, upper, right, lower))
im1.show()

# im1.save('data/aligned/img11.jpg')