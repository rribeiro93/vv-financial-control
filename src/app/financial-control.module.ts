import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/shared/component/header/header.component';
import { FinancialControlComponent } from './financial-control.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionsStatementComponent } from './transactions-statement/transactions-statement.component';

@NgModule({
  declarations: [
    FinancialControlComponent,
    HeaderComponent,
    TransactionComponent,
    TransactionsStatementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FinancialControlComponent]
})
export class FinancialControlModule { }
