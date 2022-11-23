import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formValidator } from 'src/app/validators/form.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,     
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, formValidator()]],
      email: ['',[Validators.required, Validators.email]]
    })
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  addUser() {
    localStorage.setItem('user', JSON.stringify(this.form.value));
    this.form.reset();
  }

}
