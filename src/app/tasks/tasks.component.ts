import { Component, OnInit } from '@angular/core';
import {TasksService} from "../services/tasks.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // @ts-ignore
  tasks: Array<any>;
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  onDelete(id: number) {
    this.tasksService.deleteTask(id).subscribe(item => {
      // @ts-ignore
      if (item.status == 200) {
        this.tasks = this.tasks.filter(task => task['id'] != id);
      }
    })
  }

  getTasks() {
    this.tasksService.getTasks(0, 100).subscribe((item: any) => {
      // @ts-ignore
      this.tasks = item['body']['content'];
    })
  }
}
