declare class BitcoinConnectButton extends HTMLElement {
  walletManager: {
    walletAddress: string | null;
    walletProvider: string | null;
    connected: boolean;
  };
  connectWallet(provider: string): Promise<void>;
  disconnectWallet(): void;
  signMessage(message: string): Promise<string | null>;
  signPSBT(psbt: string, options?: any): Promise<string | null>;
  pushTX(txHex: string): Promise<string | null>;
}

export default BitcoinConnectButton;
