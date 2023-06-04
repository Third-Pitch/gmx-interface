import { createClient } from "./utils";
import { BASE, ETH_MAINNET } from "config/chains";

export const chainlinkClient = createClient(ETH_MAINNET, "chainLink");

export const baseGraphClient = createClient(BASE, "stats");
export const baseReferralsGraphClient = createClient(BASE, "referrals");
export const nissohGraphClient = createClient(BASE, "nissohVault");


export function getEddxGraphClient(chainId: number) {
  if (chainId === BASE) {
    return baseGraphClient;
  }

  throw new Error(`Unsupported chain ${chainId}`);
}
