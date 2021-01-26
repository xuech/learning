const { Blog, User } = require('./model')
!(async function () {
  // 创建用户
  const zs = await User.create({
    userName: '张三',
    password: '123456',
    nickName: 'zs'
  })

  const blog = await Blog.create({
    title: '111',
    content: 'test111',
    userId: 1
  })
  console.log(zs.dataValues);
})()