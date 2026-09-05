import { Products } from "./Product";

export class Cart{
  private products : {product : Products , quantity : number}[] = [];
  
  addProduct(product : Products , quantity : number) : void{
    this.products.push({
      product:product,
      quantity:quantity
    });
  }

  calculateTotalPrice():number{
    let total = 0;
    for(const item of this.products){
      total += item.product.price * item.quantity
    }
    return total;
  }
}