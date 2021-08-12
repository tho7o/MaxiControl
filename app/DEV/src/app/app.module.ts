import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";

// ANIMATIONS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Routing
import { AppRoutingModule } from './app-routing.module';
import { routing, appRoutingProvider } from './app.routing';

//SERVICIOS
import { UserService } from './services/user.service';
import { MainService } from './services/main.service';

//Guards
import { UserGuard } from './services/user.guard';

//COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

//UTILITIES
import { getSpanishPaginatorIntl } from './utilities/spanish-paginator-intl';

//ANGULAR MATERIAL
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginatorIntl } from "@angular/material/paginator";
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { AddnewrecordComponent } from './components/addnewrecord/addnewrecord.component';
import { ViewrecordsComponent } from './components/viewrecords/viewrecords.component';
import { DiappersComponent } from './components/diappers/diappers.component';
import { BreastfeedingComponent } from './components/breastfeeding/breastfeeding.component';

//NUMBER PICKER
import {NumberPickerModule} from 'ng-number-picker';

const MATERIAL_MODULE = [
  MatProgressSpinnerModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    FooterComponent,
    AddnewrecordComponent,
    ViewrecordsComponent,
    DiappersComponent,
    BreastfeedingComponent
  ],
  imports: [
    BrowserAnimationsModule,  // ANIMATIONS
    NumberPickerModule, //number picker
    AppRoutingModule,
    CommonModule,
    routing,
    BrowserModule,
		FormsModule,
		HttpClientModule,
    MATERIAL_MODULE
  ],
  providers: [
    appRoutingProvider,
    UserService,
    MainService,
    UserGuard,
    { provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl()  } //SPANISH PAGINATOR
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
