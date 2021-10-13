import { IProduct } from './product';

export class InvoiceDetail {
  product: IProduct | undefined;
  quantity: number | undefined;

  public get total() {
    return (this.product?.price ?? 0) * (this.quantity ?? 0);
  }
}
