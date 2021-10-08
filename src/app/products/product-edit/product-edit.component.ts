import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/common/product';
import { ProductsApiService } from 'src/app/data/products-api.service';
import { NotifyService } from 'src/app/shared/notify.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  product: IProduct = {
    product_Id: undefined,
    code: '',
    name: '',
    description: '',
    price: undefined,
    min_Quantity: undefined,
  };

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

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.productsApiService
        .updateProduct(this.product.code, this.product)
        .subscribe({
          next: () => {
            this.notifyService.show({
              type: 'success',
              msg: `producto: "${this.product.code} - ${this.product.name}" actualizado correctamente`,
            });
            this.router.navigate(['/products/detail', this.product.code]);
          },
          error: (err) => {
            this.notifyService.show({
              type: 'error',
              msg: `${err}`,
            });
          },
        });
    } else {
      this.notifyService.show({
        type: 'error',
        msg: 'Revisa que los campos esten llenados correctamente',
      });
    }
  }
}
