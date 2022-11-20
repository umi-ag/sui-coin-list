type URL = string

type ProtocolInfo = {
  name: string,
  logoURI: string,
  extensions: {
    website?: URL,
    twitter?: URL,
    discord?: URL,
    telegram?: URL,
  }
}

export const protocolList = [
  'araya',
  'acova',
  'dragon',
  'kiriya',
  'suidex',
  'wisp',
] as const

export type ProtocolName = typeof protocolList[number]

export const protocolBook: Record<ProtocolName, ProtocolInfo> = {
  acova: {
    name: 'Acova',
    logoURI: 'https://pbs.twimg.com/profile_images/1581030195842240512/xBOcReg__400x400.jpg',
    extensions: {
      website: 'https://acova.io',
      twitter: 'https://twitter.com/acovamarket',
    }
  },
  araya: {
    name: 'Araya',
    logoURI: 'https://pbs.twimg.com/profile_images/1581030195842240512/xBOcReg__400x400.jpg',
    extensions: {
      website: 'https://arayafi.org/',
      twitter: 'https://twitter.com/ArayaFinance',
      discord: 'https://twitter.com/acovamarket',
    }
  },
  dragon: {
    name: 'Dragon',
    logoURI: 'https://pbs.twimg.com/profile_images/1579682510812114946/mrBTHMDd_400x400.jpg',
    extensions: {
      website: 'https://twitter.com/dragonsui_com',
    }
  },
  kiriya: {
    name: 'Kiriya',
    logoURI: 'https://pbs.twimg.com/profile_images/1575588291763589120/29_0d1ku_400x400.jpg',
    extensions: {
      website: 'https://efficacy.finance/kriya-sui-dex/',
      twitter: 'https://twitter.com/KriyaDEX',
    }
  },
  suidex: {
    name: 'Suidex',
    logoURI: 'https://pbs.twimg.com/profile_images/1586631638087131136/pQ_TavMy_400x400.jpg',
    extensions: {
      website: 'https://suidex.io/',
      twitter: 'https://twitter.com/Suidex_io',
    }
  },
  wisp: {
    name: 'Wisp Swap',
    logoURI: 'https://pbs.twimg.com/profile_images/1591115744242114561/bNATBdQw_400x400.jpg',
    extensions: {
    }
  }
}
