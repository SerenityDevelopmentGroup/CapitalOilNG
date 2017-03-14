import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProjectsComponent } from './projects/projects.component';
import { CreateComponent } from './projects/create/create.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { ProjectSubmitComponent } from './projects/project-submit/project-submit.component';
import { SharedComponent } from './shared/shared.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DrillingComponent } from './drilling/drilling.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FinancialComponent } from './financial/financial.component';
import { OperationsComponent } from './operations/operations.component';
import { LandComponent } from './land/land.component';
import { HesComponent } from './hes/hes.component';
import { ReservesComponent } from './reserves/reserves.component';
import { AttachmentsComponent } from './shared/attachments/attachments.component';
import { NotesComponent } from './shared/notes/notes.component';
import { TechnicalContactsComponent } from './shared/technical-contacts/technical-contacts.component';
import { UsersComponent } from './users/users.component';
import { ReportingComponent } from './reporting/reporting.component';
import { GeoprognosisComponent } from './geoprognosis/geoprognosis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    ProjectsComponent,
    CreateComponent,
    ProjectEditComponent,
    ProjectSubmitComponent,
    SharedComponent,
    DashboardComponent,
    DrillingComponent,
    FacilitiesComponent,
    FinancialComponent,
    OperationsComponent,
    LandComponent,
    HesComponent,
    ReservesComponent,
    AttachmentsComponent,
    NotesComponent,
    TechnicalContactsComponent,
    UsersComponent,
    ReportingComponent,
    GeoprognosisComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
