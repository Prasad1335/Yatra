import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hotels = [
    { hotelImage: '/assets/images/log1.jfif' },
    { hotelImage: '/assets/images/log2.png' },
    { hotelImage: '/assets/images/yatra.png' }
  ];

  hotels2 = [
     
     { hotelImage: '/assets/images/log3.jfif' },
     { hotelImage: '/assets/images/log4.jfif' },
     { hotelImage: '/assets/images/log5.png' }
    
  ];

}
