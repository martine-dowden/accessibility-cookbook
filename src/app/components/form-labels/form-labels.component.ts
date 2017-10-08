import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

declare var hljs: any;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-form-labels',
  templateUrl: './form-labels.component.html',
  styleUrls: ['./form-labels.component.scss'],
})
export class FormLabelsComponent implements OnInit, AfterViewInit {

  formAccessibility = false;  
  demoForm: FormGroup;
  idExampleForm: FormGroup;
  fieldsetExample: FormGroup;
  titleExample: FormGroup;
  
  @ViewChild('code') codeElement: ElementRef;
  @ViewChild('code2') codeElement2: ElementRef;
  @ViewChild('code3') codeElement3: ElementRef;

  constructor(
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
  ) {
    this.createForm();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    hljs.highlightBlock(this.codeElement.nativeElement);
    hljs.highlightBlock(this.codeElement2.nativeElement);
    hljs.highlightBlock(this.codeElement3.nativeElement);
  }

  createForm() {
    this.demoForm = this.fb.group({
      name: [''],
      email: ['', Validators.pattern(EMAIL_REGEX) ],
      feedback: ['', Validators.required]
    });
    this.idExampleForm = this.fb.group({
      name: [''],
      human: ['']
    });
    this.titleExample = this.fb.group({
      areaCode: [''],
      exchange: [''],
      lastDigits: ['']
    })
    this.fieldsetExample = this.fb.group({
      hamlet: ['a'],
    })
  }

  toggleForm() { this.formAccessibility = !this.formAccessibility}
  onSubmit() { this.openSnackBar() }

  openSnackBar() {
    if (this.demoForm.valid) {
      this.snackBar.open('Thanks for the feedback','', { duration: 2000 });
    }
  }
}
