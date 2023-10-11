import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-totalrequestapplications',
  templateUrl: './totalrequestapplications.page.html',
  styleUrls: ['./totalrequestapplications.page.scss'],
})
export class TotalrequestapplicationsPage implements OnInit {
  segmentV = "total";
  // private selectedsegment: string = 'total'
  constructor(private router: Router) { }

  ngOnInit() {
  }
  dashboard() {
    this.router.navigate(['/dashboard'])
  }
  newapplication() {
    this.router.navigate(['/newapplication'])
  }
  segmentChanged(event: any) {
    console.log(event.target.value)
    // this.selectedsegment = event.target.value
  }

}
