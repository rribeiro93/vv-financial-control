import { Injectable } from '@angular/core';
import { Transaction } from '../../transaction/model/transaction.model';

@Injectable()
export class SessionStorageService {

  private readonly KEY = 'transactions';
  private transactionList: Array<Transaction>;

  constructor() {
    this.transactionList = this.list;
  }

  /**
   * @description Save a single transaction to the storage
   * @param transaction New transaction
   */
  save(transaction: Transaction): void {

    this.transactionList.push(transaction);
    sessionStorage.setItem(this.KEY, JSON.stringify(this.transactionList));
  }

  /**
   * @description Save a list of transactions to the storage
   * @param transactions List of transactions
   */
  saveList(transactions: Array<Transaction>): void {

    const transactionList = JSON.stringify(transactions);
    sessionStorage.setItem(this.KEY, transactionList);
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
        this.saveList(transactions);
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

    return new Array<Transaction>();
  }

}
