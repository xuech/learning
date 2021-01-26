const { Blog, User } = require('./model')
!(async function () {
  const zs = await User.findOne({
    where: {
      userName: 'xch'
    }
  })
  console.log('find', zs.dataValues);

  const zsBlog = await Blog.findAll({
    where: {
      userId: 1
    },
    order: [
      ['id', 'desc']
    ]
  })
  // console.log(zsBlog.dataValues);
  console.log('zsBlog', zsBlog.map(blog => blog.dataValues));

  //联表查询
  const blogByUser = await Blog.findAndCountAll({
    order: [
      ['id', 'desc']
    ],
    include: [{
      model: User,
      attributes: ['userName', 'nickName'],
      where: {
        userName: 'xch'
      }
    }]
  })
  console.log('1',blogByUser.count);
  console.log('1', blogByUser.rows.map(blog => {
    const blogVal = blog.dataValues
    blogVal.user = blogVal.user.dataValues
    return blogVal
  }));
})()