""" import argparse
import app

if __name__ == "__main__":
    deepface_app = app.create_app()
    parser = argparse.ArgumentParser()
    parser.add_argument("-p", "--port", type=int, default=5000, help="Port of serving api")
    args = parser.parse_args()
    deepface_app.run(host="0.0.0.0", port=args.port) """



import argparse
from flask import Flask, jsonify
from flask_cors import CORS
import app # import the module that has the '/Find' route

if __name__ == "__main__":
    deepface_app = app.create_app()
    CORS(deepface_app) # initialize the CORS extension

    # define the '/Find' route using the module you imported
    # deepface_app.register_blueprint(your_module_here.bp)

    parser = argparse.ArgumentParser()
    parser.add_argument("-p", "--port", type=int, default=5000, help="Port of serving api")
    args = parser.parse_args()
    deepface_app.run(host="0.0.0.0", port=args.port)