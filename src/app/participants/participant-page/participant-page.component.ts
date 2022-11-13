import { Component, OnInit } from '@angular/core';
import {ParticipantsService} from "../../services/participants.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PointsService} from "../../services/points.service";
import {TasksService} from "../../services/tasks.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../dialog/dialog.component";

@Component({
  selector: 'app-participant-page',
  templateUrl: './participant-page.component.html',
  styleUrls: ['./participant-page.component.css']
})
export class ParticipantPageComponent implements OnInit {
  id: number = 0;
  participant: any;
  tasks: any;
  points: any;
  table: Map<number, any> = new Map();
  isLoaded = false;
  totalPoints: number = 0;


  constructor(private participantsService: ParticipantsService, private pointsService: PointsService, private tasksService: TasksService, private router: Router, private route: ActivatedRoute,
              public dialog: MatDialog) { }

  redirectUnknownPage() {
    this.router.navigate(['404']);
  }

  ngOnInit(): void {
    this.route.params.subscribe(item => {
      if (item['id'] == undefined) {
        this.redirectUnknownPage();
      } else {
        this.getParticipant(item['id']);
      }
    })
  }

  getParticipant(id: number) {
    this.participantsService.getParticipantsById(id).subscribe(item => {
      this.id = id;
      // @ts-ignore
      this.participant = item['body'];
      this.getTasks();
      this.getPoints(id);
    }, error => {
      this.redirectUnknownPage();
    });
  }

  getTasks() {
    this.tasksService.getTasks(0, 1000).subscribe((item: any) => {
      this.tasks = item['body']['content'];
    })
  }

  getPoints(id: number) {
    this.pointsService.getPointsByParticipantId(id).subscribe((item: any) => {
      // @ts-ignore
      this.points = Object.assign({}, ...item['body']['points'].map((x: any) => ({[x.task.id]: x})));
      this.generateTable();
      this.isLoaded = true;
    })
  }

  generateTable() {
    this.totalPoints = 0;
    for (let task of this.tasks) {
      let taskPoint = this.points[task['id']];
      if (taskPoint == undefined) {
        this.points[task['id']] = {"id": -1, "coefficient": 0, task: task};
        taskPoint = this.points[task['id']];
      }
      this.table.set(task.id, taskPoint);
      this.totalPoints += taskPoint['coefficient'] * taskPoint['task']['maxPoints'];
    }
  }

  //
  openDialog(point: any, participant: any): void {
    console.log('before')
    console.log(this.points);
    console.log(this.table);
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {point: point, participant: participant}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.generateTable();
      console.log('after')
      console.log(this.points);
      console.log(this.table);
    });
  }
}
