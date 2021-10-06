import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/common/product';
import { ProductsApiService } from 'src/app/data/products-api.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent implements OnInit {
  product: IProduct | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsApiService: ProductsApiService
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    this.productsApiService.findProductByCode(code).subscribe({
      next: (product) => (this.product = product),
    });
  }

  onSubmit(form: NgForm): void {
    this.productsApiService.deleteProduct(this.product?.code).subscribe({
      next: (data) => this.router.navigate(['/products']),
    });
  }
}
