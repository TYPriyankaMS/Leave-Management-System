import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fromDate;
  datePickerConfig: Partial<BsDatepickerConfig>;
  leaveForm: FormGroup;
  compOffForm: FormGroup;
  minDate: Date;
  maxDate: Date;
  submitted = false;
  bsValue = new Date();
  constructor(private fb: FormBuilder) {
    this.minDate = new Date();
    this.maxDate = new Date();
    console.log('this is apply-leave');
    console.log('this is' + this.bsValue)
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-orange',
      showWeekNumbers: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2020, 11, 31)

    });
    console.log(this.datePickerConfig);
  }


  ngOnInit(): void {
    this.leaveForm = this.fb.group({
      fromDate: ['',Validators.required],
      toDate: ['', Validators.required]
    })

    this.compOffForm = this.fb.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    })

  }
  get f() { return this.leaveForm.controls; }

  get f1() { return this.compOffForm.controls; }

}
