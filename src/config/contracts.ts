import { ethers } from "ethers";
import { BASE, ARBITRUM_TESTNET,  AVALANCHE_FUJI } from "./chains";

const { AddressZero } = ethers.constants;

export const XGMT_EXCLUDED_ACCOUNTS = [
  "0x330eef6b9b1ea6edd620c825c9919dc8b611d5d5",
  "0xd9b1c23411adbb984b1c4be515fafc47a12898b2",
  "0xa633158288520807f91ccc98aa58e0ea43acb400",
  "0xffd0a93b4362052a336a7b22494f1b77018dd34b",
];

const CONTRACTS = {
 
  [ARBITRUM_TESTNET]: {
    // arbitrum testnet
    Vault: "0xBc9BC47A7aB63db1E0030dC7B60DDcDe29CF4Ffb",
    Router: "0xe0d4662cdfa2d71477A7DF367d5541421FAC2547",
    VaultReader: "0xFc371E380262536c819D12B9569106bf032cC41c",
    Reader: "0x2E093c70E3A7E4919611d2555dFd8D697d2fC0a1",
    ElpManager: "0xD875d99E09118d2Be80579b9d23E83469077b498",
    RewardRouter: "0x0000000000000000000000000000000000000000",
    RewardReader: "0x0000000000000000000000000000000000000000",
    NATIVE_TOKEN: "0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681",
    ELP: "0xb4f81Fa74e06b5f762A104e47276BA9b2929cb27",
    EDDX: "0x0000000000000000000000000000000000000000",
    ES_EDDX: "0x0000000000000000000000000000000000000000",
    BN_EDDX: "0x0000000000000000000000000000000000000000",
    USDG: "0xBCDCaF67193Bf5C57be08623278fCB69f4cA9e68",
    ES_EDDX_IOU: "0x0000000000000000000000000000000000000000",
    StakedEddxTracker: "0x0000000000000000000000000000000000000000",
    BonusEddxTracker: "0x0000000000000000000000000000000000000000",
    FeeEddxTracker: "0x0000000000000000000000000000000000000000",
    StakedElpTracker: "0x0000000000000000000000000000000000000000",
    FeeElpTracker: "0x0000000000000000000000000000000000000000",

    StakedEddxDistributor: "0x0000000000000000000000000000000000000000",
    StakedElpDistributor: "0x0000000000000000000000000000000000000000",

    EddxVester: "0x0000000000000000000000000000000000000000",
    ElpVester: "0x0000000000000000000000000000000000000000",

    OrderBook: "0xebD147E5136879520dDaDf1cA8FBa48050EFf016",
    OrderBookReader: "0xC492c8d82DC576Ad870707bb40EDb63E2026111E",

    PositionRouter: "0xB4bB78cd12B097603e2b55D2556c09C17a5815F8",
    PositionManager: "0x168aDa266c2f10C1F37973B213d6178551030e44",

    // UniswapEddxEthPool: "0x80A9ae39310abf666A87C743d6ebBD0E8C42158E",
    ReferralStorage: "0x0000000000000000000000000000000000000000",
    ReferralReader: "0x0000000000000000000000000000000000000000",

    Multicall: "0xcA11bde05977b3631167028862bE2a173976CA11",
  },
  [BASE]: {
    // arbitrum mainnet
    Vault: "0x74cCDFcff6CbE68ecD1eb21a23243D217601F4C0",
    Router: "0xf925098c0fb905D7256a61FfA388940f8E8Be853",
    VaultReader: "0xf8B108D0765b6Da8B217eb3495bbE784BA249947",
    Reader: "0x3D55cc23d4855c7EB9429577F5aAD417376021E2",
    ElpManager: "0x1379acfCD7e4AD52A06560F694DCeB5D442EBe1A",
    RewardRouter: "0x374Fc25c8AE99bc71B616142bC4BB09D8d44BB3b",
    ElpRewardRouter: "0x51E6F5bf44f4dd97EdCD9D3C435bDF00988374a4",
    RewardReader: "0xD3Ac10fBfD8e1484Ac48C7Af408e104a2364B7D1",
    NATIVE_TOKEN: "0x4200000000000000000000000000000000000006",
    ELP: "0x897Cc73723966a0648E99281986eeff71313E95F",
    EDDX: "0x24B63ae170152FcCF6a11Cd77ffa2D7F04ed999D",
    ES_EDDX: "0x2DF1E0dBEC080a3Db97a19Cf955b9589EE511cfd",
    BN_EDDX: "0xb7D4fC3aea728bE1417412953f6CeC34714758FF",
    USDG: "0x66760142A04dD137676dD7DFF1E06EAd48214AFC",
    StakedEddxTracker: "0x420ddA6D4D2384d2dBa3e392143A487517C79bE1",
    BonusEddxTracker: "0x67798B0f94378528318a5739C2d17a4652cF9A1A",
    FeeEddxTracker: "0x6a1B048373267BC49EEBF3915C4E72F667AcC8aC",
    StakedElpTracker: "0x357C8A51981237bF34759871B9a62993A77E634A",
    FeeElpTracker: "0xDb0bdACf2C8A928756D86034B133bb7F2191Ca91",

    StakedEddxDistributor: "0x141Fa2311A62f6d8a53154277eDF79beCd9c51F2",
    StakedElpDistributor: "0x67F1E16a4E2a46Ef9136AAcCaeC509efc584D27B",

    EddxVester: "0xF825318958A1672B789dc5b98F24d946401FA3B0",
    ElpVester: "0xbfF16e65445e94E8691E1FFa99ab75D08fa3f0D9",

    OrderBook: "0x9Aee9917A0E7D6fCe32751D7F93e9fB1658dD16D",
    OrderExecutor: "0x43Ba508844BAB522Fe17d3a063316C52f57463e8",
    OrderBookReader: "0xD33A13c661d1614f41d1FDB8Cc3C68a58a443B7A",

    PositionRouter: "0xCf67dd61bA0B6f6E85aFa3D7A9F4550c2FF0AD94",
    PositionManager: "0x8475Fbe5BcCF02c66c386dD8AAf251005e4b0cC8",

    UniswapEddxEthPool: "0x6F11D6FA55f548571D7854360B564722043D3E34",
    ReferralStorage: "0x681e4284DaD7Ac26D9a9e32dfed4dc1b9B231580",
    ReferralReader: "0x15ac0392fd77EF200bbb5F4a29008Fc0baAaa060",

    Multicall: "0x4e6Cdd6d92eEDAC257536d28612205ddC65cD4Ac",
  },
  [AVALANCHE_FUJI]: {
    Vault: AddressZero,
    Router: AddressZero,
    VaultReader: AddressZero,
    Reader: AddressZero,
    ElpManager: AddressZero,
    RewardRouter: AddressZero,
    RewardReader: AddressZero,
    NATIVE_TOKEN: "0x1D308089a2D1Ced3f1Ce36B1FcaF815b07217be3",
    ELP: AddressZero,
    EDDX: AddressZero,
    ES_EDDX: AddressZero,
    BN_EDDX: AddressZero,
    USDG: AddressZero,
    ES_EDDX_IOU: AddressZero,

    StakedEddxTracker: AddressZero,
    BonusEddxTracker: AddressZero,
    FeeEddxTracker: AddressZero,
    StakedElpTracker: AddressZero,
    FeeElpTracker: AddressZero,

    StakedEddxDistributor: AddressZero,
    StakedElpDistributor: AddressZero,

    EddxVester: AddressZero,
    ElpVester: AddressZero,

    OrderBook: AddressZero,
    OrderExecutor: AddressZero,
    OrderBookReader: AddressZero,

    PositionRouter: AddressZero,
    PositionManager: AddressZero,

    TraderJoeEddxAvaxPool: AddressZero,
    ReferralStorage: AddressZero,
    ReferralReader: AddressZero,
  },
};

export function getContract(chainId: number, name: string): string {
  if (!CONTRACTS[chainId]) {
    throw new Error(`Unknown chainId ${chainId}`);
  }

  if (!CONTRACTS[chainId][name]) {
    throw new Error(`Unknown contract "${name}" for chainId ${chainId}`);
  }

  return CONTRACTS[chainId][name];
}
