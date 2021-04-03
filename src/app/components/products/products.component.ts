import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: ProductModel[] = [];
  constructor(private activatedRoute: ActivatedRoute) { 
    this.products = activatedRoute.snapshot.data['products'];
    console.log(this.products);
  }

  ngOnInit() {
  }

}
