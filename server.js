
// Sample server.js file for the project
const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(3000, () => console.log('Server running on port 3000'));
