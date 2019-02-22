import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/shared/component/header/header.component';
import { FinancialControlComponent } from './financial-control.component';
import { SessionStorageService } from './services/session-storage-service/session-storage.service';
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
  providers: [
    SessionStorageService
  ],
  bootstrap: [FinancialControlComponent]
})
export class FinancialControlModule { }
