
export type HexString = string

export type CoinProfile = {
  name: string
  symbol: string
  officialSymbol: string
  decimals: number
  logoURI: string
  type: string
  objects: {
    package: string
    module: string
    objectName: string
    TreasuryCap?: HexString
    CoinMetadata?: HexString
  }
  extensions: {
    binanceSymbol?: string
    coingeckoId?: string
    description?: string
    discord?: string
    facebook?: string
    instagram?: string
    medium?: string
    reddit?: string
    telegram?: string
    twitter?: string
    website?: string
    yahoofinaceSymbol?: string
  }
}

export const coinlist: CoinProfile[] = [
  {
    name: 'Sui',
    symbol: 'SUI',
    officialSymbol: 'Sui',
    decimals: 9,
    logoURI: 'https://cryptototem.com/wp-content/uploads/2022/08/SUI-logo.jpg',
    type: '0x2::sui::SUI',
    objects: {
      package: "0x2",
      module: 'sui',
      objectName: "SUI",
    },
    extensions: {
      website: 'https://sui.io',
      coingeckoId: 'sui',
    }
  },
  {
    name: 'devnet BTC',
    symbol: 'BTC',
    officialSymbol: 'BTC',
    decimals: 8,
    logoURI: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
    type: "0x4a5fab010acca25452a12b8ce2b125b772ad9b16::devnet_btc::DEVNET_BTC",
    objects: {
      package: "0x4a5fab010acca25452a12b8ce2b125b772ad9b16",
      module: 'devnet_btc',
      objectName: "DEVNET_BTC",
      "TreasuryCap": "0x249ba5de45261e352551f929744cd0aea089cc6c",
      "CoinMetadata": "0xdf73b811bbc36abfe555f1da21175f1377323554",
    },
    extensions: {
      coingeckoId: 'bitcoin',
      yahoofinaceSymbol: 'BTC-USD',
    }
  },
  {
    name: 'devnet ETH',
    symbol: 'ETH',
    officialSymbol: 'ETH',
    decimals: 8,
    logoURI: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
    type: '0x4a5fab010acca25452a12b8ce2b125b772ad9b16::devnet_eth::DEVNET_ETH',
    objects: {
      package: "0x4a5fab010acca25452a12b8ce2b125b772ad9b16",
      module: 'devnet_eth',
      objectName: "DEVNET_ETH",
      "TreasuryCap":"0x56f9afd5298251b94c18d1ea2ab1e622403f3794",
      "CoinMetadata":"0x6f855618d219c9e7743b68e76bfe44b23422f3af",
    },
    extensions: {
      coingeckoId: 'ethereum',
      yahoofinaceSymbol: 'ETH-USD',
    }
  },
  {
    name: 'devnet USDC',
    symbol: 'USDC',
    officialSymbol: 'USDC',
    decimals: 6,
    logoURI: 'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389',
    type: "0x4a5fab010acca25452a12b8ce2b125b772ad9b16::devnet_usdc::DEVNET_USDC",
    objects: {
      package: "0x4a5fab010acca25452a12b8ce2b125b772ad9b16",
      module: 'devnet_usdc',
      objectName: "DEVNET_USDC",
      "TreasuryCap":"0x88abf4d37d2a2cb14069653dfb1f61b6624e46e1",
      "CoinMetadata":"0x30a1efe765bdf6272192cd6b2968a2660a917864",
    },
    extensions: {
      coingeckoId: 'usd-coin',
      yahoofinaceSymbol: 'USDT-USD',
    }
  },
  {
    name: 'devnet USDT',
    symbol: 'USDT',
    officialSymbol: 'USDT',
    decimals: 6,
    logoURI: 'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707',
    type: "0x4a5fab010acca25452a12b8ce2b125b772ad9b16::devnet_usdt::DEVNET_USDT",
    objects: {
      package: "0x4a5fab010acca25452a12b8ce2b125b772ad9b16",
      module: 'devnet_usdt',
      objectName: "DEVNET_USDT",
      "TreasuryCap":"0x8c61a9574c68f91d790ffdf821d8536682fad037",
      "CoinMetadata":"0xe2cdca179a33500f2a4aeab326f7b52a74a172ca",
    },
    extensions: {
      coingeckoId: 'tether',
      yahoofinaceSymbol: 'USDT-USD',
    }
  },
]
