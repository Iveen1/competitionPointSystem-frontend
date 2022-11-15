import { Component, OnInit } from '@angular/core';
import {ParticipantsService} from "../services/participants.service";
import {TeamsService} from "../services/teams.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private participantsService: ParticipantsService, private teamsService: TeamsService) { }
  pages: any = {participant: 0, team: 0};
  pagesInfo: any = {participant: -1, team: -1};
  participantData: any = [];
  teamData: any = [];

  ngOnInit(): void {
    this.getParticipants();
    this.getTeams();
  }

  getParticipants() {
    this.participantData = [];
    this.participantsService.getParticipants(this.pages['participant'], 5).subscribe((items: any) => {
      console.log(items)
      this.pagesInfo['participant'] = items.body.totalPages-1;
      for (let item of items.body.content) {
        this.participantData.push({name: `${item["firstName"]} ${item["lastName"]}`, value: this.countPoints(item)});
      }
      this.participantData = [...this.participantData];
      console.log(this.participantData)
    })
  }

  getTeams() {
    this.teamData = [];
    this.teamsService.getTeams(this.pages['team'], 5).subscribe((items: any) => {
      this.pagesInfo['team'] = items.body.totalPages-1;
      for (let item of items.body.content) {
        let points = 0;
        for (let participant of item.participants) {
          points += this.countPoints(participant);
        }
        if (points != 0) {
          points = points / item.participants.length;
        }
        this.teamData.push({name: item.name, value: points});
      }
      this.teamData = [...this.teamData];
    })
  }

  countPoints(data: any) {
    let points = 0;
    for (let point of data['points']) {
      points += point['coefficient'] * point['task']['maxPoints'];
    }
    return points;
  }

  nextPage(pageObj: any,) {
    if (this.pages[pageObj] < this.pagesInfo[pageObj]) {
      this.pages[pageObj] += 1;
      this.getParticipants();
      this.getTeams();
    }
  }

  prevPage(pageObj: any) {
    if (this.pages[pageObj] >= 1){
      this.pages[pageObj] -= 1;
      this.getParticipants();
      this.getTeams();
    }
  }
}
