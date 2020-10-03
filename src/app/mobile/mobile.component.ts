import { Component, Input } from '@angular/core';
import { ResumeDialogComponent } from '../resume/resume.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'mobile',
  templateUrl: './mobile.component.html',
  styleUrls: [ './mobile.component.css' ]
})
export class MobileComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ResumeDialogComponent);
  }
}
