import { ethers } from "ethers";
import { sample } from "lodash";
import { NetworkMetadata } from "lib/wallets";
import { isDevelopment } from "./env";

const { parseEther } = ethers.utils;

export const ETH_MAINNET = 1;
export const BASE = 84531;

export const FEES_HIGH_BPS = 50;

// TODO take it from web3
export const DEFAULT_CHAIN_ID = BASE;
export const CHAIN_ID = DEFAULT_CHAIN_ID;

export const SUPPORTED_CHAIN_IDS = [BASE];

export const IS_NETWORK_DISABLED = {
  [BASE]: false,
};

export const CHAIN_NAMES_MAP = {
  [BASE]: "Base",
};

export const GAS_PRICE_ADJUSTMENT_MAP = {
  [BASE]: "51000000000",
};

export const MAX_GAS_PRICE_MAP = {
};

export const HIGH_EXECUTION_FEES_MAP = {
  [BASE]: 3, // 3 USD
};

const constants = {

 

  [BASE]: {
    nativeTokenSymbol: "ETH",
    wrappedTokenSymbol: "WETH",
    defaultCollateralSymbol: "USDC",
    defaultFlagOrdersEnabled: false,
    positionReaderPropsLength: 9,
    v2: true,
    // TODO 修改手续费
    SWAP_ORDER_EXECUTION_GAS_FEE: parseEther("0.01"),
    INCREASE_ORDER_EXECUTION_GAS_FEE: parseEther("0.01"),
    // contract requires that execution fee be strictly greater than instead of gte
    DECREASE_ORDER_EXECUTION_GAS_FEE: parseEther("0.0100001"),
    // SWAP_ORDER_EXECUTION_GAS_FEE: parseEther("0.0003"),
    // INCREASE_ORDER_EXECUTION_GAS_FEE: parseEther("0.0003"),
    // // contract requires that execution fee be strictly greater than instead of gte
    // DECREASE_ORDER_EXECUTION_GAS_FEE: parseEther("0.000300001"),
  },




};

const ALCHEMY_WHITELISTED_DOMAINS = ["eddx.io", "app.eddx.io"];

export const RPC_PROVIDERS = {
  [ETH_MAINNET]: ["https://rpc.ankr.com/eth"],
  [BASE]: [getDefaultArbitrumRpcUrl()],
};

export const FALLBACK_PROVIDERS = {
  [BASE]: [getAlchemyHttpUrl()],
};

export const NETWORK_METADATA: { [chainId: number]: NetworkMetadata } = {


  [BASE]: {
    chainId: "0x" + BASE.toString(16),
    chainName: "Base Goerli",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: RPC_PROVIDERS[BASE],
    blockExplorerUrls: [getExplorerUrl(BASE)],
  },


};

export const getConstant = (chainId: number, key: string) => {
  if (!constants[chainId]) {
    throw new Error(`Unsupported chainId ${chainId}`);
  }

  if (!(key in constants[chainId])) {
    throw new Error(`Key ${key} does not exist for chainId ${chainId}`);
  }

  return constants[chainId][key];
};

export function getChainName(chainId: number) {
  return CHAIN_NAMES_MAP[chainId];
}

export function getDefaultArbitrumRpcUrl() {
  return "https://goerli.base.org";
  // return "https://arb1.arbitrum.io/rpc";
}

export function getRpcUrl(chainId: number): string | undefined {
  return sample(RPC_PROVIDERS[chainId]);
}

export function getFallbackRpcUrl(chainId: number): string | undefined {
  return sample(FALLBACK_PROVIDERS[chainId]);
}

export function getAlchemyHttpUrl() {
  if (ALCHEMY_WHITELISTED_DOMAINS.includes(window.location.host)) {
    return "https://arb-mainnet.g.alchemy.com/v2/ha7CFsr1bx5ZItuR6VZBbhKozcKDY4LZ";
  }
  return "https://arb-mainnet.g.alchemy.com/v2/EmVYwUw0N2tXOuG0SZfe5Z04rzBsCbr2";
}

export function getAlchemyWsUrl() {
  if (ALCHEMY_WHITELISTED_DOMAINS.includes(window.location.host)) {
    return "wss://arb-mainnet.g.alchemy.com/v2/ha7CFsr1bx5ZItuR6VZBbhKozcKDY4LZ";
  }
  return "wss://arb-mainnet.g.alchemy.com/v2/EmVYwUw0N2tXOuG0SZfe5Z04rzBsCbr2";
}

export function getExplorerUrl(chainId) {
  if (chainId === 3) {
    return "https://ropsten.etherscan.io/";
  } else if (chainId === 42) {
    return "https://kovan.etherscan.io/";
  } else if (chainId === BASE) {
    return "https://goerli.basescan.org/";
  } 
  return "https://etherscan.io/";
}

export function getHighExecutionFee(chainId) {
  return HIGH_EXECUTION_FEES_MAP[chainId] || 3;
}

export function isSupportedChain(chainId) {
  return SUPPORTED_CHAIN_IDS.includes(chainId);
}
