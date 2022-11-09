import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { ParticipantsComponent } from './participants/participants.component';
import { TasksComponent } from './tasks/tasks.component';
import { PointsComponent } from './points/points.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {HttpClientModule} from "@angular/common/http";
import { ParticipantPageComponent } from './participants/participant-page/participant-page.component';
import {FormsModule} from "@angular/forms";
import { ParticipantEditPageComponent } from './participants/participant-page/participant-edit-page/participant-edit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    ParticipantsComponent,
    TasksComponent,
    PointsComponent,
    MainComponent,
    HeaderComponent,
    PagenotfoundComponent,
    ParticipantPageComponent,
    ParticipantEditPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
