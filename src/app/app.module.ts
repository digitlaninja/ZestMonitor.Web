import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GovernanceComponent } from './governance/governance.component';
import { ProposalComponent } from './proposal/proposal.component';
import { ProposalPaymentsComponent } from './proposal-payments/proposal-payments.component';
import { ProposalPaymentsService } from './_services/proposal-payments.service';
import { HttpClientModule } from '@angular/common/http';
import { Config } from './config/config';
import { ProposalPaymentsResolver } from './_resolvers/proposal-payments-list.resolver';
import { ProposalPaymentsMetadataResolver } from './_resolvers/proposal-payments-metadata.resolver';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap';
import { ProposalResolver } from './_resolvers/proposal.resolver';
import { RoundDecimalPipe } from './_pipes/rounddecimal.pipe';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'governance',
  //   pathMatch: 'full'
  // },
  {
    path: 'governance',
    component: GovernanceComponent,
    resolve: {
      proposals: ProposalPaymentsResolver,
      proposalMetadata: ProposalPaymentsMetadataResolver
    }
  },
  {
    path: 'proposal/:name',
    component: ProposalComponent,
    resolve: {
      blockchainProposal: ProposalResolver
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    GovernanceComponent,
    ProposalComponent,
    ProposalPaymentsComponent,
    RoundDecimalPipe
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), MDBBootstrapModule.forRoot(), PaginationModule, HttpClientModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    ProposalPaymentsService,
    Config,
    ProposalPaymentsResolver,
    ProposalPaymentsMetadataResolver,
    ProposalResolver,
    PaginationConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
