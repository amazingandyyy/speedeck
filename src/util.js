const fs = require('fs')

class Printer {
  constructor(_target){
    this.logger = fs.createWriteStream(_target, {
      flags: 'a' // 'a' means appending (old data will be preserved)
    })
  }
  print(line){
    this.logger.write(line)
  }
  end(){
    this.logger.end()
  }
}

export {Printer}