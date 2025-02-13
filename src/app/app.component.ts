import { JsonPipe } from '@angular/common'
import { Component, signal, inject } from '@angular/core'
import { Validators, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private fb = inject(NonNullableFormBuilder)

  readonly flavors = signal(['vanilla', 'caramel', 'chocolate'])
  readonly iceCreamForm = this.fb.group({
    customerName: 'Charlotte Smith',
    flavor: ['', Validators.required],
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
