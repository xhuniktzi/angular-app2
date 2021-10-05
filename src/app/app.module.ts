import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule } from './products/products.module';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ProductsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
