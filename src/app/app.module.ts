import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule } from './products/products.module';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductDeleteComponent } from './products/product-delete/product-delete.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { SharedModule } from './shared/shared.module';
import { NotifyService } from './shared/notify.service';
import { ClientsModule } from './clients/clients.module';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ClientDeleteComponent } from './clients/client-delete/client-delete.component';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import { QueryReportComponent } from './reports/query-report/query-report.component';
import { ReportsModule } from './reports/reports.module';
import { InvoiceModule } from './invoice/invoice.module';
import { InvoiceCreateComponent } from './invoice/invoice-create/invoice-create.component';

@NgModule({
  providers: [NotifyService],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    ProductsModule,
    ClientsModule,
    ReportsModule,
    InvoiceModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/create', component: ProductCreateComponent },
      { path: 'products/detail/:code', component: ProductDetailComponent },
      { path: 'products/edit/:code', component: ProductEditComponent },
      { path: 'products/delete/:code', component: ProductDeleteComponent },
      { path: 'clients', component: ClientListComponent },
      { path: 'clients/create', component: ClientCreateComponent },
      { path: 'clients/detail/:id', component: ClientDetailComponent },
      { path: 'clients/edit/:id', component: ClientEditComponent },
      { path: 'clients/delete/:id', component: ClientDeleteComponent },
      { path: 'reports', component: QueryReportComponent },
      { path: 'invoices', component: InvoiceCreateComponent },
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '**', redirectTo: '/', pathMatch: 'full' },
    ]),
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
