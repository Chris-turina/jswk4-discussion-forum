import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { routing } from './app.routing';
import { WelcomeComponent } from './welcome/welcome.component';
import { CatsComponent } from './cats/cats.component';
import { TvsComponent } from './tvs/tvs.component';
import { NewDogPostComponent } from './new-dog-post/new-dog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    WelcomeComponent,
    CatsComponent,
    TvsComponent,
    NewDogPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
