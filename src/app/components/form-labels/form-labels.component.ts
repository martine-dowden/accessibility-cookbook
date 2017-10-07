import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-form-labels',
  templateUrl: './form-labels.component.html',
  styleUrls: ['./form-labels.component.scss']
})
export class FormLabelsComponent implements OnInit {

  formAccessibility = false;  
  demoForm: FormGroup;
  

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar) {
    this.createForm();
  }

  ngOnInit() {
    console.log(this.demoForm)
  }

  createForm() {
    this.demoForm = this.fb.group({
      name: [''],
      email: ['', Validators.pattern(EMAIL_REGEX) ],
      feedback: ['', Validators.required]
    });
  }

  toggleForm() { this.formAccessibility = !this.formAccessibility}
  onSubmit() { this.openSnackBar() }

  openSnackBar() {
    this.snackBar.open('Thanks for the feedback','', { duration: 2000 });
  }
}
