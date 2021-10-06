import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(private productsApiService: ProductsApiService) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm): void {
    // this.productsApiService.saveProduct(this.product);
  }
}
