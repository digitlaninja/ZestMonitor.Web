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
  hash: string;
  constructor(private proposalPaymentsService: ProposalPaymentsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.name = params['name'];
    });

    // this.getProposal(this.name).subscribe((res: BlockchainProposal) => {
    //   console.log(`----- Proposal`, res);
    //   this.blockchainProposal = res;
    //   this.hash = res.hash;
    // });

    this.route.data.subscribe((data) => {
      this.blockchainProposal = data['blockchainProposal'];
    });
    // this.loadProposalPayments();

    this.getProposalpayment(this.blockchainProposal.hash).subscribe((res: ProposalPayment) => {
      if (!res) {
        this.proposalPayment = {
          hash: '',
          shortDescription: '',
          amount: 0,
          expectedPayment: 0,
          createdAt: ''
        };
        return;
        console.log(this.proposalPayment.hash);
      } else {
        this.proposalPayment = res;
      }
    });
  }

  public getProposal(name: string): Observable<BlockchainProposal> {
    return this.proposalPaymentsService.getProposal(this.name).pipe(
      catchError((error) => {
        return of(null); // creates fake response, as no real backend call needed
      })
    );
  }

  public getProposalpayment(hash: string): Observable<ProposalPayment> {
    return this.proposalPaymentsService.getProposalPayment(hash).pipe(
      catchError((error) => {
        return of(null); // creates fake response, as no real backend call needed
      })
    );
  }
}
