import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //PROPERTY DATA BINDING
  // <img [src]='imageUrl'>

  //INTERPOLATION, specify your variable insede ts file and referces to html file
  componentTitle = 'I am app compnent from app.components.ts';

  //EVENT BINDING - ACTION -EX CLICK A BUTTON

  clickHandler() {
    alert("I AM CLICKED");
  }

}
