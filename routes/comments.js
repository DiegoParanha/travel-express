const express = require('express');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');


router.post('/posts/:id/comments', ensureLoggedIn, commentsCtrl.create);

router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);


router.put('/comments/:id', ensureLoggedIn, commentsCtrl.edit);

module.exports = router;