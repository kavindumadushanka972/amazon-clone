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

  getCartLength = () => {
    let products = this.get_shopping_cart_items()
    return products ? this.get_shopping_cart_items().length : 0
  }

  getTotal = () => { // to get the total of check
    let items = this.get_shopping_cart_items();
    return items ?.reduce((acc: any, item: { price: any; }) => acc + item.price, 0) // adding item.price values
  }

  removeItem = (p: any) => {
    let items = this.get_shopping_cart_items();
    const index = items.findIndex((item: { id: any; }) => item.id == p.id)
    if(index >= 0){
        items.splice(index, 1);
        return localStorage.setItem('shopping_cart', JSON.stringify(items))
    }

  }
}
