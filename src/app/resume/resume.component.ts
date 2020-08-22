import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Experience } from '../models/experience.model';
import { DataService } from '../data.service';

@Component({
  selector: 'resume-dialog',
  templateUrl: 'resume.component.html',
  styleUrls: [ './resume.component.css' ]
})
export class ResumeDialogComponent implements OnInit {
  experiences$: Experience[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getExperience()
      .subscribe(data => this.experiences$ = data);
  }
}
