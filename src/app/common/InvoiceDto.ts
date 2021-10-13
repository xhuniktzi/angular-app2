import { IInvoiceDetailDto } from './InoviceDetailDto';

export interface IInvoiceDto {
  Serial_Number: string;
  Invoice_Number: number;
  Client_Id: number;
  Branch_Id: number;
  Order_Date: string;
  Product_Detail: IInvoiceDetailDto[];
}
