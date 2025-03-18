import type { WalletManagerInterface, SignPSBTOptions } from "../types/index.js";
import { walletProviders } from "../wallets/index.js";

import { atom } from 'nanostores';

class WalletManager implements WalletManagerInterface {
	walletAddress: string | null = null;
	publicKey: string | null = null;
	connected = false;
	walletProvider: string | null = null;

	constructor() {
		this.connectWalletFromLocalStorage();
	}

	private connectWalletFromLocalStorage(): void {
		const storedWallets = localStorage.getItem("wallets");
		const activeProvider = localStorage.getItem("activeProvider");

		if (storedWallets && activeProvider) {
			const parsedWallets = JSON.parse(storedWallets);
			const providerData = parsedWallets[activeProvider as keyof typeof walletProviders];

			if (providerData && walletProviders[activeProvider as keyof typeof walletProviders]) {
				this.walletProvider = walletProviders[activeProvider as keyof typeof walletProviders].label;
				this.walletAddress = providerData.address;
				this.publicKey = providerData.publicKey;
				this.connected = true;
			}
		}
	}

	async connectWallet(providerKey: string): Promise<void> {
		const provider = walletProviders[providerKey as keyof typeof walletProviders];

		if (provider) {
			const { address, publicKey } = (await provider.connectWallet()) || {};
			if (address && publicKey) {
				this.walletProvider = provider.label;
				this.walletAddress = address;
				this.publicKey = publicKey;
				this.connected = true;

				const storedWallets = localStorage.getItem("wallets");
				const parsedWallets = storedWallets ? JSON.parse(storedWallets) : {};
				parsedWallets[providerKey] = { address, publicKey };
				localStorage.setItem("wallets", JSON.stringify(parsedWallets));
				localStorage.setItem("activeProvider", providerKey);
			}
		}
	}

	disconnectWallet(): void {
		this.walletAddress = null;
		this.connected = false;
		this.walletProvider = null;

		const storedWallets = localStorage.getItem("wallets");
		const activeProvider = localStorage.getItem("activeProvider");

		if (storedWallets && activeProvider) {
			const parsedWallets = JSON.parse(storedWallets);
			delete parsedWallets[activeProvider];
			localStorage.setItem("wallets", JSON.stringify(parsedWallets));
		}
		localStorage.removeItem("activeProvider");
	}

	async signMessage(message: string): Promise<string | null> {
		const provider = walletProviders[this.walletProvider as keyof typeof walletProviders];
		
		if (!this.walletProvider) {
			console.error("Wallet provider is not defined");
			return null;
		}
		return await provider.signMessage(message);
	}

	async signPSBT(psbt: string, options: SignPSBTOptions = {}): Promise<string | null> {
		try {
			console.log("🔍 Checking WalletManager instance before signing");
			console.log("walletProvider:", this.walletProvider);
			console.log("walletAddress:", this.walletAddress);
			console.log("Connected:", this.connected);

			if (!this.walletProvider) {
				console.warn("⚠️ `walletProvider` es undefined en `signPSBT()`, intentando obtenerlo...");
				this.walletProvider = globalThis.walletManagerInstance?.walletProvider ?? null;
			}

			if (!this.walletProvider) {
				console.error("❌ `walletProvider` sigue siendo undefined (signPSBT)");
				return null;
			}
			const provider = walletProviders[this.walletProvider as keyof typeof walletProviders];
			if (!provider) {
				console.error("❌ Wallet configuration not found for provider:", this.walletProvider);
				return null;
			}
			return await provider.signPSBT(psbt, options);
		} catch (error) {
			console.error("❌ Error signing PSBT:", error);
			return null;
		}
	}


	async pushTX(txHex: string): Promise<string | null> {
		try {
			if (!this.walletProvider) {
				console.error("Wallet provider is not defined");
				return null;
			}
			const provider = walletProviders[this.walletProvider as keyof typeof walletProviders];
			if (!provider) {
				console.error("Wallet configuration not found for provider:", this.walletProvider);
				return null;
			}
			const result = await provider.pushTX(txHex);
			return typeof result === 'string' ? result : result?.result || null;
		} catch (error) {
			console.error("Error pushing TX:", error);
			return null;
		}
	}
}


const walletManagerStore = atom<WalletManager | null>(null);

function useWallet(): WalletManager {
	if (!walletManagerStore.get()) {
		console.warn("🆕 walletManagerInstance doesnt exist, creating it...");
		walletManagerStore.set(new WalletManager());
	}
	return walletManagerStore.get() as WalletManager;
}

export { WalletManager, useWallet, walletManagerStore };