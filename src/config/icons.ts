import { BASE, ARBITRUM_TESTNET, AVALANCHE, AVALANCHE_FUJI } from "config/chains";
import arbitrum from "img/ic_arbitrum_24.svg";
import avalanche from "img/ic_avalanche_24.svg";
import avalancheTestnet from "img/ic_avalanche_testnet_24.svg";

import eddxIcon from "img/ic_eddx_40.svg";
import elpIcon from "img/ic_elp_40.svg";
import eddxArbitrum from "img/ic_eddx_arbitrum.svg";
import eddxAvax from "img/ic_eddx_avax.svg";
import elpArbitrum from "img/ic_elp_arbitrum.svg";
import elpAvax from "img/ic_elp_avax.svg";

const ICONS = {
  [BASE]: {
    network: arbitrum,
    eddx: eddxArbitrum,
    elp: elpArbitrum,
  },
  [AVALANCHE]: {
    network: avalanche,
    eddx: eddxAvax,
    elp: elpAvax,
  },
  [ARBITRUM_TESTNET]: {
    network: arbitrum,
  },
  [AVALANCHE_FUJI]: {
    network: avalancheTestnet,
  },
  common: {
    eddx: eddxIcon,
    elp: elpIcon,
  },
};

export function getIcon(chainId: number | "common", label: string) {
  if (chainId in ICONS) {
    if (label in ICONS[chainId]) {
      return ICONS[chainId][label];
    }
  }
}
export function getIcons(chainId: number | "common") {
  if (!chainId) return;
  if (chainId in ICONS) {
    return ICONS[chainId];
  }
}
