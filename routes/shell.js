var express = require('express');
var router = express.Router();
const execSync = require('child_process').execSync;

router.get('/', function(req, res, next) {
  const result =  execSync('ls ./');
  execSync('bash ./script/script1.bash');

  console.log(req);
  console.log(req.query);
  const query = req.query;

  execSync('bash ./script/script2.bash ' + query.aaa);

  res.send(query);
  // res.send('this is /shell index!' + result);
});

module.exports = router;
