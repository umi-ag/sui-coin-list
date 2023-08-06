import { CoinProfile } from './type';

export const fetchCoinList = async () => {
  const res = await fetch('https://sui-beta.fly.dev/coin_list');

  if (!res.ok) {
    throw new Error(`Failed to fetch coin list with status code: ${res.status}`)
  }

  const data = await res.json();
  return data as CoinProfile[];
}