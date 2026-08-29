const arr1 : number[] = [10,20,30,40]
const arr2 : number[] = [50]

const obj1 : {} = {1:"smit",2:"Renish"}
const obj2 : {} = {3:"smit",4:"Renish"}

const arr : number[] = [...arr1,...arr2]
const obj : {} = {...obj1,...obj2}

console.log(arr);

console.log(obj);
