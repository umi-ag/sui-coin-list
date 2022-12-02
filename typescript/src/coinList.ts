
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
    type: "0xae55acd146e9e8343c1da06a57dbadb8c9975a5d::devnet_btc::DEVNET_BTC",
    objects: {
      package: '0xae55acd146e9e8343c1da06a57dbadb8c9975a5d',
      module: 'devnet_btc',
      objectName: "DEVNET_BTC",
      CoinMetadata: '0x9ec83f27407aeb25eb19141cffceab4526704010',
      TreasuryCap: '0xcae9e5f66d567429c8e11e32872024d3b47d767b',
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
    type: '0xae55acd146e9e8343c1da06a57dbadb8c9975a5d::devnet_eth::DEVNET_ETH',
    objects: {
      package: '0xae55acd146e9e8343c1da06a57dbadb8c9975a5d',
      module: 'devnet_eth',
      objectName: "DEVNET_ETH",
      CoinMetadata: '0x20e477a9d258c0870971ea777c387ee0c710147a',
      TreasuryCap: '0xf491dd721fc4a06ea95de18610d66b6f5efc5d61',
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
    type: "0xae55acd146e9e8343c1da06a57dbadb8c9975a5d::devnet_usdc::DEVNET_USDC",
    objects: {
      package: '0xae55acd146e9e8343c1da06a57dbadb8c9975a5d',
      module: 'devnet_usdc',
      objectName: "DEVNET_USDC",
      CoinMetadata: '0x4147771612b8e6441a9b2c3ee72650e0a942bc4a',
      TreasuryCap: '0x89c760727b548b111e2bee1933c18674be1e4063',
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
    type: "0xae55acd146e9e8343c1da06a57dbadb8c9975a5d::devnet_usdt::DEVNET_USDT",
    objects: {
      package: '0xae55acd146e9e8343c1da06a57dbadb8c9975a5d',
      module: 'devnet_usdt',
      objectName: "DEVNET_USDT",
      CoinMetadata: '0x178f9b2d5eb7bc6f1ee747c3ba910cafa4508ffc',
      TreasuryCap: '0x8a7d2cfa3004777123fbf61e38091314c914aaf4',
    },
    extensions: {
      coingeckoId: 'tether',
      yahoofinaceSymbol: 'USDT-USD',
    }
  },
]
