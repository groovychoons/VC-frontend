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
import { ExploreOrgComponent } from './components/explore-org/explore-org.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ViewReqAsOwnerComponent } from './components/view-req-as-owner/view-req-as-owner.component';
import { CreatePlaceComponent } from './components/create-place/create-place.component';
import { ViewPlaceComponent } from './components/view-place/view-place.component';
import { ExplorePlacesComponent } from './components/explore-places/explore-places.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ViewOrgAsOwnerComponent } from './components/view-org-as-owner/view-org-as-owner.component';
import { VerificationComponent } from './components/verification/verification.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'organisations', component: ExploreOrgComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'request', component: RequestComponent, canActivate:[AuthGuard]},
  {path: 'request/:id', component: ViewRequestComponent},
  {path: 'request/admin/:id', component: ViewReqAsOwnerComponent, canActivate:[AuthGuard]},
  {path: 'organisation/add', component: CreateOrgComponent, canActivate:[AuthGuard]},
  {path: 'organisation/:id', component: ViewOrgComponent},
  {path: 'place/add', component: CreatePlaceComponent, canActivate:[AuthGuard]},
  {path: 'places', component: ExplorePlacesComponent},
  {path: 'place/:id', component: ViewPlaceComponent},
  {path: 'user/:id', component: ViewUserComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: 'HomeComponent'},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'organisation/admin/:id', component: ViewOrgAsOwnerComponent, canActivate:[AuthGuard]},
  {path: 'getverified', component: VerificationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
