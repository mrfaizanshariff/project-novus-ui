import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { AboutSectionComponent } from './pages/about-section/about-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponentComponent,
    AboutSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
