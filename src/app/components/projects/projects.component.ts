import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { GithubProjectsService } from 'src/app/services/github-projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  data: any;
  isDone = false;

  getProjects = () => {
    fetch('https://api.github.com/users/Atrigan23/repos')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
            this.data = data;
            this.isDone = true;
        }, 3000)
      })
      .catch((error) => console.log('Error'));
  };

  constructor(githubService: GithubProjectsService, public zone: NgZone) {}

  ngOnInit(): void {
    this.getProjects();
  }
}
