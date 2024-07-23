import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { ProductsDataService } from '../services/products-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private serivceProducts : ProductsDataService , private activatedRoute : ActivatedRoute) { }

  productId : number;
  product : { imgUrl : string , name : string , price : number  , id : number};
  ngOnInit(): void {
    this.productId =  this.activatedRoute.snapshot.params['id']
    this.product = this.serivceProducts.products.find(item => item.id == this.productId)
  }

}
