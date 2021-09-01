const Blog = require("../model/blogSchema");

exports.Addblog = async (req, res) => {
  const { title, description, author, category } = req.body;
  const blog = new Blog({
    title,
    description,
    author,
    category,
  });
  try {
    await blog.save();

    res.status(201).json({ blog });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

exports.getblog = async (req, res) => {
  try {
    // finding something inside a model is time taking, so we need to add await
    const blogs = await Blog.find();
    // console.log(users);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.deleteBlogById = async (req, res) => {
  console.log(req.params.id);
  try {
    await Blog.deleteOne({ _id: req.params.id });
    res.status(201).json("User deleted Successfully");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
exports.editBlog = async (req, res) => {
  let user = await Blog.findById(req.params.id);
  user.title = req.body.title;
  user.description = req.body.description;
  user.author = req.body.author;
  user.category = req.body.category;

  return user.save().then((result) => {
    res.json({ result });
  });
};
