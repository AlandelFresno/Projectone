import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { NotfoundComponent } from '../pages/notfound/notfound.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent}, // localhost:4200/home
  {path: '', component: WelcomeComponent},  // localhost:4200
  {path: '**', component: NotfoundComponent }, // display error 404 not found
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { };