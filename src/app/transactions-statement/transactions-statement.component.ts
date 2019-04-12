import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransactionService } from '../services/session-storage-service/transaction.service';
import { Transaction } from '../transaction/model/transaction.model';
import { TransactionEnum } from '../transaction/transaction.enum';

@Component({
  selector: 'vv-transactions-statement',
  templateUrl: './transactions-statement.component.html',
  styleUrls: ['./transactions-statement.component.scss']
})
export class TransactionsStatementComponent implements OnInit, OnDestroy {

  totalTransactions = 0;

  transactionList: Array<Transaction>;
  resultType = '';

  private subscription = new Subscription();

  readonly PURCHASE = TransactionEnum.PURCHASE;
  readonly SALE = TransactionEnum.SALE;

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.transactionList = this.transactionService.list();
    this.sumTransactions();
    this.initListeners();
  }

  private initListeners(): void {
    this.subscription.add(
      this.transactionService
        .transactionSubject$
        .subscribe((transaction: Transaction) => {
          this.transactionList.push(transaction);
          this.sumTransactions();
        })
    );
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * @description Sum price values and define the final message
   */
  sumTransactions(): void {
    if (this.transactionList.length) {
      const sum = this.transactionList
        .map((transaction: Transaction) => transaction.priceCalc)
        .reduce((x: number, y: number) => Number(x) + Number(y));

      this.totalTransactions = sum;
      this.resultType = this.totalTransactions > 0 ? '[LUCRO]' : '[PREJUIZO]';
    }
  }

}
