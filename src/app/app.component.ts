import { JsonPipe } from '@angular/common'
import { Component, signal, inject } from '@angular/core'
import { Validators, ReactiveFormsModule, NonNullableFormBuilder, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private fb = inject(NonNullableFormBuilder)

  readonly flavors = signal(['vanilla', 'caramel', 'chocolate', 'forbidden flavor'])
  readonly iceCreamForm = this.fb.group({
    customerName: ['Charlotte Smith', [Validators.required, Validators.minLength(4)]],
    flavor: ['', [Validators.required, flavorNameValidator]],
    toppings: this.fb.group({
      first: 'Whipped cream',
      second: 'Chocolate sauce'
    })
  })

  submitForm() {
    console.log('form value:', this.iceCreamForm.value)
    console.log('is form valid?', this.iceCreamForm.valid)
  }
}


function flavorNameValidator(control: AbstractControl): Record<string, string> | null {
  const flavors = ['vanilla', 'caramel', 'chocolate']
  if (flavors.includes(control.value)) {
    return null
  }

  return { 'bad flavor': `valid flavors are ${flavors}` }
}
