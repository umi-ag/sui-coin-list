import {
  Connection,
  JsonRpcProvider,
} from "@mysten/sui.js";
import fetch from "node-fetch";
import { coinObjectIdBook } from "./objectIdBook";
import { standardizeCoin } from "./standardizeCoin";

globalThis.fetch = fetch;

let options = {
  // fullRpcUrl: "https://sui-api.rpcpool.com/",
  fullRpcUrl: "https://fullnode.testnet.sui.io:443/",
  faucetURL: "https://faucet.devnet.sui.io/gas",
};

export const fetchCoinMetadata = async () => {
  const provider = new JsonRpcProvider(
      new Connection({
          fullnode: options.fullRpcUrl,
          faucet: options.fullRpcUrl,
      }),
  );

  const ids = Object
      .values(coinObjectIdBook)
      .flatMap((v) => Object.values(v));

  const resources = await provider.multiGetObjects({
      ids,
      options: {
          showContent: true,
          showType: true,
      },
  });

  const coins = resources.flatMap((r) => {
      const coin = standardizeCoin(r);
      return coin ? [coin] : [];
  });

  return coins;
};
