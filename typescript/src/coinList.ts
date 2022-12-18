
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
    type: "0x7640c51d7d7c56aa84d55d3274847397ef9c7106::devnet_btc::DEVNET_BTC",
    objects: {
      package: "0x7640c51d7d7c56aa84d55d3274847397ef9c7106",
      module: 'devnet_btc',
      objectName: "DEVNET_BTC",
      "TreasuryCap": "0xa9f02148e6d858a35d4b2af90d7030283df61dd4",
      "CoinMetadata": "0xa764b3b33a003de0df592824595a6f89e03bd5f4",
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
    type: '0x7640c51d7d7c56aa84d55d3274847397ef9c7106::devnet_eth::DEVNET_ETH',
    objects: {
      package: "0x7640c51d7d7c56aa84d55d3274847397ef9c7106",
      module: 'devnet_eth',
      objectName: "DEVNET_ETH",
      "TreasuryCap":"0x33b4b26651bbafbdbf48a6acf7a7bff08083a7a0",
      "CoinMetadata":"0x044fc2557692684563a885ecd976e93e2274e38f",
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
    type: "0x7640c51d7d7c56aa84d55d3274847397ef9c7106::devnet_usdc::DEVNET_USDC",
    objects: {
      package: "0x7640c51d7d7c56aa84d55d3274847397ef9c7106",
      module: 'devnet_usdc',
      objectName: "DEVNET_USDC",
      "TreasuryCap":"0x7648fa1e1bd650d851b870ce165eaa99914f235a",
      "CoinMetadata":"0x3333979c1645d1762f991f5b5a8aa419d311f08b",
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
    type: "0x7640c51d7d7c56aa84d55d3274847397ef9c7106::devnet_usdt::DEVNET_USDT",
    objects: {
      package: "0x7640c51d7d7c56aa84d55d3274847397ef9c7106",
      module: 'devnet_usdt',
      objectName: "DEVNET_USDT",
      "TreasuryCap":"0x0b7a628179a65981d4a36d7a925ac16b5289626e",
      "CoinMetadata":"0x5332af10180d6d8bf7eb10aa0773c45aef7fc049",
    },
    extensions: {
      coingeckoId: 'tether',
      yahoofinaceSymbol: 'USDT-USD',
    }
  },
]
