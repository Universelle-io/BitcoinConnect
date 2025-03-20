# BitcoinConnect

A library for connecting Bitcoin wallets in web applications.

## Installation

```bash
npm install btc-wallet-connect
```

## Usage

### Web Component

```html
<script type="module">
  import 'btc-wallet-connect';
</script>

<bitcoin-connect button-text="Connect Wallet" theme="dark"></bitcoin-connect>
```

### JavaScript API

```javascript
import { useWallet, walletProviders } from 'btc-wallet-connect';

// Initialize the wallet manager
const wallet = useWallet();

// Connect to a wallet
await wallet.connectWallet('Leather');

// Sign a message
const signature = await wallet.signMessage('Hello, Bitcoin!');
```

### React Component

```jsx
import React from 'react';
import { BitcoinConnectButton } from 'btc-wallet-connect/react';

function App() {
  return (
    <div>
      <h1>My Bitcoin Application</h1>
      <BitcoinConnectButton 
        button-text="Connect Wallet"
        theme="dark"
        onConnect={(provider, address) => {
          console.log(`Connected to ${provider} with address ${address}`);
        }}
      />
    </div>
  );
}
```

For more details about the React component, check out [the React documentation](./src/react/README.md).

## Compatible Wallets

- Leather
- OKX
- Unisat
- TapWallet

## API

### WalletManager

```javascript
import { useWallet } from 'btc-wallet-connect';

const wallet = useWallet();

// Properties
wallet.walletAddress; // Connected wallet address
wallet.publicKey; // Wallet public key
wallet.connected; // Connection status
wallet.walletProvider; // Wallet provider

// Methods
await wallet.connectWallet(providerKey); // Connect to a wallet
wallet.disconnectWallet(); // Disconnect the wallet
await wallet.signMessage(message); // Sign a message
await wallet.signPSBT(psbt, options); // Sign a PSBT
await wallet.pushTX(txHex); // Send a transaction
```

### BitcoinConnectButton (Web Component)

```html
<bitcoin-connect
  button-text="Connect Wallet"
  connected-text="Wallet Connected"
  loading-text="Connecting..."
  modal-title="Select your Wallet"
  theme="dark"
  show-address="true"
  show-provider="true"
  primary-color="#f7931a"
  primary-hover="#e78319"
  connected-color="#4caf50"
  connected-hover="#3d8b40"
></bitcoin-connect>
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Publishing to npm

```bash
# Make sure you have an npm account and are logged in
npm login

# Build the package
npm run build

# Publish the package
npm publish
```

## License

MIT
