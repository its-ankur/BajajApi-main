const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello from ankur');
});
app.post('/bfhl', (req, res) => {
    let data = [];
    if (req.body.data) {
        data = req.body.data;
    }
    let odd = [];
    let even = [];
    let alphabet = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].match(/[a-z]/i)) {
            alphabet.push(data[i].toUpperCase());
        }
        else if (data[i] % 2 == 0) {
            even.push(data[i]);
        }
        else if (data[i] % 2 != 0) {
            odd.push(data[i]);
        }
    }
    let result = {
        "is_success": "true",
        "user_id": "john_doe_17091999",
        "email": "john@xyz.com",
        "roll_number": "ABCD123",
        "odd_numbers": odd,
        "even_numbers": even,
        "alphabets": alphabet,
    }
    res.json(result);
});
app.listen(3000, () => console.log("Server ready on port 3000."));
module.exports = app;
