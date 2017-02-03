import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public animateHeader : boolean = false;
  public animateHeight : boolean = false;
  public animateProfileIntro : boolean = false;

  constructor() {
    setTimeout(() => {
      this.animateHeader = true;
      setTimeout(() => {
        this.animateHeight = true;
      }, 500);
      setTimeout(() => {
        this.animateProfileIntro = true;
      }, 1000);

      // console.log(document.getElementsByClassName('profilePicContainer')[0].childNodes);
    }, 5000);
  }
}
