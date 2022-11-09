import { Component, OnInit } from '@angular/core';
import {ParticipantsService} from "../../../services/participants.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CreateParticipant} from "../../../info/CreateParticipant";
import {TeamsService} from "../../../services/teams.service";

@Component({
  selector: 'app-participant-edit-page',
  templateUrl: './participant-edit-page.component.html',
  styleUrls: ['./participant-edit-page.component.css']
})
export class ParticipantEditPageComponent implements OnInit {
  id: number = 0;
  form: any = {};
  isSuccess = false;
  isSubmitted = false;
  participant: any;
  teams = [];
  disjointTeams = []
  // @ts-ignore
  private createParticipant: CreateParticipant;
  constructor(private participantsService: ParticipantsService, private teamsService: TeamsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(item => {
      if (item['id'] == undefined) {
        this.router.navigate(['404'])
      } else {
        this.id = item['id']
      }
    })
    this.getParticipant();
    this.getTeams();
  }

  onSubmit() {
    console.log(this.form)
    // this.isSubmitted = true;
    // const participant = [{
    //   "productId": this.id,
    //   "amount": this.form.amount
    // }];
    // this.createParticipant = new CreateParticipant(
    //   this.form.firstName,
    //   this.form.lastName,
    // );
    // this.participantsService.updateParticipant(this.id, this.createParticipant).subscribe(
    //   data => {
    //     // @ts-ignore
    //     if (data.status == 200) {
    //       this.isSuccess = true;
    //     };
    //   }
    // )
  }

  getParticipant() {
    this.participantsService.getParticipantsById(this.id).subscribe(item => {
      // @ts-ignore
      this.participant = item;
      this.form.team = this.participant.team;
      this.form.firstName = this.participant.firstName;
      this.form.lastName = this.participant.lastName;
    });
  }

  getTeams() {
    this.teamsService.getTeams(0, 100).subscribe(item => {
      // @ts-ignore
      this.teams = item['content'];
      this.disjointTeams = this.teams.filter(item => item['id'] != this.form.team.id);
    });
  }
}
