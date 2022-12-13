
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
      TreasuryCap: '0xac9e3846a9ecb71a36b733d15dd602985eb6b429',
      CoinMetadata: '0x936118c9f1da56a85417aef914b6af82490f41bc'
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
      TreasuryCap: '0xa8e8cbc71a743ac0bd0dc1a5f183287630988d2b',
      CoinMetadata: '0xcb0efcfda24470c28c3cd690548cbba27a54ed90'
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
      TreasuryCap: '0x3c82d04a7fd78f6c2801279f2ad12aaed16ac6e2',
      CoinMetadata: '0x2a031be45c7bf16ca774f8071b94e6765a2c618e'
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
      CoinMetadata: "0x242005acc315c8945ba28f5c74c6eb2053ca8c04",
      TreasuryCap: "0x66ac48240f196e4c1f05d4a7aa26afc032240786",
    },
    extensions: {
      coingeckoId: 'tether',
      yahoofinaceSymbol: 'USDT-USD',
    }
  },
]
