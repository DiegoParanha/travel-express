const Post = require('../models/post');

module.exports ={
    index,
    show,
    new: newPost,
    create,
}

function index(req, res) {
    Post.find({}, function(err, posts) {
      res.render('posts/index', { title: 'All posts', posts });
    
    });
  };
  
function show(req, res) {
      Post.findById(req.params.id, function(err, flight) {
              res.render('posts/show', { title: 'Post Detail', post });
          });
      };
      
function newPost(req, res) {
        res.render('posts/new', {title: 'Add Post'});
      };

function create(req, res) {
    const post = new Post(req.body);
    post.save(function(err) {
        if (err) return res.redirect('/posts/new');
        res.redirect(`/posts${post._id}`);
    });
}
