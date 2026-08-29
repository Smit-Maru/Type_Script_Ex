"use strict";
class Product {
    id = 0;
    name = "";
    amount = 0;
    stock = 0;
    // Getter Method
    getter() {
        return {
            id: this.id,
            name: this.name,
            amount: this.amount,
            stock: this.stock
        };
    }
    // Setter Method
    setter(id, name, amount, stock) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.stock = stock;
    }
    // Increase Stock
    increaseStock(quantity) {
        this.stock += quantity;
    }
    // Decrease Stock
    decreaseStock(quantity) {
        if (quantity <= this.stock) {
            this.stock -= quantity;
        }
        else {
            console.log("Not enough stock");
        }
    }
}
// Create Product Object
const pro = new Product();
// Assign Product Values
pro.setter(1, "Car", 1000000, 15);
console.log("------ After Setter ------");
console.log(pro.getter());
// Decrease Stock
console.log("------ Before Decrease Stock ------");
console.log(pro.getter());
pro.decreaseStock(5);
console.log("------ After Decrease Stock ------");
console.log(pro.getter());
// Increase Stock
console.log("------ Before Increase Stock ------");
console.log(pro.getter());
pro.increaseStock(5);
console.log("------ After Increase Stock ------");
console.log(pro.getter());
