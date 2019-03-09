import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionStorageService } from '../services/session-storage-service/session-storage.service';
import { Transaction } from './model/transaction.model';

@Component({
  selector: 'vv-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  transactionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sessionStorageService: SessionStorageService
  ) { }

  ngOnInit(): void {

    this.transactionForm = this.formBuilder.group({
      transactionType: ['', Validators.required],
      statement: ['', Validators.required],
      price: ['', Validators.required]
    });

  }

  /**
   * @description Save transaction in case form is valid
   */
  addTransaction(): void {
    if (this.transactionForm.invalid) {
      return;
    }

    const newTransaction = this.transactionForm.value as Transaction;
    this.sessionStorageService.save(newTransaction);
  }

}
