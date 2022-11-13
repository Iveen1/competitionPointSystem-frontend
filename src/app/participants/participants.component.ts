import { Component, OnInit } from '@angular/core';
import {ParticipantsService} from "../services/participants.service";

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  // @ts-ignore
  participants: Array<any>;
  constructor(private participantsService: ParticipantsService) { }

  ngOnInit(): void {
    this.getParticipants();
  }

  onDelete(id: number) {
    this.participantsService.deleteParticipant(id).subscribe(item => {
      // @ts-ignore
      if (item.status == 200) {
        this.participants = this.participants.filter(participant => participant['id'] != id);
      }
    })
  }

  getParticipants() {
    this.participantsService.getParticipants(0, 100).subscribe(item => {
      // @ts-ignore
      this.participants = item['body']['content'];
    })
  }

  countPoints(data: any) {
    let points = 0;
    for (let point of data['points']) {
      points += point['coefficient'] * point['task']['maxPoints'];
    }
    return points;
  }
}
