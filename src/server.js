
const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post('/api/forgot-password', userController.forgotPassword);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
