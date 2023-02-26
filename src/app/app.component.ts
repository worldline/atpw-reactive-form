import { Component } from '@angular/core'
import { AbstractControl, NonNullableFormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly flavors = ['vanilla', 'caramel', 'chocolate', 'forbidden flavor']
  readonly iceCreamForm = this.fb.group({
    customerName: ['Charlotte Smith', [Validators.required, Validators.minLength(4)]],
    flavor: ['', [Validators.required, flavorNameValidator]],
    toppings: this.fb.group({
      first: 'Whipped cream',
      second: 'Chocolate sauce'
    })
  })

  constructor(
    private fb: NonNullableFormBuilder
  ) {}

  submitForm() {
    console.log('form value:', this.iceCreamForm.value)
    console.log('is form valid?', this.iceCreamForm.valid)
  }
}


function flavorNameValidator(control: AbstractControl): { [key: string]: string } | null {
  const flavors = ['vanilla', 'caramel', 'chocolate']
  if (flavors.includes(control.value)) {
    return null
  }

  return { 'bad flavor': `valid flavors are ${flavors}` }
}
