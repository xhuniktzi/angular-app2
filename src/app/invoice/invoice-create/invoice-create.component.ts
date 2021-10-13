import { Component, OnInit } from '@angular/core';
import { IBranch } from 'src/app/common/branch';
import { IClient } from 'src/app/common/client';
import { InvoiceDetail } from 'src/app/common/invoiceDetail';
import { IProduct } from 'src/app/common/product';
import { NotifyService } from 'src/app/shared/notify.service';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css'],
})
export class InvoiceCreateComponent implements OnInit {
  queryIsVisible: boolean = true;
  modalClientIsVisible: boolean = false;
  modalBranchIsVisible: boolean = false;
  modalProductIsVisible: boolean = false;

  orderDate: string = '';
  serial: string | undefined;
  invoiceNumber: number | undefined;
  selectedClient: IClient | undefined;
  selectedBranch: IBranch | undefined;

  selectedProduct: IProduct | undefined;
  quantity: number | undefined;

  productList: InvoiceDetail[] = [];

  constructor(private notifyService: NotifyService) {}

  ngOnInit(): void {
    this.orderDate = new Date().toISOString().split('T')[0];
  }

  onSubmit(): void {
    console.log('submit');
  }

  clearForm(): void {
    this.orderDate = new Date().toISOString().split('T')[0];
    this.serial = undefined;
    this.invoiceNumber = undefined;
    this.selectedClient = undefined;
    this.selectedBranch = undefined;
    this.selectedProduct = undefined;
    this.quantity = undefined;

    this.productList.splice(0, this.productList.length);
  }

  toggle(): void {
    this.queryIsVisible = !this.queryIsVisible;
  }

  openModalClient(): void {
    this.modalClientIsVisible = true;
  }

  openModalBranch(): void {
    this.modalBranchIsVisible = true;
  }

  openModalProduct(): void {
    this.modalProductIsVisible = true;
  }

  selectClient(client: IClient | undefined): void {
    this.selectedClient = client;
  }

  selectBranch(branch: IBranch | undefined): void {
    this.selectedBranch = branch;
  }

  selectProduct(product: IProduct | undefined): void {
    this.selectedProduct = product;
  }

  addProduct(): void {
    const detail = new InvoiceDetail();
    detail.product = this.selectedProduct;
    detail.quantity = this.quantity;

    const duplicates: number = this.productList.filter(
      (item) => item.product?.product_Id == detail.product?.product_Id
    ).length;

    if (duplicates > 0) {
      this.notifyService.show({
        type: 'error',
        msg: 'No puedes ingresar un producto dos veces',
      });
    } else if (!((this.quantity ?? 0) > 0)) {
      this.notifyService.show({
        type: 'error',
        msg: 'debes ingresar una cantidad mayor a 0',
      });
    } else {
      this.productList.push(detail);
      this.selectedProduct = undefined;
      this.quantity = undefined;
    }
  }

  removeProduct(detail: InvoiceDetail): void {
    this.productList = this.productList.filter(
      (item) => item.product?.product_Id != detail.product?.product_Id
    );
  }
}
