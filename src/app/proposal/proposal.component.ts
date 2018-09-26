import { Component, OnInit } from '@angular/core';
import { BlockchainProposal } from '../_models/BlockchainProposal';
import { ProposalPayment } from '../_models/ProposalPayment';
import { ProposalPaymentsService } from '../_services/proposal-payments.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {
  tab: number;
  blockchainProposal: BlockchainProposal;
  proposalPayment: ProposalPayment;
  name: string;
  constructor(private proposalPaymentsService: ProposalPaymentsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.name = params['name'];
    });

    this.getProposal(this.name).subscribe((res: BlockchainProposal) => {
      this.blockchainProposal = res;
    });
  }

  public getProposal(name: string): Observable<BlockchainProposal> {
    return this.proposalPaymentsService.getProposal(this.name).pipe(
      catchError((error) => {
        return of(null); // creates fake response, as no real backend call needed
      })
    );
  }
}
