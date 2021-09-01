const Category = require("../model/categorySchema");

exports.Addcategory = async (req, res) => {
  const { category } = req.body;
  const categorydata = new Category({
    category,
  });
  try {
    await categorydata.save();

    res.status(201).json({ categorydata });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
exports.getcategory = async (req, res) => {
  try {
    // finding something inside a model is time taking, so we need to add await
    const categorydata = await Category.find();
    // console.log(users);
    res.status(200).json(categorydata);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
