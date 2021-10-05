import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ProductEditComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  bootstrap: [ProductListComponent],
})
export class ProductsModule {}
