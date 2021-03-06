import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotifyService } from 'src/app/shared/notify.service';
import { IProduct } from '../../common/product';
import { ProductsApiService } from '../../data/products-api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: IProduct | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsApiService: ProductsApiService,
    private notifyService: NotifyService
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    this.productsApiService.findProductByCode(code).subscribe({
      next: (product) => (this.product = product),
      error: () => {
        this.notifyService.show({
          type: 'error',
          msg: 'El producto no existe',
        });
      },
    });
  }
}
