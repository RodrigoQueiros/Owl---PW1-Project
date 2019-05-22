//const connectL = require('./connect');
const Book = require('../Models/book.model.js')
//const Tag = require('../Models/tag.model.js')

async function get(req, res) {
    const book = req.query
    try {
        //Searches mongodb for book with title x
        if (book.title || book.publisher || book.author) {
            console.log(book.title)
            console.log(book.author)
            console.log(book.publisher)
            return res.send(await Book.find({
                title: { $regex: new RegExp(book.title, "i") },
                author: { $regex: new RegExp(book.author, "i") },
                publisher: { $regex: new RegExp(book.publisher, "i") },
                //idTag: ObjectId({ $regex: new RegExp(book.idTag, "i") })
            }))
        } else if (book.idTag) {
            /* console.log(book.idTag)
             //console.log(Tag.find({tagDescription: "Desporto"}))
             const tagId = Tag.findOne({tagDescription: "Desporto"})
             console.log(tagId._id)
             return res.send(await Tag.find({tagDescription: "Desporto"}))*/


            return res.send(await Book.find({
                title: { $regex: new RegExp(book.title, "i") },
                author: { $regex: new RegExp(book.author, "i") },
                publisher: { $regex: new RegExp(book.publisher, "i") },
                idTag: book.idTag
            }))
        } else if (book.id) {
            console.log("id")
            return res.send(await Book.find({_id: book.id}))
        }
        else {
            console.log("else")
            return res.send(await Book.find())
        }

    } catch (err) {
        return res.status(400).send({ error: `Could not get books: ${err}` })
    }
}

async function post(req, res) {
    try {
        Book.create(req.body)
        return res.send()
    }

    catch (err) {
        return res.status(400).send({ error: `Could not create books: ${err}` })

    }
}


module.exports = { get, post }