const Course = require("../model/courseSchema");

exports.addCourse = async (req, res, next) => {
  const {
    name,
    description,
    author,
    education,
    experience,
    endDate,
    startDate,
    adRealPrice,
    adFakePrice,
    basicRealPrice,
    basicFakePrice,
  } = req.body;
  const course = new Course({
    name,
    description,
    author,
    education,
    experience,
    endDate,
    advancePrice: [
      {
        adRealPrice,
        adFakePrice,
      },
    ],
    basicPrice: [
      {
        basicRealPrice,
        basicFakePrice,
      },
    ],
    startDate,
  });
  try {
    await course.save();

    res.status(201).json({ course });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

exports.getCourse = async (req, res) => {
  try {
    // finding something inside a model is time taking, so we need to add await
    const course = await Course.find();
    // console.log(users);
    res.status(200).json(course);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
exports.deleteCourseById = async (req, res) => {
  console.log(req.params.id);
  try {
    await Course.deleteOne({ _id: req.params.id });
    res.status(201).json("Course deleted Successfully");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
exports.editCourse = async (req, res) => {
  console.log(req.body.adRealPrice);
  let user = await Course.findById(req.params.id);
  user.name = req.body.name;
  user.description = req.body.description;
  user.author = req.body.author;
  user.education = req.body.experience;
  user.endDate = req.body.endDate;
  user.startDate = req.body.startDate;
  user.basicPrice[0].basicRealPrice = req.body.basicRealPrice;
  user.basicPrice[0].basicFakePrice = req.body.basicFakePrice;
  user.advancePrice[0].adFakePrice = req.body.adFakePrice;
  user.advancePrice[0].adRealPrice = req.body.adRealPrice;

  return user.save().then((result) => {
    res.json({ result });
  });
};
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json(course);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
