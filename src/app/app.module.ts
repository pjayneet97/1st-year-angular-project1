import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { TestcompComponent } from './testcomp/testcomp.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './test/test.component';
import { StudentCardComponent } from './test/student-card/student-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    TestcompComponent,
    CurrencyConverterComponent,
    DashboardComponent,
    TestComponent,
    StudentCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
