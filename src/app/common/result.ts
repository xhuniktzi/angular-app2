export interface IResult {
  order_Id: number;
  serial_Number: string;
  invoice_Number: number;
  client_Name: string;
  client_Direction: string;
  client_Nit: string;
  branch_Id: number;
  branch_Name: string;
  branch_Direction: string;
  order_Date: string;
  product_Id: number;
  product_Code: string;
  product_Name: string;
  product_Description: string;
  quantity: number;
  price: number;
  total: number;
  order_Total: number;
}
