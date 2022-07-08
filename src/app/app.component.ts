import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Yatra Travel';
  page: string = 'userlog';
  constructor() {
    var admin = 'app-master-navbar';
    var user = 'app-wesiteb-navigation-bar';
    if(window.location.href.includes(admin))
      this.page="admin";
    else
      this.page="user";
  }
}
