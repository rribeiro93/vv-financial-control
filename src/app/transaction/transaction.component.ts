import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../services/session-storage-service/transaction.service';
import { Transaction } from './model/transaction.model';
import { TransactionEnum } from './transaction.enum';

@Component({
  selector: 'vv-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  transactionForm: FormGroup;

  private formSubmitAttempt = false;

  readonly PURCHASE = TransactionEnum.PURCHASE;
  readonly SALE = TransactionEnum.SALE;

  constructor(
    private formBuilder: FormBuilder,
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.transactionForm = this.formBuilder.group({
      transactionType: ['', Validators.required],
      statement: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  /**
   * @description Check if the field is valid
   * @param field
   */
  isFieldValid(field: string): boolean {
    return !this.transactionForm.get(field).valid &&
      this.transactionForm.get(field).touched ||
      (this.transactionForm.get(field).untouched &&
        this.formSubmitAttempt);
  }

  /**
   * @description Save transaction in case form is valid
   */
  addTransaction(event: Event): void {
    event.preventDefault();

    this.formSubmitAttempt = true;
    if (this.transactionForm.invalid) {
      return;
    }

    const newTransaction = this.prepareTransaction(this.transactionForm.value);
    this.transactionService.save(newTransaction);
    this.resetForm();
  }

  private resetForm(): void {
    this.transactionForm.reset({
      transactionType: ''
    });
  }

  /**
   * @description Prepare transaction object to persist
   * @param transaction
   */
  private prepareTransaction(transaction: Transaction): Transaction {
    const priceCalc = transaction.transactionType === TransactionEnum.PURCHASE ?
      -(transaction.price) :
      transaction.price;

    return {
      code: transaction.code,
      transactionType: transaction.transactionType,
      statement: transaction.statement,
      price: transaction.price,
      priceCalc: priceCalc,
      slug: priceCalc > 0 ? '+' : '-'
    } as Transaction;
  }

}
