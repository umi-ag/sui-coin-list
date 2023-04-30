// import type { CoinMetadata } from '@mysten/sui.js';
// import { ProtocolName } from "./objectIdBook";

export interface  CoinData {
  type: string;
  objectId: string;
  protocol: string;
  name: string;
  supply: number | null;
  denom: string;
  packageId: string;
  createTimestamp: number | null;
  creator: string | null;
  validatorName: string | null;
  validatorImage: string | null;
  decimals: number;
  symbol: string;
  iconUrl: string;
  description: string;
  senders: string | null;
  receivers: string | null;
  transferCount: number | null;
  transferAmount: number | null;
  holders: string | null;
};
