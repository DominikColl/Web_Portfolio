const { Contact, Sequelize } = require('../models')

exports.submitContact = async (req, res) => {
    console.log(req.body)
    const { name, email, reason } = req.body;
    let ret = await Contact.create({ name, email, reason })
    res.json({ ret })
}
exports.deleteContact = async (req, res) => {
    const id = req.params.id
    let ret = await Contact.destroy({ where: { id } })
    res.json({ ret })
}