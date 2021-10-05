import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../product';
import { ProductsApiService } from '../products-api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: IProduct | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsApiService: ProductsApiService
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    this.productsApiService.findProductByCode(code).subscribe({
      next: (product) => (this.product = product),
    });
  }
}
