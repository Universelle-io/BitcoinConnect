import { bitcoinsdk } from "bitcoinsdk/core";
import type { LeatherProvider } from "@leather.io/rpc";
import type { SignPSBTOptions, ConnectWalletReturn, LeatherSignPsbtRequestParams } from "../types/index.d.ts";

class LeatherWallet {
  private readonly provider: LeatherProvider | undefined;
  label = "Leather";
  icon = "https://openbook.0.srcpad.pro/static/assets/leather.png";

  constructor() {
    this.provider = (globalThis).LeatherProvider as LeatherProvider;
  }

  public async connectWallet(): Promise<ConnectWalletReturn | null> {
    if (typeof globalThis !== "undefined" && this.provider) {
      try {
        const { result } = await this.provider.request("getAddresses");
        if (result && result.addresses.length > 0) {
          const account = result.addresses.find((account) => account.type === 'p2wpkh');
          if (account) {
            const address = account.address;
            const publicKey = account.publicKey;
            return { address, publicKey };
          }
        }
      } catch (error) {
        console.error("Error connecting to Leather Wallet:", error);
        return null;
      }
    } else {
      throw new Error("Leather Wallet not installed");
    }
    return null;
  }

  public async signMessage(message: string): Promise<string> {
    if (typeof globalThis !== "undefined" && this.provider) {
      const { result } = await this.provider.request(
        "signMessage",
        {
          message,
          paymentType: "p2wpkh",
          network: "mainnet",
        },
      );
      return result.signature;
    }
    throw new Error("Leather Wallet not installed");
  }

  public async signPSBT(
    psbt: string,
    options: SignPSBTOptions,
  ): Promise<string | null> {
    if (typeof globalThis !== "undefined" && this.provider) {
      try {
        const { inputsToSign, broadcast } = options;
        const requestParams: LeatherSignPsbtRequestParams = {
          hex: psbt,
          //@ts-ignore
          broadcast: broadcast,
        };
        if (options && inputsToSign) {
          requestParams.allowedSighash = inputsToSign[0].sighashTypes
          requestParams.signAtIndex = inputsToSign.map((input) => input.index)
        }
        const signedPsbt = await this.provider.request('signPsbt', requestParams);
        return signedPsbt.result.hex;
      } catch (error) {
        console.error("Error signing PSBT with Leather Wallet:", error);
        return null;
      }
    } else {
      throw new Error("Leather Wallet not installed");
    }
  }

  public async pushTX(txHex: string): Promise<{ result: string } | null> {
    return await bitcoinsdk.bitcoin.sendRawTransaction({ txHex });
  }
}

export const Leather = new LeatherWallet();