const Sequelize = require("sequelize")

const seq = new Sequelize('koa2_weibo_db', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})
module.exports = seq

