import { Component, VERSION } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ResumeDialogComponent } from './resume/resume.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'ANDRÉ KARRLEIN';

  tagline = 'I\'m a solution architect at Red Bull in Salzburg, Austria.';
  quote = 'When something is important enough, you do it even if the odds are not in your favor.';

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset)
  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ResumeDialogComponent);
  }
}


