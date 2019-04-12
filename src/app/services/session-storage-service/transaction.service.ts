import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Transaction } from '../../transaction/model/transaction.model';
import { SessionStorageService } from '../session-storage-service/session-storage.service';

@Injectable()
export class TransactionService {

  constructor(
    private sessionStorageService: SessionStorageService
  ) { }

  private transactionSubject = new Subject<Transaction>();
  transactionSubject$ = this.transactionSubject.asObservable();

  /**
   * @description --
   * @param transaction --
   */
  save(transaction: Transaction): void {
    this.sessionStorageService.save(transaction);
    this.transactionSubject.next(transaction);
  }

  list(): Array<Transaction> {
    return this.sessionStorageService.list;
  }

}
