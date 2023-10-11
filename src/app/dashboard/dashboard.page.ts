import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    console.log('Dashboard ngOnInit');
  }

  ionViewWillLeave() {
    console.log('Dashboard ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('Dashboard ionViewDidLeave');
  }

  ionViewWillEnter() {
    console.log('Dashboard ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('Dashboard ionViewDidEnter');
  }

  newapplication() {
    this.router.navigate(['/newapplication'])
  }
  totalrequestapplications() {
    this.router.navigate(['/totalrequestapplications'])
  }
}
