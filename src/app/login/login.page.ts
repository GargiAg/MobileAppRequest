import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController) { }

  ngOnInit() {
    console.log('Login ngOnInit');
  }

  ionViewWillLeave() {
    console.log('Login ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('Login ionViewDidLeave');
  }

  ionViewWillEnter() {
    console.log('Login ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('Login ionViewDidEnter');
  }
  dashboard() {
    this.router.navigate(['/dashboard'])
  }

}
