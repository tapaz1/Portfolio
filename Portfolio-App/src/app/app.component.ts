import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public animateHeader = false;
  public animateHeight = false;

  constructor() {
    setTimeout(() => {
      this.animateHeader = true;
      setTimeout(() => {
        this.animateHeight = true;
      }, 1000)
    }, 5000);
  }

  title = "Adam Paz Portfolio coming..";
}
