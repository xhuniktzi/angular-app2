import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductsApiService } from '../products-api.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productsApiService: ProductsApiService) {}
  products: IProduct[] = [];

  ngOnInit(): void {
    this.productsApiService.getProducts().subscribe({
      next: (products) => (this.products = products),
    });
  }
}
