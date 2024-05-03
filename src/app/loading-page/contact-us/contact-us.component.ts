import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});

 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Initialize the form controls with FormBuilder
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', Validators.required],
      company: ['']
    });
  }

  // Convenience getter for easy access to form fields in the template
  get f() { return this.myForm.controls; }

  onSubmit() {
    // Implement your form submission logic here
    if (this.myForm.valid) {
      console.log(this.myForm.value); // You can replace this with your API call or other logic
      // Reset the form after submission
      this.myForm.reset();
    }
  }
}

