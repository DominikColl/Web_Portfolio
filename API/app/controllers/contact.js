const { Contact, Sequelize } = require('../models')

exports.submitContact = async (req, res) => {
    console.log(req.body)
    const { name, email, reason } = req.body;
    let ret = await Contact.create({ name, email, reason })
    res.json(ret)
}
