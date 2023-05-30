// imports
import { Component } from '@angular/core'; 

// metadata & template
@Component ({ 
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
      <li><a class='btn btn-primary' routerLink='/products'>Product List</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `
})

// class
export class AppComponent { 
  pageTitle: string = 'Ben Product Management';
}


// to create an angular application run
// ng new [application name] --prefix [prefix name]