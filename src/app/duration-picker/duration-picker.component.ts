import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-duration-picker',
  templateUrl: './duration-picker.component.html',
  styleUrls: ['./duration-picker.component.scss']
})
export class DurationPickerComponent implements OnInit {

  durationModes = [ 'daily', 'weekly', 'monthly', 'yearly', 'custom' ];
  fromDate = new FormControl(new Date());
  toDate = new FormControl(new Date());

  constructor() { }

  ngOnInit() {
  }

}
