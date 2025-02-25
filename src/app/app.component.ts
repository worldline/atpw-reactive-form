import { JsonPipe } from '@angular/common'
import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly flavors = ['vanilla', 'caramel', 'chocolate']
  readonly iceCreamForm = new FormGroup({
    customerName: new FormControl('Charlotte Smith'),
    flavor: new FormControl('', Validators.required),
    toppings: new FormGroup({
      first: new FormControl('Whipped cream'),
      second: new FormControl('Chocolate sauce')
    })
  })

  submitForm() {
    console.log('form value:', this.iceCreamForm.value)
    console.log('is form valid?', this.iceCreamForm.valid)
  }
}
