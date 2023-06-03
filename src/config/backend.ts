import { BASE } from "./chains";

// export const GMX_STATS_API_URL = "https://stats.gmx.io/api";
export const EDDX_STATS_API_URL = "http://192.168.1.117:3113/api";

const BACKEND_URLS = {
  default: "http://192.168.1.117:3123/api",

  // [MAINNET]: "https://gambit-server-staging.uc.r.appspot.com",
  // [ARBITRUM_TESTNET]: "https://gambit-server-devnet.uc.r.appspot.com",
  [BASE]: "http://192.168.1.117:3123/api",
  // [AVALANCHE]: "https://gmx-avax-server.uc.r.appspot.com",
};

export function getServerBaseUrl(chainId: number) {
  if (!chainId) {
    throw new Error("chainId is not provided");
  }

  if (document.location.hostname.includes("deploy-preview")) {
    const fromLocalStorage = localStorage.getItem("SERVER_BASE_URL");
    if (fromLocalStorage) {
      return fromLocalStorage;
    }
  }

  return BACKEND_URLS[chainId] || BACKEND_URLS.default;
}

export function getServerUrl(chainId: number, path: string) {
  return `${getServerBaseUrl(chainId)}${path}`;
}
