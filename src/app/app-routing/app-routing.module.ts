import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from '../pages/album/album.component';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { NotfoundComponent } from '../pages/notfound/notfound.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},     // localhost:4200/home
  {path: '', component: WelcomeComponent},      // localhost:4200
  {path: 'login', component: LoginComponent},   // localhost:4200/login
  {path: 'album', component: AlbumComponent},   // /album
  {path: 'home/album', redirectTo: '/album', pathMatch: 'full'}, 
  {path: '**', component: NotfoundComponent }  // display error 404 not found
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { };
