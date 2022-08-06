import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./product/products.component";
import { ProductdetailsComponent } from "./productDetails/productdetails.component";



const routes: Routes = [
    { path: "login", component: HomeComponent },
    { path: "", component: ProductsComponent },
    { path: "products", component: ProductsComponent },
    { path: "products/:id", component: ProductdetailsComponent }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
