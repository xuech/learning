class Tencet {
  constructor() {
    this.arr = [];
    this.status = "王者正式上线"
  }
  attach(p) {
    this.arr.push(p)
  }
  publish(newStatus) {
    this.status = newStatus
    this.arr.forEach(player => player.updateApp(newStatus))
  }
}

// 观察者
class Player {
  constructor(name) {
    this.name = name
  }
  updateApp() {
    console.log(this.name + '开始下载新版本app');
  }
}

let player1 = new Player('张三')
let player2 = new Player('里斯')
let wzry = new Tencet()
wzry.attach(player1)
wzry.attach(player2)

wzry.publish("2.0版本正式更新")
wzry.publish("3.0版本正式更新")