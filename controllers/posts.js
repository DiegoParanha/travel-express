const Post = require('../models/post');

module.exports ={
    index,
    show,
    new: newPost,
    create,
    edit,
    update,
    delete: deletePost,
}

function deletePost(req, res) {
  Post.findOneAndDelete(
    {_id: req.params.id, user: req.user._id}, function(err) {
      res.redirect('/posts');
    }
  );
}

function update(req, res) {
  Post.findOneAndUpdate(
    {_id: req.params.id, user: req.user._id},
    req.body,
    {new: true},
    function(err, post) {
      if (err || !post) return res.redirect('/posts');
      res.redirect(`/posts/${post._id}`);
    }
  );
}

function edit(req, res) {
  Post.findOne({_id: req.params.id, user: req.user._id}, function(err, post) {
    if (err || !post) return res.redirect('/posts');
    res.render('posts/edit', {post});
  });
};

function index(req, res) {
  if (req.query.continent) {
    Post.find({continent: req.query.continent}, function(err, posts) {
      res.render('posts/index', { title: req.query.continent, posts });
    });
  } else {
    Post.find({}, function(err, posts) {
      res.render('posts/index', { title: 'All Posts', posts });
    });
  }

  };
  
function show(req, res) {
      Post.findById(req.params.id, function(err, post) {
              res.render('posts/show', { title: 'Post Detail', post });
          });
      };
      
function newPost(req, res) {
        res.render('posts/new', {title: 'Add Post'});
      };

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const post = new Post(req.body);
    post.save(function(err) {
        if (err) return res.redirect('/posts/new');
        res.redirect(`/posts/${post._id}`);
    });
}
