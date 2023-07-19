import fetch from 'cross-fetch';
import { CoinProfile } from './type';

export const fetchCoinList = async () => {
  return fetch('https://sui-alpha.fly.dev/coin_list')
    .then((res) => res.json())
    .then(data => data as CoinProfile[]);
}