import { async, TestBed } from '@angular/core/testing';
import { HeaderComponent } from 'src/shared/component/header/header.component';
import { FinancialControlComponent } from './financial-control.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionsStatementComponent } from './transactions-statement/transactions-statement.component';

describe('FinancialControlComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FinancialControlComponent,
        HeaderComponent,
        TransactionComponent,
        TransactionsStatementComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(FinancialControlComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
