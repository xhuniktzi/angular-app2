import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductsApiService } from '../products-api.service';

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
}
