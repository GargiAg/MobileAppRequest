import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newapplication',
  templateUrl: './newapplication.page.html',
  styleUrls: ['./newapplication.page.scss'],
})
export class NewapplicationPage implements OnInit {
  formData = {
    name: ""
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }
  totalrequestapplications() {
    console.log("onsubmit:", this.formData);
    this.router.navigate(['/totalrequestapplications'])
  }
  dashboard() {
    this.router.navigate(['/dashboard'])
  }

  // onSubmit() {
  //   console.log("onsubmit:", this.formData);
  // }


}
