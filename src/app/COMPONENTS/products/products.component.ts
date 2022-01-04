import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../SERVICE/shopping-cart.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input()
  products: any[] = []; //takes products array passing from home.component


  constructor(private shopping_cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToCart(item: any){
    this.shopping_cart.addProduct(item)
  }

}
