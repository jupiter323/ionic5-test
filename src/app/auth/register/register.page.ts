import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  passwordIconName = 'eye-off'
  showPassword = false;
  constructor(private navCTR: NavController) { }

  ngOnInit() {
  }
  goBack() {
    this.navCTR.pop()
  }
  changeShowModePassword() {
    this.showPassword = !this.showPassword;
    this.passwordIconName = this.showPassword ? 'eye' : 'eye-off';
  }
}
