"use strict";
// Custom type guard function to check if an object is a Circle
function isCircle(shape) {
    // Implement the type guard logic here
    return shape.kind === 'circle';
}
// Custom type guard function to check if an object is a Square
function isSquare(shape) {
    // Implement the type guard logic here
    return shape.kind === 'square';
}
// Implement the following function
function printArea(shape) {
    // Use the custom type guards to safely calculate and print the area
    if (shape.kind === 'circle') {
        return 3.14 * shape.radius * shape.radius;
    }
    else {
        return shape.sideLength * shape.sideLength;
    }
}
const c1 = { kind: "circle", radius: 5 };
const s1 = { kind: "square", sideLength: 5 };
const ans1 = printArea(c1);
const ans2 = printArea(s1);
console.log(ans1, ans2);
