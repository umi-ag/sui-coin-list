
export type HexString = string

export type CoinProfile = {
  name: string
  symbol: string
  officialSymbol: string
  decimals: number
  logoURI: string
  package: HexString
  objects?: Record<string, HexString>
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
    name: 'devnet BTC',
    symbol: 'BTC',
    officialSymbol: 'BTC',
    decimals: 8,
    logoURI: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
    package: "0x79da456c175664cd0892c8c62e154186fb065675",
    objects: {
      TreasuryCap: '0x29e2d0970e62a6c76839736132e394072e3292f4',
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
    package: "0x79da456c175664cd0892c8c62e154186fb065675",
    objects: {
      TreasuryCap: '0x2800cbcd4484569a986e3fceee08b541f0bfd4d4',
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
    package: "0x79da456c175664cd0892c8c62e154186fb065675",
    objects: {
      TreasuryCap: '0x1a27d6f3fb5a914f9e78072e1014a03215f95cf9',
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
    package: "0x79da456c175664cd0892c8c62e154186fb065675",
    objects: {
      TreasuryCap: '0xa0ad8b28a73e695ca8a20cab5b5ba1960d8cf7ec',
    },
    extensions: {
      coingeckoId: 'tether',
      yahoofinaceSymbol: 'USDT-USD',
    }
  },
]