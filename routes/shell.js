var express = require('express');
var router = express.Router();
const execSync = require('child_process').execSync;

router.get('/', function(req, res, next) {
  const query = req.query;
  execSync('bash ./script/say.sh hoge ' + query.aaa);
  res.send('ok');
});

module.exports = router;
