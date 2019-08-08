const fs = require('fs')

class Printer {
  constructor(_target){
    this.logger = fs.createWriteStream(_target, {
      flags: 'a' // 'a' means appending
    })
  }
  start() {
    this.logger.write(line)
  }
  print(line){
    this.logger.write(line)
  }
  end(){
    this.logger.end()
  }
}

export {Printer}