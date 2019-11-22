const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    var total = 0;
    var num = req.query.number;

    if ( isNaN(num)) {
        if ( num === 'xyz') {
        res.send('<h1>Wrong Parameter !</h1>');
        } else {
            var errormessage = "<h1>Sorry! There's been an error.";
            errormessage += "  Please try again! </h1>" ;
            res.send(errormessage);
        }
    }
    else {
        for (var i = 0; i <= num; i++) {
            total += i;
    }
    res.render('getData', { prompt: total} );
  }
    
 });

module.exports = router;