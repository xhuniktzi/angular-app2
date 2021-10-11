import { Component, OnInit } from '@angular/core';
import { IResult } from 'src/app/common/result';
import { InvoiceApiService } from 'src/app/data/invoice-api.service';

@Component({
  selector: 'app-query-report',
  templateUrl: './query-report.component.html',
  styleUrls: ['./query-report.component.css'],
})
export class QueryReportComponent implements OnInit {
  queryIsVisible: boolean = true;
  results: IResult[] = [];
  startDate: string = '';
  endDate: string = '';
  serial: string | undefined;
  invoiceNumber: number | undefined;

  constructor(private invoiceApiService: InvoiceApiService) {}

  ngOnInit(): void {
    this.startDate = new Date().toISOString().split('T')[0];
    this.endDate = new Date().toISOString().split('T')[0];
  }

  toggle(): void {
    this.queryIsVisible = !this.queryIsVisible;
  }

  onSubmit(): void {
    this.queryIsVisible = false;
    this.invoiceApiService
      .findInvoices({
        Start_Date: this.startDate,
        End_Date: this.endDate,
        Serial_Number: this.serial,
        Invoice_Number: this.invoiceNumber,
      })
      .subscribe({
        next: (results) => {
          console.log(results);
          this.results = results;
        },
      });
  }
}
