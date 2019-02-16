import { async, TestBed } from '@angular/core/testing';
import { TransactionComponent } from './transaction.component';

describe('TransactionComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TransactionComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TransactionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
