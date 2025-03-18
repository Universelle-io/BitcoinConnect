import { bitcoinsdk } from "bitcoinsdk/core";
import type { SignPSBTOptions, OKXSignPsbtRequestParams, ConnectWalletReturn, OKXProvider } from "../types/index.d.ts";


class OKXWallet {
  private readonly provider: OKXProvider | undefined;
  label = "OKX";
  icon = "https://openbook.0.srcpad.pro/static/assets/okx.png";

  constructor() {
    this.provider = (globalThis).okxwallet as OKXProvider;
  }


  public async connectWallet(): Promise<ConnectWalletReturn | null> {
    if (typeof globalThis !== "undefined" && this.provider?.bitcoin) {
      try {
        const result = await this.provider.bitcoin.connect();
        return result;
      } catch (error) {
        console.error("Error connecting to OKX Wallet:", error);
        return null;
      }
    } else {
      throw new Error("OKX Wallet not installed");
    }
  };

  public async signMessage(message: string) {
    if (typeof globalThis !== "undefined" && this.provider?.bitcoin) {
      const signature = await this.provider.bitcoin.signMessage(message);
      return signature;
    }
    throw new Error("OKX Wallet not installed");
  };

  public async signPSBT(
    psbt: string,
    options: SignPSBTOptions,
  ): Promise<string | null> {

    if (typeof globalThis !== "undefined" && this.provider?.bitcoin) {
      try {
        if (options) {
          const opt: OKXSignPsbtRequestParams = {}
          if ("autoFinalized" in options) opt.autoFinalized = options.autoFinalized;
          if ("inputsToSign" in options) opt.toSignInputs = options.inputsToSign;
          const signedPsbt = await this.provider.bitcoin.signPsbt(psbt, opt);
          return signedPsbt;
        }
        const signedPsbt = await this.provider.bitcoin.signPsbt(psbt);
        return signedPsbt;
      } catch (error) {
        console.error("Error signing PSBT with OKX Wallet:", error);
        return null;
      }
    } else {
      throw new Error("OKX Wallet not installed");
    }
  };

  public async pushTX(txHex: string) {
    return await bitcoinsdk.bitcoin.sendRawTransaction({ txHex });
  };
}

export const OKX = new OKXWallet();