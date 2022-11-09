import { Component, OnInit } from '@angular/core';
import {ParticipantsService} from "../services/participants.service";

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  participants: any;
  constructor(private participantsService: ParticipantsService) { }

  ngOnInit(): void {
    this.getParticipants();
  }

  getParticipants() {
    this.participantsService.getParticipants(0).subscribe(item => {
      // @ts-ignore
      this.participants = item['content'];
    })
  }
}
