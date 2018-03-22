import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule , NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { UserService } from './user.service';
import {ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserdetailsComponentDialog } from './userdetails/userdetails.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { AdmindetailsComponent , AdmindetailsComponentDialog} from './admindetails/admindetails.component';
import {Inject} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent ,
    UserdetailsComponent,
    AdmindetailsComponent ,
    UserdetailsComponentDialog,
    AdmindetailsComponentDialog,
  ],
  imports: [
    BrowserModule, HttpClientModule , MatToolbarModule , MatSidenavModule ,
    BrowserAnimationsModule , NoopAnimationsModule , MatDividerModule , MatListModule ,
     MatMenuModule , MatButtonModule , MatSelectModule , ReactiveFormsModule, HttpModule , AppRoutingModule , MatInputModule , FormsModule
     , MatCardModule , MatDialogModule 
  ],
  entryComponents: [AppComponent ,AdmindetailsComponent ,UserdetailsComponent, UserdetailsComponentDialog , AdmindetailsComponentDialog],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
