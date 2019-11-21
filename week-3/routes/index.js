const express = require('express');
const router = express.Router();

// first parameter: location paremeter, second parameter: calllback funtion
router.get('/', (request, response) => {
  response.send('<h1>Hello, My Server!</h1>')
});

module.exports = router;
