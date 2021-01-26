const { User,Blog } = require('./model')
!(async function () {
  const update = await User.update({
   nickName: 'hahah' 
  }, {
      where: {
      userName: 'xch'
    }
  })
  console.log(update);

  // const deleteBlog = await Blog.destroy({
  //   where: {
  //     id: 1
  //   }
  // })
  // console.log(deleteBlog);
  
  const deleteUser = await User.destroy({
    where: {
      id: 2
    }
  })
   console.log(deleteUser);


})()