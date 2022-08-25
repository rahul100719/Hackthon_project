import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',

  },
  {
    path:'dashbord',
    component:DashbordComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
