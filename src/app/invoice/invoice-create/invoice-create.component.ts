import { Component, OnInit } from '@angular/core';
import { IBranch } from 'src/app/common/branch';
import { IClient } from 'src/app/common/client';
import { IInvoiceDetailDto } from 'src/app/common/InoviceDetailDto';
import { InvoiceDetail } from 'src/app/common/invoiceDetail';
import { IProduct } from 'src/app/common/product';
import { InvoiceApiService } from 'src/app/data/invoice-api.service';
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

  constructor(
    private notifyService: NotifyService,
    private invoiceApiService: InvoiceApiService
  ) {}

  ngOnInit(): void {
    this.orderDate = new Date().toISOString().split('T')[0];
  }

  onSubmit(): void {
    if (this.orderDate === null || this.orderDate.match(/^ *$/) !== null) {
      console.error('fecha');
      this.notifyService.show({
        type: 'error',
        msg: 'Debes ingresar una fecha valida',
      });
    } else if (
      this.serial === undefined ||
      this.serial.match(/^ *$/) !== null
    ) {
      this.notifyService.show({
        type: 'error',
        msg: 'Debes ingresar una serie para la factura',
      });
    } else if (
      this.invoiceNumber === undefined ||
      this.invoiceNumber === null
    ) {
      this.notifyService.show({
        type: 'error',
        msg: 'Debes ingresar un numero de factura',
      });
    } else if (this.selectedClient === undefined) {
      this.notifyService.show({
        type: 'error',
        msg: 'Debes seleccionar un cliente',
      });
    } else if (this.selectedBranch === undefined) {
      this.notifyService.show({
        type: 'error',
        msg: 'Debes seleccionar una sucursal',
      });
    } else if (!(this.productList.length > 0)) {
      this.notifyService.show({
        type: 'error',
        msg: 'Debes tener al menos un producto agregado',
      });
    } else {
      const details = this.productList.map((item) => {
        const detail: IInvoiceDetailDto = {
          Product_Id: item.product?.product_Id ?? 0,
          Quantity: item.quantity ?? 0,
        };
        return detail;
      });

      this.invoiceApiService
        .saveInvoice({
          Serial_Number: this.serial ?? '0',
          Invoice_Number: this.invoiceNumber ?? 0,
          Client_Id: this.selectedClient?.client_Id ?? 0,
          Branch_Id: this.selectedBranch?.branch_Id ?? 0,
          Order_Date: this.orderDate,
          Product_Detail: details,
        })
        .subscribe({
          next: () => {
            this.notifyService.show({
              type: 'success',
              msg: 'Factura creada correctamente',
            });
            this.clearForm();
          },
          error: (err) => {
            this.notifyService.show({
              type: 'error',
              msg: `${err}`,
            });
          },
        });
    }
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
    } else if (this.selectedProduct === undefined) {
      this.notifyService.show({
        type: 'error',
        msg: 'Debes seleccionar un producto',
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
