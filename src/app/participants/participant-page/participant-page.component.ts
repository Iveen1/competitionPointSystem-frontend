import { Component, OnInit } from '@angular/core';
import {ParticipantsService} from "../../services/participants.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CreateParticipant} from "../../info/CreateParticipant";

@Component({
  selector: 'app-participant-page',
  templateUrl: './participant-page.component.html',
  styleUrls: ['./participant-page.component.css']
})
export class ParticipantPageComponent implements OnInit {
  id: number = 0;
  participant: any;
  // @ts-ignore
  private createParticipant: CreateParticipant;
  constructor(private participantsService: ParticipantsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(item => {
      if (item['id'] == undefined) {
        this.router.navigate(['404'])
      } else {
        this.id = item['id']
      }
    })
    this.getParticipant();
  }

  getParticipant() {
    this.participantsService.getParticipantsById(this.id).subscribe(item => {
      // @ts-ignore
      this.participant = item;
    });
  }
}
