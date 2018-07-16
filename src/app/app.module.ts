import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GovernanceComponent } from './governance/governance.component';
import { ProposalComponent } from './proposal/proposal.component';
import { BudgetProposalsDetailsComponent } from './budget-proposals-details/budget-proposals-details.component';
import { ProposalPaymentsComponent } from './proposal-payments/proposal-payments.component';

const appRoutes: Routes = [
  { path: 'governance', component: GovernanceComponent },
  { path: 'proposal', component: ProposalComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    GovernanceComponent,
    ProposalComponent,
    ProposalComponent,
    BudgetProposalsDetailsComponent,
    ProposalPaymentsComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), MDBBootstrapModule.forRoot()],
  schemas: [NO_ERRORS_SCHEMA],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
