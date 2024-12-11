import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // The HTML tag for this component
  templateUrl: './app.component.html', // Template file
  styleUrls: ['./app.component.css'] // Stylesheet file (optional)
})
export class AppComponent {
  title = 'My Angular App'; // A simple property
  description = 'This is a basic Angular application.'; // Another property
  link = 'Click here to go to my website'
}
