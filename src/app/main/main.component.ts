import { Component, OnInit } from '@angular/core';
import {ParticipantsService} from "../services/participants.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private participantsService: ParticipantsService) { }
  page = 0;
  pagesInfo: number = -1;
  data: any = [];

  ngOnInit(): void {
    this.getParticipants()
  }

  getParticipants() {
    this.data = [];
    this.participantsService.getParticipants(this.page, 5).subscribe((items: any) => {
      console.log(items)
      this.pagesInfo = items.body.totalPages;
      for (let item of items.body.content) {
        // @ts-ignore
        this.data.push({name: `${item["firstName"]} ${item["lastName"]}`, value: this.countPoints(item)});
      }
      console.log(this.data)
      this.data = [...this.data];
    })
  }

  countPoints(data: any) {
    let points = 0;
    for (let point of data['points']) {
      points += point['coefficient'] * point['task']['maxPoints'];
    }
    return points;
  }

  nextPage() {
    if (this.page < this.pagesInfo) {
      this.page += 1;
      this.getParticipants();
    }
  }

  prevPage() {
    if (this.page >= 1){
      this.page -= 1;
      this.getParticipants();
    }
  }
}
