import { Component, OnInit } from '@angular/core';
import {CreateTeam} from "../../../info/CreateTeam";
import {TeamsService} from "../../../services/teams.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-team-edit-page',
  templateUrl: './team-edit-page.component.html',
  styleUrls: ['./team-edit-page.component.css']
})
export class TeamEditPageComponent implements OnInit {
  id: number = 0;
  form: any = {};
  isSuccess = false;
  isSubmitted = false;
  team: any;
  // @ts-ignore
  private createTeam: CreateTeam;
  constructor(private teamsService: TeamsService, private router: Router, private route: ActivatedRoute) { }

  redirectUnknownPage() {
    this.router.navigate(['404']);
  }

  ngOnInit(): void {
    this.route.params.subscribe(item => {
      if (item['id'] == undefined) {
        this.redirectUnknownPage();
      } else {
        this.getTeam(item['id']);
      }
    })
  }

  onSubmit() {
    this.createTeam = new CreateTeam(
      this.form.name
    );
    this.editTeam(this.createTeam);
    this.isSubmitted = true;
  }

  editTeam(data: CreateTeam) {
    this.teamsService.updateTeam(this.id, data).subscribe((item: any) => {
      this.isSuccess = true;
      this.router.navigate(['/teams']);
    }, error => {

    });
  }

  getTeam(id: number) {
    this.teamsService.getTeamById(id).subscribe((item: any) => {
      this.id = id;
      this.team = item['body'];
      this.form.name = this.team.name;
    })
  }
}
