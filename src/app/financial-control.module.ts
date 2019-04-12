import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';
import { HeaderComponent } from 'src/shared/component/header/header.component';
import { FieldValidationComponent } from '../shared/component/field-validation/field-validation.component';
import { CustomCurrencyMaskCofig } from '../shared/config/custom-currency-mask.config';
import { FinancialControlComponent } from './financial-control.component';
import { SessionStorageService } from './services/session-storage-service/session-storage.service';
import { TransactionService } from './services/session-storage-service/transaction.service';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionsStatementComponent } from './transactions-statement/transactions-statement.component';

@NgModule({
  declarations: [
    FinancialControlComponent,
    HeaderComponent,
    TransactionComponent,
    TransactionsStatementComponent,
    FieldValidationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  providers: [
    SessionStorageService,
    TransactionService,
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskCofig }
  ],
  bootstrap: [FinancialControlComponent]
})
export class FinancialControlModule { }
