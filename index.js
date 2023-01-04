// Your code here
class Cat{
  constructor(name){
    this.name = name
  }
  speak(){
    return `${this.name} says meow!`
  }
}
class Dog{
  constructor(name){
    this.name = name
  }
  speak(){
    return `${this.name} says woof!`
  }
}
class Bird{
  constructor(name, gender){
    this.name = name
    this.gender = gender
  }
  speak(){
    if(this.gender ==="female"){
      return `${this.name} says squawk!`
    }else{
      return `It's me! ${this.name}, the parrot!`
    }

  }
}
let garfield = new Cat("Garfield")
let gary = new Dog("Gary")
let Hilly = new Bird("Hilly", "male")
// console.log(garfield.speak())
// console.log(gary.speak())
console.log(Hilly.speak())