import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";
import { Product } from "../interface";

@Component({
	selector: "Products",
	moduleId: module.id,
	templateUrl: "./products.component.html",
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	products: Product[] = [];

	constructor(private cs: CommonService) {
	}

	ngOnInit(): void {
		this.cs.getProduct().subscribe(res => {
			this.products = res.data;
			console.log(this.products);
		})
	}
}