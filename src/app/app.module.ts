import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { MgrDashboardComponent } from './component/mgr-dashboard/mgr-dashboard.component';
import { UserprofileComponent } from './component/userprofile/userprofile.component';
import { HolidaysCalendarComponent } from './holidays-calendar/holidays-calendar.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AngularMaterialModule } from './angular-material.module';
import { 
  MatDatepickerModule, 
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { DialogModalComponent } from './component/dialog-modal/dialog-modal.component';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
 
@NgModule({
  declarations: [

    AppComponent,
    LoginComponent,
    DashboardComponent,
    MgrDashboardComponent,
    UserprofileComponent,
    HolidaysCalendarComponent,
    DialogModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //AngularMaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,  
    MatDialogModule,
    MatSelectModule
  ],
  entryComponents: [
    DialogModalComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
