"use strict";
function Largest(s) {
    var large = "";
    const arr = s.split(" ");
    arr.forEach(element => {
        if (element.length > large.length) {
            large = element;
        }
    });
    console.log(large);
}
Largest("My Name is Smitttt.");
