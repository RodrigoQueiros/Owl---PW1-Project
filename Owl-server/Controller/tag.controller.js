//const connectL = require('./connect');
const Tag = require('../Models/tag.model.js')

async function get(req, res) {
    try {
        return res.send(await Tag.find())
    } catch (err) {
        return res.status(400).send({ error: `Could not get reviews: ${err}` })
    }
}


async function post(req, res) {
    try {
        Tag.create(req.body)
        return res.send()
    }

    catch (err) {
        return res.status(400).send({ error: `Could not create review: ${err}` })

    }
}


module.exports = { get, post }