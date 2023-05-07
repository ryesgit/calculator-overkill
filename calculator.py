'''
filename: calculator.py

This module acquires two numbers, and then performs mathematical operations to them
according to the mode (addition, subtraction, multiplication, and division) also will provide. 

1. Ask for two numbers and the mode of operation
2. Perform mathematical operations.
    - If addition, then add numbers
    - If subtraction, then subtract numbers
    - If multiplication, then multiply numbers
    - If division, then divide numbers.
3. Catch program errors! For example, the user must not be able to divide a number by zero.

'''

def calculator(num1, num2, mode):

    try:
        num1 = float(num1)
        num2 = float(num2)
        pass
    except ValueError:
        return "You must input numbers!"
    match mode:
        case 'add':
            return num1 + num2
        case 'subtract':
            return num1 - num2
        case 'multiply':
            return num1 * num2
        case 'divide':
            return num1 / num2
