import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../services/products-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsData : ProductsDataService) { }

  products : { imgUrl : string , name : string , price : number  , id : number}[];
  ngOnInit(): void {
    this.products = this.productsData.products
  }



  
}
