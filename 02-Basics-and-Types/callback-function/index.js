"use strict";
function fun1(s, fn) {
    console.log(s);
    fn();
}
function fun2() {
    console.log("Hello World");
}
fun1("Prominrnt Pixel", fun2);
