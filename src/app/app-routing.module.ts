import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestComponent } from './components/request/request.component';
import { ViewRequestComponent } from './components/view-request/view-request.component';
import { ExploreComponent } from './components/explore/explore.component';
import { CreateOrgComponent } from './components/create-org/create-org.component';
import { ViewOrgComponent } from './components/view-org/view-org.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'explore', component: ExploreComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'request', component: RequestComponent, canActivate:[AuthGuard]},
  {path: 'request/:id', component: ViewRequestComponent},
  {path: 'organisation/add', component: CreateOrgComponent, canActivate:[AuthGuard]},
  {path: 'organisation/:id', component: ViewOrgComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
