from flask import Flask, request, jsonify
from calculator import calculator
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello World!'

@app.route('/calculate', methods=["POST"])
def calculate():
    req_body = request.json
    num1 = req_body.get('num1')
    num2 = req_body.get('num2')
    mode = req_body.get('mode')
    result = calculator(num1, num2, mode)
    print(result)
    return jsonify(result), 200

if __name__ == '__main__':
    app.run()