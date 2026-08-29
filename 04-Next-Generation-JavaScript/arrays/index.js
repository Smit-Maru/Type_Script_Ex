"use strict";
const students = [
    {
        id: 1,
        name: "Mohan",
        collage: "VVP",
        marks: 60
    },
    {
        id: 2,
        name: "Rakesh",
        collage: "VVP",
        marks: 71
    },
    {
        id: 3,
        name: "Manohar",
        collage: "GECR",
        marks: 80
    },
    {
        id: 4,
        name: "Rohan",
        collage: "GECR",
        marks: 70
    },
    {
        id: 5,
        name: "Mohit",
        collage: "DARSHAN",
        marks: 31
    }
];
const stu = students.filter((obj) => obj.marks > 70);
console.log((stu));
const Name = students.map((stu) => stu.name);
console.log(Name);
students.forEach(stu => {
    if (stu.marks < 33) {
        stu.result = "Failed";
    }
    else {
        stu.result = "Pass";
    }
});
console.log(students);
