import { fetchCoinList } from '../src';

(async () => {
  const coinList = await fetchCoinList();
  console.log(coinList);
  /**
   * [
   *   {
   *     coinType: '0x2::sui::SUI',
   *     decimals: 9,
   *     name: 'Sui',
   *     symbol: 'SUI',
   *     description: '',
   *     iconUrl: 'https://strapi.scand.app/uploads/644b3314022eae0001db3110_coin_logo_bb22eaf116.png',
   *     id: '0x9258181f5ceac8dbffb7030890243caed69a9599d2886d957a9cb7656af3bdb3'
   *   }
   *  ...
   * ]
   */
})();
