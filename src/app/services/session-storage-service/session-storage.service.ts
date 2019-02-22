import { Injectable } from '@angular/core';
import { Transaction } from '../../transaction/model/transaction.model';

@Injectable()
export class SessionStorageService {

  constructor() { }

  readonly KEY = 'transactions';

  /**
   * @description Save transactions to the storage
   * @param transactions List of transactions
   */
  save(transactions: Array<Transaction>): void {

    const data = JSON.stringify(transactions);
    sessionStorage.setItem(this.KEY, data);
  }

  /**
   * @description Removes a transaction from transaction list
   * @param transactionCode Transaction code
   */
  delete(transactionCode: number): void {

    const transactions = this.list;

    if (transactions.length > 0) {

      const transactIndex = transactions.findIndex(
        (transaction: Transaction) => transaction.code === transactionCode
      );

      if (transactIndex) {
        transactions.splice(transactIndex, 1);
        this.save(transactions);
      }

    }
  }

  /**
   * @description Return list of transactions from session storage
   */
  get list(): Array<Transaction> {

    if (sessionStorage.length > 0) {

      const transactions = sessionStorage.getItem(this.KEY);

      if (transactions) {
        return JSON.parse(transactions) as Array<Transaction>;
      }

    }

    return null;
  }

}
