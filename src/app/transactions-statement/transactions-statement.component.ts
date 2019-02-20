import { Component } from '@angular/core';

@Component({
  selector: 'vv-transactions-statement',
  templateUrl: './transactions-statement.component.html',
  styleUrls: ['./transactions-statement.component.scss']
})
export class TransactionsStatementComponent {

  transactionList = new Array<Transaction>();

  constructor() {

    this.transactionList.push(
      {
        type: '+',
        statement: 'Lorem ipsum dolor sit amet',
        price: 'R$ 12.999,99'
      },
      {
        type: '-',
        statement: 'Wuis nostrud exercitation',
        price: 'R$ 99,99'
      },
      {
        type: '+',
        statement: 'Lorem ipsum',
        price: 'R$ 9,99'
      }
    );

  }

}

class Transaction {
  type: string;
  statement: string;
  price: string;
}
