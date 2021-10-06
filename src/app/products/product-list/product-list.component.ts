import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../common/product';
import { ProductsApiService } from '../../data/products-api.service';

@Component({
  selector: 'app-product-list',
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
