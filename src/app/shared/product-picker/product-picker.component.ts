import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/common/product';
import { ProductsApiService } from 'src/app/data/products-api.service';

@Component({
  selector: 'app-product-picker',
  templateUrl: './product-picker.component.html',
  styleUrls: ['./product-picker.component.css'],
})
export class ProductPickerComponent implements OnInit {
  name: string = '';
  results: IProduct[] = [];

  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() currentProduct: EventEmitter<IProduct | undefined> =
    new EventEmitter<IProduct | undefined>();
  constructor(private productApiService: ProductsApiService) {}

  ngOnInit(): void {}

  close(): void {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  search(): void {
    if (this.name === null || this.name.match(/^ *$/) !== null) {
      this.productApiService.getProducts().subscribe({
        next: (results) => (this.results = results),
      });
    } else {
      this.productApiService.findProductByName(this.name).subscribe({
        next: (results) => (this.results = results),
      });
    }
  }

  select(product: IProduct): void {
    this.currentProduct.emit(product);
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
