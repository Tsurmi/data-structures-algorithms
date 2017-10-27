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
  popSearch(searchItem){
    const tempData = [].concat(this.data)
    return tempData.find((item) => searchItem === item ) || "ERR: Item not found."
  }

}

const stack = new Stack(5);

for(let i=0; i<6; i++){
  stack.push(i)
}


console.log("I FOUND: ",stack.popSearch(2))
console.log("I DIDN'T FIND: ",stack.popSearch(7))
