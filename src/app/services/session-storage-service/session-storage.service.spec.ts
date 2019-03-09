import { async, TestBed } from '@angular/core/testing';
import { Transaction } from '../../transaction/model/transaction.model';
import { SessionStorageService } from './session-storage.service';

describe('SessionStorageService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SessionStorageService,
      ],
    }).compileComponents();
  }));

  beforeAll(() => {

    const transactions = new Array<Transaction>();

    it('should save one transaction to storage', async(() => {

      const transaction = new Transaction();
      transaction.code = 1;
      transaction.type = 'Compra';
      transaction.statement = 'Monitor LCD LG 14';
      transaction.price = 'R$ 789,00';

      transactions.push(transaction);

    }));


  });

});
