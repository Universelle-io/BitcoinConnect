# Componentes React para BitcoinConnect

Este directorio contiene componentes React que envuelven los web components de BitcoinConnect, permitiendo una integración más sencilla con aplicaciones React.

## BitcoinConnectButton

Un componente React que envuelve el web component `bitcoin-connect`.

### Instalación

```bash
npm install bitcoinconnect
```

### Uso básico

```jsx
import React from 'react';
import { BitcoinConnectButton } from 'bitcoinconnect/react';

function App() {
  return (
    <div>
      <h1>Mi aplicación Bitcoin</h1>
      <BitcoinConnectButton 
        button-text="Conectar Wallet"
        theme="dark"
        onConnect={(provider, address) => {
          console.log(`Conectado a ${provider} con dirección ${address}`);
        }}
        onDisconnect={() => {
          console.log('Wallet desconectada');
        }}
      />
    </div>
  );
}

export default App;
```

### Uso con Ref

```jsx
import React, { useRef } from 'react';
import { BitcoinConnectButton, BitcoinConnectButtonRef } from 'bitcoinconnect/react';

function App() {
  const buttonRef = useRef<BitcoinConnectButtonRef>(null);

  const handleConnect = () => {
    // Conectar a una wallet específica programáticamente
    buttonRef.current?.connectWallet('Leather');
  };

  const handleDisconnect = () => {
    // Desconectar la wallet programáticamente
    buttonRef.current?.disconnectWallet();
  };

  const getWalletInfo = () => {
    // Obtener información de la wallet conectada
    const info = buttonRef.current?.getWalletInfo();
    console.log('Wallet info:', info);
  };

  return (
    <div>
      <h1>Mi aplicación Bitcoin</h1>
      <BitcoinConnectButton 
        ref={buttonRef}
        button-text="Conectar Wallet"
        theme="dark"
      />
      <button onClick={handleConnect}>Conectar a Leather</button>
      <button onClick={handleDisconnect}>Desconectar</button>
      <button onClick={getWalletInfo}>Obtener info</button>
    </div>
  );
}

export default App;
```

### Propiedades

El componente acepta todas las propiedades del web component `bitcoin-connect`, además de:

- `className`: Clase CSS para el componente
- `style`: Estilos inline para el componente
- `onConnect`: Callback llamado cuando se conecta una wallet
- `onDisconnect`: Callback llamado cuando se desconecta una wallet

### Métodos (vía Ref)

- `connectWallet(provider: string)`: Conecta a una wallet específica
- `disconnectWallet()`: Desconecta la wallet actual
- `getWalletInfo()`: Obtiene información sobre la wallet conectada

### Personalización

```jsx
<BitcoinConnectButton 
  button-text="Conectar a Bitcoin"
  connected-text="Wallet Conectada"
  loading-text="Conectando..."
  modal-title="Selecciona tu Wallet"
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
```
