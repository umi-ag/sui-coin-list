import {
  SuiObjectResponse,
  getMoveObjectType,
  getObjectFields,
  getObjectId,
} from "@mysten/sui.js";
// import type { CoinMetadata } from '@mysten/sui.js';
import type { ProtocolName } from "./objectIdBook";
import { coinObjectIdBook } from "./objectIdBook";
import { CoinData } from './type';

const findProtocolNameFromCoinObjectId = (objectId: string): ProtocolName | null => {
  for (const protocol of Object.keys(coinObjectIdBook) as ProtocolName[]) {
      if (Object.values<string>(coinObjectIdBook[protocol]).includes(objectId)) {
          return protocol;
      }
  }
};

const getPackageIdFromStructTag = (structTagString: string) => {
  return structTagString.split("<")[1].split("::")[0];
};

export const transformer = (
  objectType: string,
  objectId: string,
  packageId: string,
  fields: Record<string, any>,
) : CoinData | null => {

  const coin: CoinData = {
      type: objectType,
      objectId: objectId,
      protocol: findProtocolNameFromCoinObjectId(objectId),
      name: fields.name,
      supply: null,
      denom: fields.symbol,
      packageId: packageId,
      createTimestamp: 0,
      creator: null,
      validatorName: null,
      validatorImage: null,
      decimals: parseInt(fields.decimals),
      symbol: fields.symbol,
      iconUrl: fields.icon_url,
      description: fields.description,
      senders: null,
      receivers: null,
      transferCount: null,
      transferAmount: null,
      holders: null,
  };

  return coin;
};

export const standardizeCoin = (
  resource: SuiObjectResponse,
) : CoinData | null => {

  const objectType = getMoveObjectType(resource);
  if (!objectType) return null;

  const packageId = getPackageIdFromStructTag(objectType);

  const fields = getObjectFields(resource);
  if (!fields) return null;

  const objectId = getObjectId(resource);

  const coin = transformer(objectType, objectId, packageId, fields);

  return coin;
}

