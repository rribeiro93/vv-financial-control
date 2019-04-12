import { TransactionEnum } from '../transaction.enum';

export class Transaction {

  code: number;
  transactionType: TransactionEnum;
  statement: string;
  price: number;
  priceCalc: number;
  slug: string;

}
