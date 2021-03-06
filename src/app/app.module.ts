import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello.component';
import { LogoComponent } from './components/logo.component';
import { CopyrightComponent } from './components/copyright.component';
import { ResumeDialogComponent } from './resume/resume.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';
import { DataService } from './data.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDialogModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LogoComponent,
    CopyrightComponent,
    ResumeDialogComponent,
    WebComponent,
    MobileComponent,
  ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ ResumeDialogComponent ],
  providers: [DataService]
})
export class AppModule { }
