import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public contentIsLoaded = false;

  constructor() {
    setTimeout(() => {
      console.log('Load profile');
      this.contentIsLoaded = true;
    }, 5000)
  }

  title = "Adam Paz Portfolio coming..";
}
