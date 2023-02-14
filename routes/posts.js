const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// All routes start with '/posts'

router.get('/', postsCtrl.index);
router.get('/new', ensureLoggedIn, postsCtrl.new);
router.get('/:id', postsCtrl.show);
router.post('/', ensureLoggedIn, postsCtrl.create);
router.delete('/posts/:id', ensureLoggedIn, postsCtrl.delete);


module.exports = router;