class Queue{
  constructor(limit){
    this.limit = limit
    this.size = 0
    this.data = []
  }
  push(item){
    if(this.size < this.limit){
      this.data.push(item)
      this.size += 1
      return this
    }
    return "ERR: Exceeded allocated queue limit."
  }
  pop(){
    let item = this.data.splice(0,1)
    console.log("SPLICING",item)
    this.size -= 1
    return item[0]
  }
}

const queue = new Queue(5)

for(let i=0; i<6; i+=1){
  queue.push(i)
}

console.log(queue)

console.log(queue.pop())

console.log(queue)
