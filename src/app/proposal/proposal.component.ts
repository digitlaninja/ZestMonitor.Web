import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {
  tab: number = 1;
  constructor() {}

  ngOnInit() {}
}
