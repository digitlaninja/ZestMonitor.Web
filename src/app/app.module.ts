import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GovernanceComponent } from './governance/governance.component';
import { ProposalsComponent } from './proposals/proposals.component';

const appRoutes: Routes = [
  { path: 'governance', component: GovernanceComponent },
  { path: 'proposals', component: ProposalsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    GovernanceComponent,
    ProposalsComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), MDBBootstrapModule.forRoot()],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
