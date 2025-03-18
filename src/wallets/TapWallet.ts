
import { bitcoinsdk } from "bitcoinsdk/core";
import type { SignPSBTOptions, TapWalletSignPsbtRequestParams, ConnectWalletReturn, TapWalletProvider } from "../types/index.d.ts";



class TapWalletWallet {
  private readonly provider: TapWalletProvider | undefined;
  label = "TapWallet";
  icon = "https://openbook.0.srcpad.pro/static/assets/tapwallet.png";

  constructor() {
    this.provider = (globalThis).tapwallet as TapWalletProvider;
  }

  public async connectWallet(): Promise<ConnectWalletReturn | null> {
    if (typeof globalThis !== "undefined" && this.provider) {
      try {
        const accounts = await this.provider.requestAccounts();
        const address = accounts[0];
        const publicKey = await this.provider.getPublicKey()
        return { address, publicKey }
      } catch (error) {
        console.error("Error connecting to TapWallet:", error);
        return null;
      }
    } else {
      throw new Error("TapWallet not installed");
    }
  }

  public async signMessage(message: string): Promise<string> {
    if (typeof globalThis !== "undefined" && this.provider) {
      const signature = await this.provider.signMessage(message);
      return signature;
    }
    throw new Error("TapWallet not installed");
  }

  public async signPSBT(
    psbt: string,
    options: SignPSBTOptions,
  ): Promise<string | null> {
    if (typeof globalThis !== "undefined" && this.provider) {
      try {
        if (options) {
          const opt: TapWalletSignPsbtRequestParams = {};
          if ("autoFinalized" in options) opt.autoFinalized = options.autoFinalized;
          if ("inputsToSign" in options) opt.toSignInputs = options.inputsToSign;
          const signedPsbt = await this.provider.signPsbt(psbt, opt);
          return signedPsbt;
        }
        const signedPsbt = await this.provider.signPsbt(psbt);
        return signedPsbt;
      } catch (error) {
        console.error("Error signing PSBT with TapWallet:", error);
        return null;
      }
    } else {
      throw new Error("TapWallet not installed");
    }
  }

  public async pushTX(txHex: string) {
    return await bitcoinsdk.bitcoin.sendRawTransaction({ txHex });
  };
}

export const TapWallet = new TapWalletWallet();