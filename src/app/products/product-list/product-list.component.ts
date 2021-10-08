import { Component, OnInit } from '@angular/core';
import { NotifyService } from 'src/app/shared/notify.service';
import { IProduct } from '../../common/product';
import { ProductsApiService } from '../../data/products-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private productsApiService: ProductsApiService,
    private notifyService: NotifyService
  ) {}
  products: IProduct[] = [];

  ngOnInit(): void {
    this.productsApiService.getProducts().subscribe({
      next: (products) => (this.products = products),
      error: () => {
        this.notifyService.show({
          type: 'error',
          msg: 'Error al cargar la lista de productos',
        });
      },
    });
  }
}
