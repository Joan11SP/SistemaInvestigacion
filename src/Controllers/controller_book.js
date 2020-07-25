const book = require("../Models/model_book");

const saveBook = async (req, res) => {
  const save = await new book(req.body);
  const is_saved = await save.save();
  is_saved != null
    ? res.status(200).json({ mensaje: 1 })
    : res.status(200).json({ mensaje: 0 });
};
const allBooks = async (req, res) => {
  const all = await book.find({ status: { $in: [1] } });
  res.status(200).json(all);
};
const updateBook = async (req, res) => {
  const update = await book.updateOne(
    { _id: req.body._id },
    { $set: req.body }
  );
  res.status(200).json({ mensaje: 1 });
};
const deleteBook = async (req, res) => {
  const del = await book.updateOne(
    { _id: require.body._id },
    {
      $set: { status: 0 },
    }
  );
  res.status(200).json(del);
};
const countBook = async (req, res) => {
  const count = await book.find({ status: { $in: [1] } }).count();
  res.status(200).json(count);
};
module.exports = {
  saveBook,
  allBooks,
  updateBook,
  deleteBook,
  countBook,
};
