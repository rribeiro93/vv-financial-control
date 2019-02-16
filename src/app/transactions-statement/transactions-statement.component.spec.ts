import { async, TestBed } from '@angular/core/testing';
import { TransactionsStatementComponent } from './transactions-statement.component';

describe('TransactionsStatementComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TransactionsStatementComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TransactionsStatementComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
