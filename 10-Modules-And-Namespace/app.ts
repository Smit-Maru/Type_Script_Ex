import { Products } from './Product'
import { Cart } from './Cart'

const product1 = new Products("Laptop", 50000);
const product2 = new Products("Mouse", 1000);
const product3 = new Products("Keyboard", 2000);

const cart = new Cart();

cart.addProduct(product1, 1);
cart.addProduct(product2, 2);
cart.addProduct(product3, 1);

const totalPrice = cart.calculateTotalPrice();

console.log(`Total Price: ₹${totalPrice}`);
