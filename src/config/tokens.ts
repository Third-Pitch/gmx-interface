import { ethers } from "ethers";
import { getContract } from "./contracts";
import { BASE } from "./chains";
import { Token } from "domain/tokens";

export const TOKENS: { [chainId: number]: Token[] } = {
  [BASE]: [
    {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
      address: ethers.constants.AddressZero,
      isNative: true,
      isShortable: true,
      imageUrl: "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
    },
    {
      name: "Wrapped Ethereum",
      symbol: "WETH",
      decimals: 18,
      address: "0x4200000000000000000000000000000000000006",
      isWrapped: true,
      baseSymbol: "ETH",
      imageUrl: "https://assets.coingecko.com/coins/images/2518/thumb/weth.png?1628852295",
    },
    {
      name: "Bitcoin (WBTC)",
      symbol: "BTC",
      decimals: 18,
      address: "0x1AcF131de5Bbc72aE96eE5EC7b59dA2f38b19DBd",
      isShortable: true,
      imageUrl: "https://assets.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png?1548822744",
    },
    {
      name: "Chainlink",
      symbol: "LINK",
      decimals: 18,
      address: "0x63bA205dA17003AB46CE0dd78bE8ba8EE3952e5F",
      isStable: false,
      isShortable: true,
      imageUrl: "https://assets.coingecko.com/coins/images/877/thumb/chainlink-new-logo.png?1547034700",
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      decimals: 18,
      address: "0xEcb03BBCF83E863B9053A926932DbB07D837eBbE",
      isStable: true,
      imageUrl: "https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389",
    },
    {
      name: "Tether",
      symbol: "USDT",
      decimals: 18,
      address: "0x8654F060EB1e5533C259cDcBBe39834Bb8141cF4",
      isStable: true,
      imageUrl: "https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png?1598003707",
    },
    {
      name: "Dai",
      symbol: "DAI",
      decimals: 18,
      address: "0xFE9cdCC77fb826B380D49F53c8cE298B600cB7F0",
      isStable: true,
      imageUrl: "https://assets.coingecko.com/coins/images/9956/thumb/4943.png?1636636734",
    },
  ],
};

export const ADDITIONAL_TOKENS: { [chainId: number]: Token[] } = {
  [BASE]: [
    {
      name: "EDDX",
      symbol: "EDDX",
      address: getContract(BASE, "EDDX"),
      decimals: 18,
      imageUrl: "https://assets.coingecko.com/coins/images/18323/small/arbit.png?1631532468",
    },
    {
      name: "Escrowed EDDX",
      symbol: "esEDDX",
      address: getContract(BASE, "ES_EDDX"),
      decimals: 18,
    },
    {
      name: "EDDX LP",
      symbol: "ELP",
      address: getContract(BASE, "ELP"),
      decimals: 18,
      imageUrl: "https://github.com/eddx-io/eddx-assets/blob/main/EDDX-Assets/PNG/ELP_LOGO%20ONLY.png?raw=true",
    },
  ]
};

export const PLATFORM_TOKENS: { [chainId: number]: { [symbol: string]: Token } } = {
  [BASE]: {
    EDDX: {
      name: "EDDX",
      symbol: "EDDX",
      decimals: 18,
      address: getContract(BASE, "EDDX"),
      imageUrl: "https://assets.coingecko.com/coins/images/18323/small/arbit.png?1631532468",
    },
    ELP: {
      name: "EDDX LP",
      symbol: "ELP",
      decimals: 18,
      address: getContract(BASE, "StakedElpTracker"), // address of fsELP token because user only holds fsELP
      imageUrl: "https://github.com/eddx-io/eddx-assets/blob/main/EDDX-Assets/PNG/ELP_LOGO%20ONLY.png?raw=true",
    },
  }
};

