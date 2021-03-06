import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MomentModule } from 'ngx-moment';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestComponent } from './components/request/request.component';
import { CardComponent } from './components/card/card.component';
import { ViewRequestComponent } from './components/view-request/view-request.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { RequestService } from './services/request.service';
import { TeamService } from './services/team.service';
import { PlaceService } from './services/place.service';
import { FeedbackService } from './services/feedback.service';
import { TwitterService } from './services/twitter.service';
import { AysBlogService } from './services/ays-blog.service';


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
import { ExplorePlacesComponent } from './components/explore-places/explore-places.component';
import { CardPlaceComponent } from './components/card-place/card-place.component';
import { CreatePlaceComponent } from './components/create-place/create-place.component';
import { ViewPlaceComponent } from './components/view-place/view-place.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { TweetsComponent } from './components/tweets/tweets.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { TweetPipe } from './pipes/tweet.pipe';
import { StripHtmlTagsPipe } from './pipes/strip-html-tags.pipe';
import { CardNewsComponent } from './components/card-news/card-news.component';
import { CardLatestRequestsComponent } from './components/card-latest-requests/card-latest-requests.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CardOrgByUserComponent } from './components/card-org-by-user/card-org-by-user.component';
import { ViewOrgAsOwnerComponent } from './components/view-org-as-owner/view-org-as-owner.component';
import { CardReqByOrgComponent } from './components/card-req-by-org/card-req-by-org.component';
import { MapPlaceComponent } from './components/map-place/map-place.component';
import { MapOrgComponent } from './components/map-org/map-org.component';
import { MapPlacesComponent } from './components/map-places/map-places.component';
import { VerificationComponent } from './components/verification/verification.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
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
    ViewReqAsOwnerComponent,
    ExplorePlacesComponent,
    CardPlaceComponent,
    CreatePlaceComponent,
    ViewPlaceComponent,
    FeedbackComponent,
    TweetsComponent,
    TweetComponent,
    TweetPipe,
    StripHtmlTagsPipe,
    CardNewsComponent,
    CardLatestRequestsComponent,
    AboutComponent,
    ContactComponent,
    CardOrgByUserComponent,
    ViewOrgAsOwnerComponent,
    CardReqByOrgComponent,
    MapPlaceComponent,
    MapOrgComponent,
    MapPlacesComponent,
    VerificationComponent
    
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
    }),
    MomentModule,
    HttpClientModule
  ],
  providers: [
    ValidateService,
    AuthService,
    RequestService,
    TeamService,
    AuthGuard,
    TwitterService,
    PlaceService,
    FeedbackService,
    HttpClientModule,
    AysBlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
