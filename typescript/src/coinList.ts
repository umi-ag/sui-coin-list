
export type CoinProfile = {
  name: string
  symbol: string
  officialSymbol: string
  decimals: number
  logoURI: string
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
    extensions: {
      coingeckoId: 'tether',
      yahoofinaceSymbol: 'USDT-USD',
    }
  },
  {
    name: 'devnet ETH',
    symbol: 'SOL',
    officialSymbol: 'SOL',
    decimals: 8,
    logoURI: 'https://assets.coingecko.com/coins/images/4128/small/solana.png?1640133422',
    extensions: {
      coingeckoId: 'solana',
      yahoofinaceSymbol: 'SOL-USD',
    }
  },
]