export const ICONLINKS = {
  [BASE]: {
    EDDX: {
      coingecko: "https://www.coingecko.com/en/coins/eddx",
      base: "https://arbiscan.io/address/0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a",
    },
    ELP: {
      base: "https://arbiscan.io/token/0x1aDDD80E6039594eE970E5872D247bf0414C8903",
      reserves: "https://portfolio.nansen.ai/dashboard/eddx?chain=BASE",
    },
    ETH: {
      coingecko: "https://www.coingecko.com/en/coins/ethereum",
    },
    BTC: {
      coingecko: "https://www.coingecko.com/en/coins/wrapped-bitcoin",
      base: "https://arbiscan.io/address/0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
    },
    LINK: {
      coingecko: "https://www.coingecko.com/en/coins/chainlink",
      base: "https://arbiscan.io/address/0xf97f4df75117a78c1a5a0dbb814af92458539fb4",
    },
    USDC: {
      coingecko: "https://www.coingecko.com/en/coins/usd-coin",
      base: "https://arbiscan.io/address/0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
    },
    USDT: {
      coingecko: "https://www.coingecko.com/en/coins/tether",
      base: "https://arbiscan.io/address/0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    },
    DAI: {
      coingecko: "https://www.coingecko.com/en/coins/dai",
      base: "https://arbiscan.io/address/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
    },
  },
};

export const ELP_POOL_COLORS = {
  ETH: "#6062a6",
  BTC: "#F7931A",
  WBTC: "#F7931A",
  USDC: "#2775CA",
  "USDC.e": "#2A5ADA",
  USDT: "#67B18A",
  MIM: "#9695F8",
  FRAX: "#000",
  DAI: "#FAC044",
  UNI: "#E9167C",
  LINK: "#3256D6",
};

export const TOKENS_MAP: { [chainId: number]: { [address: string]: Token } } = {};
export const TOKENS_BY_SYMBOL_MAP: { [chainId: number]: { [symbol: string]: Token } } = {};
export const WRAPPED_TOKENS_MAP: { [chainId: number]: Token } = {};
export const NATIVE_TOKENS_MAP: { [chainId: number]: Token } = {};

const CHAIN_IDS = [BASE];

for (let j = 0; j < CHAIN_IDS.length; j++) {
  const chainId = CHAIN_IDS[j];
  TOKENS_MAP[chainId] = {};
  TOKENS_BY_SYMBOL_MAP[chainId] = {};
  let tokens = TOKENS[chainId];
  if (ADDITIONAL_TOKENS[chainId]) {
    tokens = tokens.concat(ADDITIONAL_TOKENS[chainId]);
  }

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    TOKENS_MAP[chainId][token.address] = token;
    TOKENS_BY_SYMBOL_MAP[chainId][token.symbol] = token;
  }
}

for (const chainId of CHAIN_IDS) {
  for (const token of TOKENS[chainId]) {
    if (token.isWrapped) {
      WRAPPED_TOKENS_MAP[chainId] = token;
    } else if (token.isNative) {
      NATIVE_TOKENS_MAP[chainId] = token;
    }
  }
}

export function getWrappedToken(chainId: number) {
  return WRAPPED_TOKENS_MAP[chainId];
}

export function getNativeToken(chainId: number) {
  return NATIVE_TOKENS_MAP[chainId];
}

export function getTokens(chainId: number) {
  return TOKENS[chainId];
}

export function isValidToken(chainId: number, address: string) {
  if (!TOKENS_MAP[chainId]) {
    throw new Error(`Incorrect chainId ${chainId}`);
  }
  return address in TOKENS_MAP[chainId];
}

export function getToken(chainId: number, address: string) {
  if (!TOKENS_MAP[chainId]) {
    throw new Error(`Incorrect chainId ${chainId}`);
  }
  if (!TOKENS_MAP[chainId][address]) {
    throw new Error(`Incorrect address "${address}" for chainId ${chainId}`);
  }
  return TOKENS_MAP[chainId][address];
}

export function getTokenBySymbol(chainId: number, symbol: string) {
  const token = TOKENS_BY_SYMBOL_MAP[chainId][symbol];
  if (!token) {
    throw new Error(`Incorrect symbol "${symbol}" for chainId ${chainId}`);
  }
  return token;
}

export function getWhitelistedTokens(chainId: number) {
  return TOKENS[chainId].filter((token) => token.symbol !== "USDG");
}

export function getVisibleTokens(chainId: number) {
  return getWhitelistedTokens(chainId).filter((token) => !token.isWrapped && !token.isTempHidden);
}

export function getNormalizedTokenSymbol(tokenSymbol) {
  if (["WBTC", "WETH", "WAVAX"].includes(tokenSymbol)) {
    return tokenSymbol.substr(1);
  } else if (tokenSymbol === "BTC.b") {
    return "BTC";
  }
  return tokenSymbol;
}

const AVAILABLE_CHART_TOKENS = {
  [BASE]: ["ETH", "BTC", "LINK"],
};

export function isChartAvailabeForToken(chainId: number, tokenSymbol: string) {
  const token = getTokenBySymbol(chainId, tokenSymbol);
  if (!token) return false;
  return (token.isStable || AVAILABLE_CHART_TOKENS[chainId]?.includes(getNormalizedTokenSymbol(tokenSymbol))) ?? false;
}
