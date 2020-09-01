import { Component, Input } from '@angular/core';
import { ResumeDialogComponent } from '../resume/resume.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'web',
  templateUrl: './web.component.html',
  styleUrls: [ './web.component.css' ]
})
export class WebComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ResumeDialogComponent);
  }
}
