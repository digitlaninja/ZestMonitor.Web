import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GovernanceComponent } from './governance/governance.component';
import { ProposalsComponent } from './proposals/proposals.component';

@NgModule({
   declarations: [
      AppComponent,
      FooterComponent,
      HeaderComponent,
      GovernanceComponent,
      ProposalsComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
