import { Component, OnInit } from '@angular/core';
import {TeamsService} from "../services/teams.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  // @ts-ignore
  teams: Array<any>;
  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  onDelete(id: number) {
    this.teamsService.deleteTeam(id).subscribe(item => {
      // @ts-ignore
      if (item.status == 200) {
        this.teams = this.teams.filter(team => team['id'] != id);
      }
    })
  }

  getTeams() {
    this.teamsService.getTeams(0, 100).subscribe(item => {
      // @ts-ignore
      this.teams = item['body']['content'];
    })
  }
}
