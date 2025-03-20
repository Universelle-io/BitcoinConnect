# React Components for BitcoinConnect

This directory contains React components that wrap BitcoinConnect web components, allowing for easier integration with React applications.

## BitcoinConnectButton

A React component that wraps the `bitcoin-connect` web component.

### Installation

```bash
npm install btc-wallet-connect
```

### Basic Usage

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
        onDisconnect={() => {
          console.log('Wallet disconnected');
        }}
      />
    </div>
  );
}

export default App;
```

### Usage with Ref

```jsx
import React, { useRef } from 'react';
import { BitcoinConnectButton, BitcoinConnectButtonRef } from 'btc-wallet-connect/react';

function App() {
  const buttonRef = useRef<BitcoinConnectButtonRef>(null);

  const handleConnect = () => {
    // Connect to a specific wallet programmatically
    buttonRef.current?.connectWallet('Leather');
  };

  const handleDisconnect = () => {
    // Disconnect the wallet programmatically
    buttonRef.current?.disconnectWallet();
  };

  const getWalletInfo = () => {
    // Get information about the connected wallet
    const info = buttonRef.current?.getWalletInfo();
    console.log('Wallet info:', info);
  };

  return (
    <div>
      <h1>My Bitcoin Application</h1>
      <BitcoinConnectButton 
        ref={buttonRef}
        button-text="Connect Wallet"
        theme="dark"
      />
      <button onClick={handleConnect}>Connect to Leather</button>
      <button onClick={handleDisconnect}>Disconnect</button>
      <button onClick={getWalletInfo}>Get info</button>
    </div>
  );
}

export default App;
```

### Properties

The component accepts all properties of the `bitcoin-connect` web component, plus:

- `className`: CSS class for the component
- `style`: Inline styles for the component
- `onConnect`: Callback called when a wallet is connected
- `onDisconnect`: Callback called when a wallet is disconnected

### Methods (via Ref)

- `connectWallet(provider: string)`: Connects to a specific wallet
- `disconnectWallet()`: Disconnects the current wallet
- `getWalletInfo()`: Gets information about the connected wallet

### Customization

```jsx
<BitcoinConnectButton 
  button-text="Connect to Bitcoin"
  connected-text="Wallet Connected"
  loading-text="Connecting..."
  modal-title="Select your Wallet"
  theme="dark"
  show-address={true}
  show-provider={true}
  primary-color="#f7931a"
  primary-hover="#e78319"
  connected-color="#4caf50"
  connected-hover="#3d8b40"
  wallet-info-bg="#f5f5f5"
  wallet-info-color="#333"
/>
