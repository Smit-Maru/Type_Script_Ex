function Logger(constructor: Function){
  console.log("Decorator is calling");
  console.log(constructor);
}

@Logger
class User{
  name="Smit";
  constructor(){
    console.log("User Constructor is running");
  }
}

const user1 = new User();
console.log(user1);