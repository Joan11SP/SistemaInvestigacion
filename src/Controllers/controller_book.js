const book = require('../Models/model_book');

const saveBook = async (req, res) => {
    const { titulo, fecha_publicacion, personas, editorial, tipo_libro, numero_paginas, area_publicacion,
        isbn } = req.body

    const save = await new book({
        titulo, fecha_publicacion, personas, editorial, tipo_libro, numero_paginas, area_publicacion,
        isbn
    });
    save.save();
    res.status(200).json({mensaje:1});
}
const allBooks = async (req, res) => {
    const all = await book.find({status: { $in: [1] } });
    res.status(200).json(all)
}
const updateBook = async (req, res) => {
    const { _id, titulo, fecha_publicacion, personas, editorial, tipo_libro, numero_paginas, area_publicacion,
        isbn } = req.body

    const update = await book.updateOne({ _id: _id },
        {
            $set: {
                titulo, fecha_publicacion, personas, editorial, tipo_libro, numero_paginas, area_publicacion,
                isbn
            }
        });
    res.status(200).json({mensaje:1})
}
const deleteBook = async (req,res)=>{
    const del = await book.updateOne({_id:require.body._id}, {
        $set: {status:0}
    });
    res.status(200).json(del)
}
const countBook = async (req,res)=>{
    const count = await book.find({status: { $in: [1] } }).count()
    res.status(200).json(count)
}
module.exports = {
    saveBook,
    allBooks,
    updateBook,
    deleteBook,
    countBook
}