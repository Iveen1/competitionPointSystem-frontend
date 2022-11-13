import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PointsService} from "../services/points.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>, private pointsService: PointsService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  point = this.data.point.coefficient * this.data.point.task.maxPoints;
  error = false;
  coefficient: number = 0;
  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.point > this.data.point.task.maxPoints || this.point < 0) {
      this.error = true;
    } else {
      console.log(this.data.point)
      this.coefficient = this.point/this.data.point.task.maxPoints;
      if (this.data.point.id == -1){
        this.pointsService.createPoint(this.data.point.task.id, this.data.participant.id, this.coefficient).subscribe((item: any) => {
          this.data.point.id = item.response.id;
          this.data.point['coefficient'] = this.coefficient;
        }, error => {
          console.log("Какая-то ошибка...");
        })
      } else {

        this.pointsService.updatePoint(this.data.point.id, this.data.point.task.id, this.data.participant.id, this.coefficient).subscribe((item: any) => {
          this.data.point['coefficient'] = this.coefficient;
        }, error => {
          console.log("Какая-то ошибка...");
        })
      }

      this.closeDialog();
    }
  }
}
