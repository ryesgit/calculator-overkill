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
    try:
        req_body = request.json
        num1 = req_body.get('num1')
        num2 = req_body.get('num2')
        mode = req_body.get('mode')
        result = calculator(num1, num2, mode)
        return jsonify(result), 200
    except ZeroDivisionError:
        return jsonify("Division by Zero is not allowed"), 400
    except TypeError:
        return jsonify("Some of the arguments are missing"), 400
    except ValueError:
        return jsonify("Numeric arguments should be numbers, operation must be either of the following: 'add', 'subtract', 'multiply', 'divide'")

if __name__ == '__main__':
    app.run()