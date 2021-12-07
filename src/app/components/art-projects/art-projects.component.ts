import { Component, OnInit } from '@angular/core';
import {ArtProjectsService } from 'src/app/services/art-projects.service'


@Component({
  selector: 'app-art-projects',
  templateUrl: './art-projects.component.html',
  styleUrls: ['./art-projects.component.scss']
})
export class ArtProjectsComponent implements OnInit {


  constructor(private artProjectsService: ArtProjectsService) { }

  ngOnInit() {
    this.artProjectsService.getImage().subscribe((resp: any) => {
      console.log(resp);
    });
  }
  

}


