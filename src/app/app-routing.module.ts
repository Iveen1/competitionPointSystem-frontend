import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {ParticipantsComponent} from "./participants/participants.component";
import {TeamsComponent} from "./teams/teams.component";
import {PointsComponent} from "./points/points.component";
import {TasksComponent} from "./tasks/tasks.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {ParticipantPageComponent} from "./participants/participant-page/participant-page.component";
import {
  ParticipantEditPageComponent
} from "./participants/participant-page/participant-edit-page/participant-edit-page.component";
import {CreateParticipant} from "./info/CreateParticipant";
import {ParticipantCreateComponent} from "./participants/participant-create/participant-create.component";
import {TeamCreateComponent} from "./teams/team-create/team-create.component";
import {TeamPageComponent} from "./teams/team-page/team-page.component";
import {TeamEditPageComponent} from "./teams/team-page/team-edit-page/team-edit-page.component";

const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path:'participants',
    component: ParticipantsComponent
  },
  {
    path:'participants/create',
    component: ParticipantCreateComponent
  },
  {
    path:'participant/:id',
    component: ParticipantPageComponent
  },
  {
    path:'participant/:id/edit',
    component: ParticipantEditPageComponent
  },
  {
    path:'teams',
    component: TeamsComponent
  },
  {
    path:'teams/create',
    component: TeamCreateComponent
  },
  // {
  //   path:'team/:id',
  //   component: TeamPageComponent
  // },
  {
    path:'team/:id/edit',
    component: TeamEditPageComponent
  },
  {
    path:'tasks',
    component: TasksComponent
  },
  {
    path:'points',
    component: PointsComponent
  },
  {
    path: '**',
    redirectTo: '404',
  },
  {
    path: '404',
    component: PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // auto scroll-up
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
