export interface BlockchainProposal {
  name: string;
  url: string;
  hash: string;
  feeHash: string;
  amount: number;
  yeas: number;
  nays: number;
  abstains: number;
  ratio: number;
  isEstablished: string;
  isValid: string;
  isFunded: string;
  isValidReason: string;
  fValid: string;
}
