import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  fromDate;
  datePickerConfig: Partial<BsDatepickerConfig>;
  bsValue = new Date();
  constructor() {
    console.log('this is apply-leave');
    console.log('this is'+this.bsValue)
    this.datePickerConfig = Object.assign({}, { containerClass: 'theme-orange' });
    console.log(this.datePickerConfig);
  }
  ngOnInit() {
  }

}


