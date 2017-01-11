import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public contentIsLoaded = false;
  public animateLoadingContainer = false;

  constructor() {
    setTimeout(() => {
      console.log('First timeout run..');
      this.animateLoadingContainer = true;
      setTimeout(() => {
          this.contentIsLoaded = true;
        console.log('Second timeout run..');

      }, 2000)
    }, 5000);
  }

  title = "Adam Paz Portfolio coming..";
}
