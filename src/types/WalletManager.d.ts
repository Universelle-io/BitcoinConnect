import type { SignPSBTOptions } from "./Wallets.d.ts"

export interface WalletManagerInterface {
	walletAddress: string | null;
	publicKey: string | null;
	connected: boolean;
	walletProvider: string | null;
	connectWallet: (providerKey: string) => Promise<void>;
	disconnectWallet: () => void;
	signPSBT: (psbt: string, options?: SignPSBTOptions) => Promise<string | null>;
	signMessage: (message: string) => Promise<string | null>;
	pushTX?: (txHex: string) => Promise<string | null>;
}