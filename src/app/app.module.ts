import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { ParticipantsComponent } from './participants/participants.component';
import { TasksComponent } from './tasks/tasks.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {HttpClientModule} from "@angular/common/http";
import { ParticipantPageComponent } from './participants/participant-page/participant-page.component';
import {FormsModule} from "@angular/forms";
import { ParticipantEditPageComponent } from './participants/participant-page/participant-edit-page/participant-edit-page.component';
import { ParticipantCreateComponent } from './participants/participant-create/participant-create.component';
import { TeamCreateComponent } from './teams/team-create/team-create.component';
import { TeamPageComponent } from './teams/team-page/team-page.component';
import { TeamEditPageComponent } from './teams/team-page/team-edit-page/team-edit-page.component';
import { TaskCreateComponent } from './tasks/task-create/task-create.component';
import { TaskEditPageComponent } from './tasks/task-page/task-edit-page/task-edit-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    ParticipantsComponent,
    TasksComponent,
    MainComponent,
    HeaderComponent,
    PagenotfoundComponent,
    ParticipantPageComponent,
    ParticipantEditPageComponent,
    ParticipantCreateComponent,
    TeamCreateComponent,
    TeamPageComponent,
    TeamEditPageComponent,
    TaskCreateComponent,
    TaskEditPageComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
