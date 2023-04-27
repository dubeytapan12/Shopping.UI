import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User = new User();
  constructor(private formBuilder: FormBuilder, private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.user = this.loginForm.value;
      this.authService.login(this.user.username,this.user.password).subscribe({
        next: item=> {
          if(item.statusCode==100) {
            alert('invalid username or password');
          }
          else { 
          if(item.user.role.toLowerCase()=='admin') {
            this.router.navigate(['/admin']);
           }
           else {
            this.router.navigate(['/user']);
           }
           localStorage.setItem('user-data',JSON.stringify(item));
          }
        },
        error: e=> {
          alert('invalid username or password');
        }
      })
    }
  }
}
