const express = require('express');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');


router.post('/posts/:id/comments', ensureLoggedIn, commentsCtrl.create);

router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);

router.get('/comments/:id/edit', ensureLoggedIn, commentsCtrl.edit);

router.put('/comments/:id', ensureLoggedIn, commentsCtrl.update);

module.exports = router;