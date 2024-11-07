const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const { evaluatePostfixExpression } = require('./evaluatePostfixExpression');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Parse incoming JSON bodies
app.use(bodyParser.json());

// Handle preflight OPTIONS request
app.options('*', (req, res) => {
    res.setHeader('Allow', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).send();
});

// Route to handle POST request to evaluate postfix expression
// app.post('/evaluatePostfixExpression', (req, res) => {
//     const expression = req.body.expression;
//     if (expression) {
//         try {
//             const result = evaluatePostfixExpression(expression); // Assuming this function is available
//             res.json({ result });
//         } catch (error) {
//             res.status(400).json({ error: 'Invalid expression' });
//         }
//     } else {
//         res.status(400).json({ error: 'Expression is required' });
//     }
// });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
