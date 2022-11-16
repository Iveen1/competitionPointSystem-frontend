import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CreateTask} from "../../../info/CreateTask";
import {TasksService} from "../../../services/tasks.service";

@Component({
  selector: 'app-task-edit-page',
  templateUrl: './task-edit-page.component.html',
  styleUrls: ['./task-edit-page.component.css']
})
export class TaskEditPageComponent implements OnInit {
  id: number = 0;
  form: any = {};
  isSuccess = false;
  isSubmitted = false;
  task: any;
  // @ts-ignore
  private createTask: CreateTask;
  constructor(private tasksService: TasksService, private router: Router, private route: ActivatedRoute) { }

  redirectUnknownPage() {
    this.router.navigate(['404']);
  }

  ngOnInit(): void {
    this.route.params.subscribe(item => {
      if (item['id'] == undefined) {
        this.redirectUnknownPage();
      } else {
        this.getTask(item['id']);
      }
    })
  }

  onSubmit() {
    this.createTask = new CreateTask(
      this.form.title,
      this.form.maxPoints
    );
    this.editTask(this.createTask);
    this.isSubmitted = true;
  }

  editTask(data: CreateTask) {
    this.tasksService.updateTask(this.id, data).subscribe((item: any) => {
      this.isSuccess = true;
      this.router.navigate(['/tasks']);
    }, error => {

    });
  }

  getTask(id: number) {
    this.tasksService.getTaskById(id).subscribe((item: any) => {
      this.id = id;
      this.task = item['body'];
      this.form.title = this.task.title;
      this.form.maxPoints = this.task.maxPoints;
    })
  }
}
