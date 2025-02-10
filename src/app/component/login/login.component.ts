import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  // Initialize the form
  initializeForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Handle form submission and API call
  onSubmit() {
    if (this.form.valid) {
      const loginData = this.form.value;
      this.http.post('https://api.example.com/login', loginData).subscribe(
        (response) => {
          console.log('Login successful:', response);
          // Perform further actions like routing
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
    } else {
      console.warn('Form is invalid');
    }
  }
}
