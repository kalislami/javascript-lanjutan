var express = require('express');
var router = express.Router();
var getRecipe = require('./recipe')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>HTML Data</p>');
});

router.get('/recipes/step/:id?', getRecipe)

module.exports = router;
