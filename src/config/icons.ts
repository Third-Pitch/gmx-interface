import { BASE } from "config/chains";
import arbitrum from "img/ic_arbitrum_24.svg";

import eddxIcon from "img/ic_eddx_40.svg";
import elpIcon from "img/ic_elp_40.svg";
import eddxArbitrum from "img/ic_eddx_arbitrum.svg";
import elpArbitrum from "img/ic_elp_arbitrum.svg";

const ICONS = {
  [BASE]: {
    network: arbitrum,
    eddx: eddxArbitrum,
    elp: elpArbitrum,
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
