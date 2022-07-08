import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlightService } from 'src/app/services/Flight/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})

export class FlightSearchComponent implements OnInit {
  flightserch: any;
  formValue !: FormGroup

  constructor(private formbuilder: FormBuilder, private api: FlightService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({})
    this.api.getFlight().subscribe((res: any) => {
      this.flightserch = res;
      // console.log(this.flightserch);
    })
  }
}


