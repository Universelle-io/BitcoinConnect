import type { WalletManagerInterface } from './WalletManager';
import type { LeatherProvider as LProvider } from '../wallets/Leather';
import type { OKXProvider } from '../wallets/OKX';
import type { TapWalletProvider } from '../wallets/TapWallet';
import type { UnisatProvider } from '../wallets/Unisat';

declare global {
  var walletManagerInstance: WalletManagerInterface | undefined;
  var LeatherProvider: LProvider | undefined;
  var okxwallet: OKXProvider | undefined;
  var tapwallet: TapWalletProvider | undefined;
  var unisat: UnisatProvider | undefined;
}

export {};