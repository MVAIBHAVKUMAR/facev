import io
from deepface import DeepFace
import pandas as pd
from flask import make_response
from PIL import Image
import requests

def represent(img_path, model_name, detector_backend, enforce_detection, align):
    result = {}
    embedding_objs = DeepFace.represent(
        img_path=img_path,
        model_name=model_name,
        detector_backend=detector_backend,
        enforce_detection=enforce_detection,
        align=align,
    )
    result["results"] = embedding_objs
    return result


def verify(
    img1_path, img2_path, model_name, detector_backend, distance_metric, enforce_detection, align
):
    obj = DeepFace.verify(
        img1_path=img1_path,
        img2_path=img2_path,
        model_name=model_name,
        detector_backend=detector_backend,
        distance_metric=distance_metric,
        align=align,
        enforce_detection=enforce_detection,
    )
    return obj


def analyze(img_path, actions, detector_backend, enforce_detection, align):
    result = {}
    demographies = DeepFace.analyze(
        img_path=img_path,
        actions=actions,
        detector_backend=detector_backend,
        enforce_detection=enforce_detection,
        align=align,
    )
    result["results"] = demographies
    return result


def find(img_path, db_path):
    result = {}

    # response = requests.get(img_path[5:])
    
    # with open('image.png', 'wb') as f:
    #     f.write(response.content)

    demographies = DeepFace.find(
        img_path= img_path,
        db_path= db_path
    )

    print(demographies)
    df = pd.DataFrame(demographies[0])

    print('\n\n\n')
    print(df)

    result["results"] = df.to_dict(orient='records')
    

    print('\n\n\n')
    print('result :: \n\n\n\n')
    print(result)

    # Create an Excel file and add the results to it
    output = io.BytesIO()
    writer = pd.ExcelWriter(output, engine='xlsxwriter')
    df.to_excel(writer, sheet_name='Results', index=False)
    writer.save()

    # Create a response with the Excel file and auto-download it
    response = make_response(output.getvalue())
    response.headers.set('Content-Disposition', 'attachment', filename='results.xlsx')
    response.headers.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    
    return response