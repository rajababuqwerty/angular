import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
  { path: 'user', component: UserdetailsComponent },
  { path: 'admin', component: AdmindetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
