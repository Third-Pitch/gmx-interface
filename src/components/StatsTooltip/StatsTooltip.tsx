import { Trans } from "@lingui/macro";
import { BigNumber } from "ethers";
import { USD_DECIMALS } from "lib/legacy";
import "./StatsTooltip.css";
import { formatAmount } from "lib/numbers";

type Props = {
  title: string;
  total?: BigNumber;
  avaxValue?: BigNumber;
  arbitrumValue?: BigNumber;
  showDollar?: boolean;
  decimalsForConversion: number;
  symbol: string;
};

export default function StatsTooltip({
  title,
  total,
  avaxValue,
  arbitrumValue,
  showDollar = true,
  decimalsForConversion = USD_DECIMALS,
  symbol,
}: Props) {
  return (
    <>
     
    </>
  );
}
