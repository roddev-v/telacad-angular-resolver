import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./components/products/products.component";
import { ProductsResolver } from "./resolvers/products.resolver";

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "products",
  },
  {
    path: "products",
    resolve: {
      products: ProductsResolver,
    },
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
