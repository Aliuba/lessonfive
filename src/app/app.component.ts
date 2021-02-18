import {Component} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this is lesson five';

  // TitleState(xxx): void {
  //   console.log(xxx);
  // }
  user = {name: 'kokos', age: 45};
users = [{name: 'kokos', age: 45}];
  // checkForm(myForm: NgForm): void {
  //   console.log(myForm);
  // }
  // @ts-ignore
  name = new FormControl('kokos', [Validators.required, Validators.minLength(10)]);
  age = new FormControl(123, Validators.required);

  myForm = new FormGroup({
    name: this.name,
    age: this.age
  });

  checkForm(myForm): void{
    this.users.push({name: myForm.controls.name.value, age: myForm.controls.age.value });
    console.log(myForm);
    console.log(this.users);
  }
}

