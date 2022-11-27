
export type HexString = string

export type CoinProfile = {
  name: string
  symbol: string
  officialSymbol: string
  decimals: number
  logoURI: string
  objects: {
    package: string
    type: string
    module: string
    objectName: string
    TreasuryCap?: string
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
    objects: {
      type: '0x2::coin::Coin<0x2::sui::SUI>',
      package: "0x2",
      module: 'sui',
      objectName: "SUI",
    },
    extensions: {
      coingeckoId: 'bitcoin',
      yahoofinaceSymbol: 'BTC-USD',
    }
  },
  {
    name: 'devnet BTC',
    symbol: 'BTC',
    officialSymbol: 'BTC',
    decimals: 8,
    logoURI: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
    objects: {
      type: "0x2::coin::Coin<0x4e58cae8dca973030dd84459bdf9cd70e65dcc80::devnet_btc::DEVNET_BTC>",
      package: "0x4e58cae8dca973030dd84459bdf9cd70e65dcc80",
      module: 'devnet_btc',
      objectName: "DEVNET_BTC",
      TreasuryCap: '0x6ee60687c8d002ddc8efda046099f6dd96c9dc8c',
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
    objects: {
      type: '0x2::coin::Coin<0x4e58cae8dca973030dd84459bdf9cd70e65dcc80::devnet_eth::DEVNET_ETH>',
      package: "0x4e58cae8dca973030dd84459bdf9cd70e65dcc80",
      module: 'devnet_eth',
      objectName: "DEVNET_ETH",
      TreasuryCap: '0x5f43d1573427e99b5469b19aa1fa97f5ba133090',
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
    objects: {
      type: "0x2::coin::Coin<0x4e58cae8dca973030dd84459bdf9cd70e65dcc80::devnet_usdc::DEVNET_USDC>",
      package: "0x4e58cae8dca973030dd84459bdf9cd70e65dcc80",
      module: 'devnet_usdc',
      objectName: "DEVNET_USDC",
      TreasuryCap: '0x65ff9577325ea7e86ad302bfa6a705d5848f81d2',
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
    objects: {
      type: '0x2::coin::Coin<0x4e58cae8dca973030dd84459bdf9cd70e65dcc80::devnet_usdt::DEVNET_USDT>',
      package: "0x4e58cae8dca973030dd84459bdf9cd70e65dcc80",
      module: 'devnet_usdt',
      objectName: "DEVNET_USDT",
      TreasuryCap: '0x4f9b93092387458dd13e803ebd8e6a4cad308d8f',
    },
    extensions: {
      coingeckoId: 'tether',
      yahoofinaceSymbol: 'USDT-USD',
    }
  },
]