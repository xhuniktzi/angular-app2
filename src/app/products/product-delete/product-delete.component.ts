import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/common/product';
import { ProductsApiService } from 'src/app/data/products-api.service';
import { NotifyService } from 'src/app/shared/notify.service';

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
    private productsApiService: ProductsApiService,
    private notifyService: NotifyService
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    this.productsApiService.findProductByCode(code).subscribe({
      next: (product) => (this.product = product),
    });
  }

  onSubmit(): void {
    this.productsApiService.deleteProduct(this.product?.code).subscribe({
      next: () => {
        this.notifyService.show({
          type: 'success',
          msg: `producto: "${this.product?.code} - ${this.product?.name}" eliminado correctamente`,
        });
        this.router.navigate(['/products']);
      },
      error: (err) => {
        this.notifyService.show({
          type: 'error',
          msg: `${err}`,
        });
      },
    });
  }
}
