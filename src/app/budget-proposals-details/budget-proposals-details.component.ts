import { Component, OnInit, Input } from '@angular/core';
import { BlockchainProposal } from '../_models/BlockchainProposal';

@Component({
  selector: 'app-budget-proposals-details',
  templateUrl: './budget-proposals-details.component.html',
  styleUrls: ['./budget-proposals-details.component.scss']
})
export class BudgetProposalsDetailsComponent implements OnInit {
  @Input()
  public proposals: BlockchainProposal[] = [];
  constructor() {}

  ngOnInit() {}
}
