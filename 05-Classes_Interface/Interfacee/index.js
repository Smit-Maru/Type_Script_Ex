"use strict";
class Book {
    data = "";
    read() {
        return this.data;
    }
    write(s) {
        this.data += s;
    }
}
const book = new Book();
book.write("Hello ");
book.write("World!");
console.log(book.read());
