import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/shared/component/header/header.component';
import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionsStatementComponent } from './transactions-statement/transactions-statement.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TransactionComponent,
    TransactionsStatementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
