import { Component, OnInit } from '@angular/core';
import { ProposalMetaData } from '../_models/ProposalMetaData';
import { ProposalPaymentsService } from '../_services/proposal-payments.service';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from '../_models/pagination';
import { BlockchainProposal } from '../_models/BlockchainProposal';

@Component({
  selector: 'app-governance',
  templateUrl: './governance.component.html',
  styleUrls: ['./governance.component.scss']
})
export class GovernanceComponent implements OnInit {
  public proposals: BlockchainProposal[] = [];
  public proposalMetadata: ProposalMetaData;
  public pagination: Pagination;

  constructor(private proposalPaymentsService: ProposalPaymentsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.proposals = data['proposals'].result;
      this.pagination = data['proposals'].pagination;
      this.proposalMetadata = data['proposalMetadata'];
    });
    // this.loadProposalPayments();
  }

  loadProposalPayments(): void {
    this.proposalPaymentsService
      .getPaged(this.pagination.currentPage, this.pagination.itemsPerPage)
      .subscribe((res: PaginatedResult<BlockchainProposal[]>) => {
        this.proposals = res.result;
        this.pagination = res.pagination;
      });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadProposalPayments();
  }
}
