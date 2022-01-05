import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shopping_cart_items: any[] = [];

  constructor() { }
  addProduct = (product: any) => {
    let items = this.get_shopping_cart_items()
    if(items){ // if already there are items, push product to it and store
      items.push(product)
      console.log(items)
      localStorage.setItem('shopping_cart', JSON.stringify(items)) 
    }else{ // if there are no items already, add it to shopping_cart_items array and store it
      this.shopping_cart_items.push(product);
      console.log(this.shopping_cart_items)
      localStorage.setItem('shopping_cart', JSON.stringify(this.shopping_cart_items))
    }
    
    
  }

  get_shopping_cart_items = () => {
    let items:any = localStorage.getItem('shopping_cart')
    return JSON.parse(items)
  }
}
