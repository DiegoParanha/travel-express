var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Travel - Express' });
});


router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google', {
    scope: ['profile', 'email'],
    // Optional
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google', {
    successRedirect: '/',
    // Change to what's nest for YOUR app
    failureRedirect: '/' // in my app send back to home page
  }
));

router.get('/logout', function(req, res) {
  req.logout(function() {
    // Change path for your 'landing' page
    res.redirect('/');
  });
});

module.exports = router;
