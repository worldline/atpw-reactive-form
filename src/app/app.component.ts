import { Component } from '@angular/core'
import { NonNullableFormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly flavors = ['vanilla', 'caramel', 'chocolate']
  readonly iceCreamForm = this.fb.group({
    customerName: 'Charlotte Smith',
    flavor: ['', Validators.required],
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
