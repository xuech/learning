const seq = require('./seq')
const model = require('./model')

seq.authenticate().then(() => {
  console.log('ok');
}).catch(() => {
  console.log('err');
})

seq.sync({ force: true }).then(() => {
  process.exit()
})