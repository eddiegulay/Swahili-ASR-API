# Swahili-ASR-API
Python & Javascript inference code to finetuned whispher model with mozilla common voice

Note: The code in here work with finetuned model on swahili common voice dataset. The model is trained using [whispher]().


## How to use
Just clone the repo and select the language you want to use. The code is written in python and javascript. The python code is used to run inference on the model and the javascript code is used to run the inference on the browser.

### Javascript Web Inference
For direct browser inference check web folder. It contain simple HTML file `index.html` that will allow you to upload file and get transcription.

### Javascript ~Node Inference

For node inference check `src/index.js`. It contain js request snippet that will allow you to specify file location, make RESTful request and get transcription.

### Python Inference
For python inference check `python/inference.py`. It contain python code that will allow you to specify file location, make RESTful request and get transcription.