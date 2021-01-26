const Sequelize = require("sequelize")

const seq = new Sequelize('koa2_weibo_db', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
})
module.exports = seq

