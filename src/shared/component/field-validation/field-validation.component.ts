import { Component, Input } from '@angular/core';

@Component({
  selector: 'vv-field-validation',
  templateUrl: './field-validation.component.html',
  styleUrls: ['./field-validation.component.scss']
})
export class FieldValidationComponent {

  @Input() errorMessage: string;
  @Input() displayError: boolean;

}
