import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SliderComponent } from './components/slider/slider.component';
import { RequestComponent } from './components/request/request.component';
import { CardComponent } from './components/card/card.component';
import { ViewRequestComponent } from './components/view-request/view-request.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { RequestService } from './services/request.service';
import { TeamService } from './services/team.service';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { MapComponent } from './components/map/map.component';
import { SearchMapComponent } from './components/search-map/search-map.component';
import { ExploreComponent } from './components/explore/explore.component';
import { CardbyuserComponent } from './components/cardbyuser/cardbyuser.component';
import { CreateOrgComponent } from './components/create-org/create-org.component';
import { ViewOrgComponent } from './components/view-org/view-org.component';
import { ExploreOrgComponent } from './components/explore-org/explore-org.component';
import { CardOrgComponent } from './components/card-org/card-org.component';
import { CardByTeamComponent } from './components/card-by-team/card-by-team.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ViewReqAsOwnerComponent } from './components/view-req-as-owner/view-req-as-owner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    SliderComponent,
    RequestComponent,
    CardComponent,
    ViewRequestComponent,
    MapComponent,
    SearchMapComponent,
    ExploreComponent,
    CardbyuserComponent,
    CreateOrgComponent,
    ViewOrgComponent,
    ExploreOrgComponent,
    CardOrgComponent,
    CardByTeamComponent,
    ViewUserComponent,
    ViewReqAsOwnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    FlashMessagesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxGnabLzD3YRZK4KbUvDkJXeGgmvYUltg',
      libraries: ["places"]
    })
  ],
  providers: [
    ValidateService,
    AuthService,
    RequestService,
    TeamService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
