# @umi-ag/sui-coin-list

## Overview
The @umi-ag/sui-coin-list is a TypeScript library that facilitates streamlined fetching of coin data from Sui via our provided API. Serving as a beneficial bridge between developers and Sui, this library ensures seamless and efficient data retrieval.

## Installation
To install the @umi-ag/sui-coin-list package, run the following command in your project's root directory:

```bash
npm install @umi-ag/sui-coin-list
```
Or with yarn/pnpm:
```bash
yarn add @umi-ag/sui-coin-list
pnpm add @umi-ag/sui-coin-list
```

## Usage
Here's a simple example of how to utilize the @umi-ag/sui-coin-list package in your code:

```typescript
import { fetchCoinList } from '@umi-ag/sui-coin-list';

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
```

This snippet fetches and logs the coin data from Sui via our API. If an error occurs during the data fetch, it logs the error message.

## Contributing
Contributions to the @umi-ag/sui-coin-list are always welcome! If you want to add a new coin, you're encouraged to update the `data/coin_list.json` file and submit a Pull Request with your changes. Please ensure that your code adheres to the existing style guidelines, and all tests pass before creating a Pull Request. We appreciate your contribution to @umi-ag/sui-coin-list!