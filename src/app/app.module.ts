import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  // define which component belongs to this module
  declarations: [ 
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  // define the external modules that we want available to all components that belong to this module
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  providers: [],
  // define the startup component of the application
  bootstrap: [AppComponent] 
})
export class AppModule { }