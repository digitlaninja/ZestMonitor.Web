import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ProposalPaymentsService } from '../_services/proposal-payments.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BlockchainProposal } from '../_models/BlockchainProposal';

@Injectable()
export class ProposalResolver implements Resolve<BlockchainProposal> {
  pageNumber = 1;
  pageSize = 10;

  constructor(private proposalPaymentsService: ProposalPaymentsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<BlockchainProposal> {
    return this.proposalPaymentsService.getProposal(route.params['name']).pipe(
      catchError((error) => {
        return of(null); // creates fake response, as no real backend call needed
      })
    );
  }
}
