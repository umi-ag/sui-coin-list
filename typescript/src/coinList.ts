
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
    type: "0x320487a8256376011b54939a2f797f2bb3ed21b1::devnet_btc::DEVNET_BTC",
    objects: {
      package: "0x320487a8256376011b54939a2f797f2bb3ed21b1",
      module: 'devnet_btc',
      objectName: "DEVNET_BTC",
      "TreasuryCap": "0x41380507df9c4dc86a4e4d36751b4c46d3803259",
      "CoinMetadata": "0x5ef394d2b02be8ee3120b71911e2b312e15176bb",
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
    type: '0x320487a8256376011b54939a2f797f2bb3ed21b1::devnet_eth::DEVNET_ETH',
    objects: {
      package: "0x320487a8256376011b54939a2f797f2bb3ed21b1",
      module: 'devnet_eth',
      objectName: "DEVNET_ETH",
      "TreasuryCap":"0xd165abf17a7dcbde20777e18060daa73e6dbb783",
      "CoinMetadata":"0xc1c9b988cc9608ac4f137f5cba44b782b67a5a95",
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
    type: "0x320487a8256376011b54939a2f797f2bb3ed21b1::devnet_usdc::DEVNET_USDC",
    objects: {
      package: "0x320487a8256376011b54939a2f797f2bb3ed21b1",
      module: 'devnet_usdc',
      objectName: "DEVNET_USDC",
      "TreasuryCap":"0xb33a8ad68528046e9eab0fb1244cc1c1a8a938d7",
      "CoinMetadata":"0xfdecbc2684676b609ea50f4963b5614d91c6ce20",
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
    type: "0x320487a8256376011b54939a2f797f2bb3ed21b1::devnet_usdt::DEVNET_USDT",
    objects: {
      package: "0x320487a8256376011b54939a2f797f2bb3ed21b1",
      module: 'devnet_usdt',
      objectName: "DEVNET_USDT",
      "TreasuryCap":"0x9a95d4d86d1c38851a06011efad573fb5fd22939",
      "CoinMetadata":"0xb63313bd892f5eb9444d619e5865fbfcd6e515a6",
    },
    extensions: {
      coingeckoId: 'tether',
      yahoofinaceSymbol: 'USDT-USD',
    }
  },
]
