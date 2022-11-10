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

  redirectUnknownPage() {
    this.router.navigate(['404']);
  }

  ngOnInit(): void {
    this.route.params.subscribe(item => {
      if (item['id'] == undefined) {
        this.redirectUnknownPage();
      } else {
        this.getParticipant(item['id']);
        this.getTeams();
      }
    })
  }

  onSubmit() {
    this.createParticipant = new CreateParticipant(
      this.form.firstName,
      this.form.lastName,
    );
    this.participantsService.updateParticipant(this.id, this.createParticipant).subscribe(
      item => {
        // @ts-ignore
        if (item.status == 200) {
          this.isSuccess = true;
        };
      }
    )
    if (this.form.team == null && this.participant.team != null) { // если указана команда null в форме и у юзера есть команда
      this.teamsService.deleteParticipant(this.id, this.participant.team.id).subscribe((item: any) => {
        if (item.status == 200) {
          this.participant.team = null;
        }
      }, error => { this.isSuccess = false; })
    } else if (this.form.team == this.participant.team) { // если команда в форме является той, в которой юзер уже находится

    } else if (this.form.team != null && this.participant.team != null) { // если команда в форме не null
        this.teamsService.deleteParticipant(this.id, this.participant.team.id).subscribe((item: any) => {
          this.teamsService.addParticipant(this.id, this.form.team.id).subscribe((item: any) => {
            this.participant.team = this.form.team;
            this.getTeams();
          })
        }, error => { this.isSuccess = false; })

    } else if (this.form.team != null) {
      this.teamsService.addParticipant(this.id, this.form.team.id).subscribe((item: any) => {
        this.participant.team = this.form.team;
      }, error => { this.isSuccess = false; })
    }
    this.isSubmitted = true;
  }

  onDelete() {
    this.participantsService.deleteParticipant(this.id).subscribe((item: any) => {
      if (item.status == 200) {
        this.isSuccess = true;
        this.isSubmitted = true;
        this.router.navigate(['participants']);
      }
    })
  }

  getParticipant(id: number) {
    this.participantsService.getParticipantsById(id).subscribe((item: any) => {
      this.id = id;
      // @ts-ignore
      this.participant = item['body'];
      this.form.team = this.participant.team;
      this.form.firstName = this.participant.firstName;
      this.form.lastName = this.participant.lastName;
    }, error => {
      this.redirectUnknownPage();
    });
  }

  getTeams() {
    this.teamsService.getTeams(0, 100).subscribe((item: any) => {
      this.teams = item['body']['content'];
      this.disjointTeams = this.teams.filter(item => item['id'] != this.form.team.id);
    });
  }
}
