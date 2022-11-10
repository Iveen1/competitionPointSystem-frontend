import { Component, OnInit } from '@angular/core';
import {CreateParticipant} from "../../info/CreateParticipant";
import {ParticipantsService} from "../../services/participants.service";
import {TeamsService} from "../../services/teams.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-participant-create',
  templateUrl: './participant-create.component.html',
  styleUrls: ['./participant-create.component.css']
})
export class ParticipantCreateComponent implements OnInit {
  id: number = 0;
  form: any = {};
  isSuccess = false;
  isSubmitted = false;
  participant: any;
  // @ts-ignore
  private createParticipant: CreateParticipant;
  constructor(private participantsService: ParticipantsService, private teamsService: TeamsService, private router: Router, private route: ActivatedRoute) { }

  redirectUnknownPage() {
    this.router.navigate(['404']);
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.createParticipant = new CreateParticipant(
      this.form.firstName,
      this.form.lastName,
    );
    this.addParticipant(this.createParticipant);
    this.isSubmitted = true;
  }

  addParticipant(data: CreateParticipant) {
    this.participantsService.createParticipant(data).subscribe((item: any) => {
      this.router.navigate(['/participant', item['body']['id']]);
      this.isSuccess = true;
    }, error => {
      this.redirectUnknownPage();
    });
  }

}
