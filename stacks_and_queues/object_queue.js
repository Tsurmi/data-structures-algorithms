class ObjectQueue{
  constructor(limit){
    this.limit = limit
    this.data = {}
    this.size = 0
  }
  push(item){
    if(this.size < this.limit){
      this.data[this.size] = item
      this.size += 1;
      return this
    }
    return "ERR: Exceeded allocated queue limit."
  }
  pop(){
    if(this.size){
      const pos = String(this.limit - this.size)
      const returnItem = this.data[pos]
      delete this.data[pos]
      this.size -= 1

      return returnItem
    }
    return "ERR: No data to pop."
  }
  popSearch(searchItem){
    for(const key in this.data){
      if(searchItem === this.data[key]){
        const returnItem = this.data[key]
        delete this.data[key]
        return returnItem
      }
      delete this.data[key]
    }
    return "ERR: Item not found."
  }

}

const objQueue = new ObjectQueue(5)
objQueue.push("Pumpkin")
objQueue.push("Ghost")
objQueue.push("Candy Corn")
objQueue.push("Vampire")
objQueue.push("Zombie")

console.log(objQueue)
console.log(objQueue.popSearch("Ghost"))
console.log(objQueue)
console.log(objQueue.popSearch("Ghost"))
