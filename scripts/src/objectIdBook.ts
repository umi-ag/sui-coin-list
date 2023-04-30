export const coinObjectIdBook = {
  umi: {
      DEVNET_BTC :
          "0xd6a918f4411064b6d5d4dbd906062858263a24cf7fbde28e9acbfb17a190f175",
      DEVNET_ETH :
          "0xa43942eb432888f0f50a4ca1f4b6a3567bae0c7e822a4931c696842bf94c4176",
      DEVNET_USDC :
          "0xcfce9e08d5401ebfb19b2f40336445344f73380fa7b4d9c65e30a3115e450cf1",
      DEVNET_USDT :
          "0xa36fbb3915906a8ee5731a84d7f4163083bd3140bcec95f4f811ebad2b54c628",
  },
  nojoswap: {
      BTC :
          "0x1d7e3eb987960ecb0570ece3ebc15e3a503524965325a17f412553e91c6dace9",
      whUSDC :
          "0xd3a43685489ddd6de6d8116f2d1d8c5a61c98cdc034aad1c1c316097f62a4c14",
  },
} as const;

export type ProtocolName = keyof typeof coinObjectIdBook;
