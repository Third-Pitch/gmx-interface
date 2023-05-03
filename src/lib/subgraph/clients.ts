import { createClient } from "./utils";
import { BASE, ARBITRUM_TESTNET, AVALANCHE, ETH_MAINNET } from "config/chains";

export const chainlinkClient = createClient(ETH_MAINNET, "chainLink");

export const arbitrumGraphClient = createClient(BASE, "stats");
export const arbitrumReferralsGraphClient = createClient(BASE, "referrals");
export const nissohGraphClient = createClient(BASE, "nissohVault");

export const avalancheGraphClient = createClient(AVALANCHE, "stats");
export const avalancheReferralsGraphClient = createClient(AVALANCHE, "referrals");

export function getGmxGraphClient(chainId: number) {
  if (chainId === BASE) {
    return arbitrumGraphClient;
  } else if (chainId === AVALANCHE) {
    return avalancheGraphClient;
  } else if (chainId === ARBITRUM_TESTNET) {
    return null;
  }

  throw new Error(`Unsupported chain ${chainId}`);
}
