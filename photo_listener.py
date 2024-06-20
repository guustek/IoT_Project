from flask import Flask, send_file
from flask_cors import CORS
from picamera2 import Picamera2
from time import sleep

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
camera = Picamera2()


@app.route('/capture', methods=['GET'])
def capture_image():
    camera.configure(camera.create_still_configuration())
    camera.start()
    image_path = 'captured_image.jpg'
    camera.capture_file(image_path)
    camera.stop()
    return send_file(image_path, mimetype='image/jpeg')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
