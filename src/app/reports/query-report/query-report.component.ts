import { Component, OnInit } from '@angular/core';
import { IBranch } from 'src/app/common/branch';
import { IClient } from 'src/app/common/client';
import { IProduct } from 'src/app/common/product';
import { IResult } from 'src/app/common/result';
import { InvoiceApiService } from 'src/app/data/invoice-api.service';

@Component({
  selector: 'app-query-report',
  templateUrl: './query-report.component.html',
  styleUrls: ['./query-report.component.css'],
})
export class QueryReportComponent implements OnInit {
  queryIsVisible: boolean = true;
  modalClientIsVisible: boolean = false;
  modalProductIsVisible: boolean = false;
  modalBranchIsVisible: boolean = false;

  startDate: string = '';
  endDate: string = '';
  serial: string | undefined;
  invoiceNumber: number | undefined;
  selectedClient: IClient | undefined;
  selectedProduct: IProduct | undefined;
  selectedBranch: IBranch | undefined;

  results: IResult[] = [];
  constructor(private invoiceApiService: InvoiceApiService) {}

  ngOnInit(): void {
    this.startDate = new Date().toISOString().split('T')[0];
    this.endDate = new Date().toISOString().split('T')[0];
  }

  toggle(): void {
    this.queryIsVisible = !this.queryIsVisible;
  }

  onSubmit(): void {
    this.invoiceApiService
      .findInvoices({
        Start_Date: this.startDate,
        End_Date: this.endDate,
        Serial_Number: this.serial,
        Invoice_Number: this.invoiceNumber,
        Client_Id: this.selectedClient?.client_Id,
        Product_Id: this.selectedProduct?.product_Id,
        Branch_Id: this.selectedBranch?.branch_Id,
      })
      .subscribe({
        next: (results) => {
          console.log(results);
          this.results = results;
        },
      });
  }

  clearForm(): void {
    this.startDate = new Date().toISOString().split('T')[0];
    this.endDate = new Date().toISOString().split('T')[0];
    this.serial = undefined;
    this.invoiceNumber = undefined;
    this.selectedClient = undefined;
    this.selectedProduct = undefined;
    this.selectedBranch = undefined;
  }

  openModalClient(): void {
    this.modalClientIsVisible = true;
  }

  openModalProduct(): void {
    this.modalProductIsVisible = true;
  }

  openModalBranch(): void {
    this.modalBranchIsVisible = true;
  }

  selectClient(client: IClient | undefined): void {
    this.selectedClient = client;
  }

  selectProduct(product: IProduct | undefined): void {
    this.selectedProduct = product;
  }

  selectBranch(branch: IBranch | undefined): void {
    this.selectedBranch = branch;
  }
}
