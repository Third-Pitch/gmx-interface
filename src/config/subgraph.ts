import { BASE, AVALANCHE, ETH_MAINNET } from "./chains";
import { isDevelopment } from "./env";
import { getSubgraphUrlKey } from "./localStorage";

const SUBGRAPH_URLS = {
  [BASE]: {
    stats: "https://api.studio.thegraph.com/proxy/45535/test-stats/0.0.1",
    referrals: "https://api.studio.thegraph.com/query/45535/test-referrals/0.0.1",
    // // stats: "https://api.thegraph.com/subgraphs/name/gdev8317/gmx-arbitrum-stats
    // stats: "https://api.thegraph.com/subgraphs/name/gmx-io/gmx-stats",
    // referrals: "https://api.thegraph.com/subgraphs/name/gmx-io/gmx-arbitrum-referrals",
    // nissohVault: "https://api.thegraph.com/subgraphs/name/nissoh/gmx-vault",
  },

  [AVALANCHE]: {
    // stats: "https://api.thegraph.com/subgraphs/name/gdev8317/gmx-avalanche-staging", // testing
    stats: "https://api.thegraph.com/subgraphs/name/gmx-io/gmx-avalanche-stats",
    referrals: "https://api.thegraph.com/subgraphs/name/gmx-io/gmx-avalanche-referrals",
  },

  [ETH_MAINNET]: {
    chainLink: "https://api.thegraph.com/subgraphs/name/deividask/chainlink",
  },
};

export function getSubgraphUrl(chainId: number, subgraph: string) {
  if (isDevelopment()) {
    const localStorageKey = getSubgraphUrlKey(chainId, subgraph);
    const url = localStorage.getItem(localStorageKey);
    if (url) {
      // eslint-disable-next-line no-console
      console.warn("%s subgraph on chain %s url is overriden: %s", subgraph, chainId, url);
      return url;
    }
  }

  return SUBGRAPH_URLS[chainId][subgraph];
}
