
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
    type: "0x7c7d6cb64e76ca8bdf33dea8b8672e3ce97947d4::devnet_btc::DEVNET_BTC",
    objects: {
      package: "0x7c7d6cb64e76ca8bdf33dea8b8672e3ce97947d4",
      module: 'devnet_btc',
      objectName: "DEVNET_BTC",
      "TreasuryCap":"0x56a82da8d00dd9d3aefb884c1600b49e2388c28b",
      "CoinMetadata":"0x191dd5fde70e8820f33099f6330c8ca45bb15265",
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
    type: '0x7c7d6cb64e76ca8bdf33dea8b8672e3ce97947d4::devnet_eth::DEVNET_ETH',
    objects: {
      package: "0x7c7d6cb64e76ca8bdf33dea8b8672e3ce97947d4",
      module: 'devnet_eth',
      objectName: "DEVNET_ETH",
      "TreasuryCap":"0x839dcd39d19f34a09fddc11c708a3c5ecaf3aa5f",
      "CoinMetadata":"0xf37db8f8ce5c2082378027599f0b348a91c9a3fa"
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
    type: "0x7c7d6cb64e76ca8bdf33dea8b8672e3ce97947d4::devnet_usdc::DEVNET_USDC",
    objects: {
      package: "0x7c7d6cb64e76ca8bdf33dea8b8672e3ce97947d4",
      module: 'devnet_usdc',
      objectName: "DEVNET_USDC",
      "TreasuryCap":"0x47471a597093afa8dcd7df2e18b92266ef61aec4",
      "CoinMetadata":"0x8154d8ed66aa35332a506932374135eaa3cf9a4c",
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
    type: "0x7c7d6cb64e76ca8bdf33dea8b8672e3ce97947d4::devnet_usdt::DEVNET_USDT",
    objects: {
      package: "0x7c7d6cb64e76ca8bdf33dea8b8672e3ce97947d4",
      module: 'devnet_usdt',
      objectName: "DEVNET_USDT",
      "TreasuryCap":"0xdb674a1c9e376bb1bb013d6768336c5588b57250",
      "CoinMetadata":"0x2220be93cf36369abc5ddf40fed7ac7f451066f9",
    },
    extensions: {
      coingeckoId: 'tether',
      yahoofinaceSymbol: 'USDT-USD',
    }
  },
]
