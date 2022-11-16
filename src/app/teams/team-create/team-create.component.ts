import { Component, OnInit } from '@angular/core';
import {TeamsService} from "../../services/teams.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CreateTeam} from "../../info/CreateTeam";

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {
  id: number = 0;
  form: any = {};
  isSuccess = false;
  isSubmitted = false;
  // @ts-ignore
  private createTeam: CreateTeam;
  constructor(private teamsService: TeamsService, private router: Router, private route: ActivatedRoute) { }

  redirectUnknownPage() {
    this.router.navigate(['404']);
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.createTeam = new CreateTeam(
      this.form.name
    );
    this.addTeam(this.createTeam);
    this.isSubmitted = true;
  }

  addTeam(data: CreateTeam) {
    this.teamsService.createTeam(data).subscribe((item: any) => {
      this.isSuccess = true;
      this.router.navigate(['/teams']);
    }, error => {

    });
  }
}
