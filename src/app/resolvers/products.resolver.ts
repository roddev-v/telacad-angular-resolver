import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { ProductModel } from "../models/product.model";

@Injectable()
export class ProductsResolver implements Resolve<ProductModel[]> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): ProductModel[] | Observable<ProductModel[]> | Promise<ProductModel[]> {
    return [
      { name: "Laptop", price: 2100, stock: 10 },
      { name: "Watch", price: 150, stock: 10 },
      { name: "Dress", price: 60, stock: 10 },
      { name: "PC", price: 1000, stock: 200 },
      { name: "Phone", price: 500, stock: 14 },
      { name: "Gaming keyboard", price: 80, stock: 20 },
    ];
  }
}
