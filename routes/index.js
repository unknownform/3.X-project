var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/results', function(req, res) {
  console.log(req.body.description);
  console.log(req.body.agree);
  console.log(req.body.icecream);
  console.log(req.body.iceCreamOther);
  res.render('index')
})

module.exports = router;
