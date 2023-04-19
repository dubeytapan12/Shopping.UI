import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService:AuthService) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(5)]],
      currentPassword: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
  this.authService.changePassword(this.changePasswordForm.value).subscribe({next: item=> { alert('password changed succsfully')}})
    console.log(this.changePasswordForm.value);
    this.changePasswordForm.reset();
  }

  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }

  get currentPassword() {
    return this.changePasswordForm.get('currentPassword');
  }
}
