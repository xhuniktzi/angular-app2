import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/shared/notify.service';
import { IProduct } from '../../common/product';
import { ProductsApiService } from '../../data/products-api.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  product: IProduct = {
    product_Id: undefined,
    code: '',
    name: '',
    description: '',
    price: undefined,
    min_Quantity: undefined,
  };

  constructor(
    private productsApiService: ProductsApiService,
    private router: Router,
    private notifyService: NotifyService
  ) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.productsApiService.saveProduct(this.product).subscribe({
        next: (data) => {
          this.notifyService.show(
            `producto: ${data.code} - ${data.name} creado`
          );
          this.router.navigate(['/products/detail', data.code]);
        },
      });
    }
  }
}
