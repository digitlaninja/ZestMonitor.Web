import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProposalMetaData } from '../_models/ProposalMetaData';
import { BlockchainProposal } from '../_models/BlockchainProposal';
import { PaginatedResult } from '../_models/pagination';
import { ProposalPayment } from '../_models/ProposalPayment';
import { environment } from '../../environments/environment';

@Injectable()
export class ProposalPaymentsService {
  private blockchainController = `${environment.apiUrl}/blockchainproposals`;
  private proposalPaymentsController = `${environment.apiUrl}/proposalpayments`;
  constructor(private http: HttpClient) {}

  public getProposalMetadata(): Observable<ProposalMetaData> {
    return this.http.get<ProposalMetaData>(`${this.blockchainController}/metadata`, { observe: 'response' }).pipe(
      map((response) => {
        return response.body;
      })
    );
  }

  public getProposal(name: string): Observable<BlockchainProposal> {
    return this.http.get<BlockchainProposal>(`${this.blockchainController}/${name}`, { observe: 'response' }).pipe(
      map((response) => {
        return response.body;
      })
    );
  }

  public getProposalPayment(hash: string): Observable<ProposalPayment> {
    return this.http.get<ProposalPayment>(`${this.proposalPaymentsController}/${hash}`, { observe: 'response' }).pipe(
      map((response) => {
        return response.body;
      })
    );
  }

  public getPaged(page?, itemsPerPage?): Observable<PaginatedResult<BlockchainProposal[]>> {
    const paginatedResult: PaginatedResult<BlockchainProposal[]> = new PaginatedResult<BlockchainProposal[]>();
    const params = new HttpParams({ fromObject: { pageNumber: page, pageSize: itemsPerPage } });

    return this.http.get<BlockchainProposal[]>(this.blockchainController, { observe: 'response', params }).pipe(
      map((response) => {
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
  }
}
