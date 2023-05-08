from flask import Flask, request, jsonify
from flask_cors import CORS

from calculator import calculator

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return 'Hello World!'

@app.route('/calculate', methods=["POST"])
def calculate():
    req_body = request.json
    print(req_body)
    num1 = req_body.get('num1')
    num2 = req_body.get('num2')
    mode = req_body.get('mode')
    result = calculator(num1, num2, mode)
    print(result)
    return jsonify(result), 200

if __name__ == '__main__':
    app.run()