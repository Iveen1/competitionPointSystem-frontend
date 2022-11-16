import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CreateTask} from "../../info/CreateTask";
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  id: number = 0;
  form: any = {};
  isSuccess = false;
  isSubmitted = false;
  // @ts-ignore
  private createTask: CreateTask;
  constructor(private tasksService: TasksService, private router: Router, private route: ActivatedRoute) { }

  redirectUnknownPage() {
    this.router.navigate(['404']);
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.createTask = new CreateTask(
      this.form.title,
      this.form.maxPoints
    );
    this.addTask(this.createTask);
    this.isSubmitted = true;
  }

  addTask(data: CreateTask) {
    this.tasksService.createTask(data).subscribe((item: any) => {
      this.isSuccess = true;
      this.router.navigate(['/tasks']);
    }, error => {

    });
  }
}
