interface Student{
  id : number,
  name : string,
  college : string,
  age:number,
  gender?:string
}

const students : Student[] = [
  {
    id: 1,
    name: 'Rohan',
    college: 'DARSHAN',
    age: 20
  },
  {
    id: 2,
    name: 'Rahul',
    college: 'GEC',
    age: 20
  },
  {
    id: 3,
    name: 'Ram',
    college: 'VVP',
    age: 20
  },
  {
    id: 4,
    name: 'Rakesh',
    college: 'DARSHAN',
    age: 20
  },
]

const arr = [];

const collegeCount: { [key: string]: number } = {};
students.forEach(stu => {
  if(collegeCount[stu.college]){
    collegeCount[stu.college] = collegeCount[stu.college] + 1;  
  } else {
    collegeCount[stu.college] = 1;  
  }
});

// convert this obj to objects..
const result = Object.entries(collegeCount).map(([college, count]) => {
  return {
    college: college,
    count: count
  };
});

console.log(result);