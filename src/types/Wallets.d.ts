export interface ConnectWalletReturn {
	address: string;
	publicKey: string;
}

export interface InputToSign {
	index: number;
	address: string;
	sighashTypes: number[];
}

export interface SignPSBTOptions {
	broadcast?: boolean;
	autoFinalized?: boolean;
	inputsToSign?: InputToSign[];
}

export declare enum SignatureHash {
	ALL = 1,
	NONE = 2,
	SINGLE = 3,
	ALL_ANYONECANPAY = 129,
	NONE_ANYONECANPAY = 130,
	SINGLE_ANYONECANPAY = 131
}
export interface LeatherSignPsbtRequestParams {
	account?: number;
	allowedSighash?: SignatureHash[];
	hex: string;
	signAtIndex?: number | number[];
}

export interface OKXSignPsbtRequestParams {
	autoFinalized?: boolean;
	toSignInputs?: InputToSign[];
}

export interface TapWalletSignPsbtRequestParams {
	autoFinalized?: boolean;
	toSignInputs?: InputToSign[];
}

export interface UnisatSignPsbtRequestParams {
	autoFinalized?: boolean;
	toSignInputs?: InputToSign[];
}

export interface OKXProvider {
	bitcoin: {
		connect: () => Promise<ConnectWalletReturn>;
		signMessage: (msg: string) => Promise<string>;
		signPsbt: (psbt: string, options?: SignPSBTOptions) => Promise<string>;
	}
}

export interface TapWalletProvider {
	requestAccounts: () => Promise<string[]>;
	getPublicKey: () => Promise<string>;
	signMessage: (msg: string) => Promise<string>;
	signPsbt: (psbt: string, options?: SignPSBTOptions) => Promise<string>;
}

export interface UnisatProvider {
	requestAccounts: () => Promise<string[]>;
	getPublicKey: () => Promise<string>;
	signMessage: (msg: string) => Promise<string>;
	signPsbt: (psbt: string, options?: SignPSBTOptions) => Promise<string>;
}