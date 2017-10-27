class Stack{
  constructor(limit){
    this.data = []
    this.limit = limit
    this.size = 0
  }
  push(item){
    if(this.size < this.limit){
      this.data.push(item);
      this.size += 1
      return this
    }
    return "ERR: Exceeded stack limit."
  }
  pop(){
    const item = this.data.pop()
    this.size -= 1
    return item
  }

}

const stack = new Stack(5);

for(let i=0; i<6; i++){
  console.log(stack.push(i))
}


console.log(stack.pop())
