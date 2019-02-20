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
      new Transaction(
        '+',
        'Lorem ipsum dolor sit amet',
        'R$ 12.999,99'
      ),
      new Transaction(
        '-',
        'Wuis nostrud exercitation',
        'R$ 99,99'
      ),
      new Transaction(
        '+',
        'Lorem ipsum',
        'R$ 9,99'
      )
    );

  }

}


class Transaction {

  type: string;
  statement: string;
  price: string;

  constructor(type: string, statement: string, price: string) {
    this.type = type;
    this.statement = statement;
    this.price = price;
  }
}
