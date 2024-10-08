# Harness CI Sample for Node.js

Simple calculator API built with Express.js. The app supports basic arithmetic operations like addition, subtraction, multiplication, and division.

### Available Routes

- Addition
GET /add/:num1/:num2
Example: /add/10/5 → Result: 15

- Subtraction
GET /subtract/:num1/:num2
Example: /subtract/10/3 → Result: 7

- Multiplication
GET /multiply/:num1/:num2
Example: /multiply/4/2 → Result: 8

- Division
GET /divide/:num1/:num2
Example: /divide/20/4 → Result: 5
Handles division by zero.

## Running the App
Clone the repo.
Run `npm install`.
Start the app: `npm start`.
Visit `http://localhost:3000` to access the calculator API
