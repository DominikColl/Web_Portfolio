const { Contact, Sequelize } = require('../models')

exports.submitContact = async (req, res) => {
    console.log(req.body)
}
// exports.checkLogin = async (req, res) => {
//     const { nameLogin, passwordLogin } = req.body
//     let name = nameLogin
//     let password = passwordLogin
//     let ret = await Users.findOne({ where: { name, password } })
//     res.json(ret)
// }