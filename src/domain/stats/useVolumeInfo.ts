import { getServerUrl } from "config/backend";
import { BASE } from "config/chains";
import { bigNumberify } from "lib/numbers";
import useSWR from "swr";

export function useVolumeInfo() {
  const url = `${getServerUrl(BASE, "/volume/24h")}`;

  const { data } = useSWR(
    url,
    async (url) => {
      const res = await fetch(url);
      const json = await res.json();
      return {
        [BASE]: bigNumberify(json[BASE]),
      };
    },
    {
      refreshInterval: 60000,
    }
  );

  return data;
}
