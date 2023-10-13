import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  /*stockAvailability: string;
  isInStock: boolean;
  products:string[]=[];
  constructor() {
    
    // Initialize properties in the constructor
    this.stockAvailability = 'In Stock';
    this.isInStock = true;
  }

  stockAvailibility(){
    if (!this.isInStock){
      return 
    }
  }

  ngOnInit(): void {
    
  }*/

  stockAvailability: string;
  isInStock: boolean;
  buttonColor: string = 'yellow'; 
  stock: number = 10;

  constructor() {
    this.stockAvailability = this.getStockAvailability(this.stock);
    this.isInStock = this.checkAvailability(this.stock);
  }


  checkAvailability(stock: number): boolean {
    return stock > 0;
  }


  getStockAvailability(stock: number): string {
    return stock > 0 ? 'In Stock' : 'Out of Stock';
  }

  
  buyNow() {
    if (this.isInStock) {
      this.stock -= 1; 
      this.stockAvailability = this.getStockAvailability(this.stock);
      this.isInStock = this.checkAvailability(this.stock);
    }
  }


}
