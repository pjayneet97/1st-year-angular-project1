import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /*  displayMessage="none" */
  title = 'prod';
  constructor(){
/*     setTimeout(() => {
      this.displayMessage="block"
    }, 2000); */
  }
}
