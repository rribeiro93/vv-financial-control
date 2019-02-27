import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'vv-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  transactionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.transactionForm = this.formBuilder.group({
      transactionType: ['', Validators.required],
      statement: ['', Validators.required],
      price: ['', Validators.required]
    });

  }

  addTransaction(): void {
    if (this.transactionForm.invalid) {
      return;
    }

    console.log('register transaction', this.transactionForm.controls);
  }

}
