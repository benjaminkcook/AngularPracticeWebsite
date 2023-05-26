// imports
import { Component } from '@angular/core'; 

// metadata & template
@Component ({ 
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1> 
		<pm-products></pm-products>
	</div>
  `
})

// class
export class AppComponent { 
  pageTitle: string = 'Ben Product Management';
}


// to create an angular application run
// ng new [application name] --prefix [prefix name]