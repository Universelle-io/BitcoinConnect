# BitcoinConnect

Una biblioteca para conectar carteras de Bitcoin en aplicaciones web.

## Instalación

```bash
npm install bitcoinconnect
```

## Uso

### Web Component

```html
<script type="module">
  import 'bitcoinconnect';
</script>

<bitcoin-connect button-text="Conectar Wallet" theme="dark"></bitcoin-connect>
```

### JavaScript API

```javascript
import { useWallet, walletProviders } from 'bitcoinconnect';

// Inicializar el gestor de carteras
const wallet = useWallet();

// Conectar a una cartera
await wallet.connectWallet('Leather');

// Firmar un mensaje
const signature = await wallet.signMessage('Hello, Bitcoin!');
```

### Componente React

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
      />
    </div>
  );
}
```

Para más detalles sobre el componente React, consulta [la documentación de React](./src/react/README.md).

## Carteras compatibles

- Leather
- OKX
- Unisat
- TapWallet

## API

### WalletManager

```javascript
import { useWallet } from 'bitcoinconnect';

const wallet = useWallet();

// Propiedades
wallet.walletAddress; // Dirección de la cartera conectada
wallet.publicKey; // Clave pública de la cartera
wallet.connected; // Estado de conexión
wallet.walletProvider; // Proveedor de la cartera

// Métodos
await wallet.connectWallet(providerKey); // Conectar a una cartera
wallet.disconnectWallet(); // Desconectar la cartera
await wallet.signMessage(message); // Firmar un mensaje
await wallet.signPSBT(psbt, options); // Firmar un PSBT
await wallet.pushTX(txHex); // Enviar una transacción
```

### BitcoinConnectButton (Web Component)

```html
<bitcoin-connect
  button-text="Conectar Wallet"
  connected-text="Wallet Conectada"
  loading-text="Conectando..."
  modal-title="Selecciona tu Wallet"
  theme="dark"
  show-address="true"
  show-provider="true"
  primary-color="#f7931a"
  primary-hover="#e78319"
  connected-color="#4caf50"
  connected-hover="#3d8b40"
></bitcoin-connect>
```

## Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## Publicación en npm

```bash
# Asegúrate de tener una cuenta en npm y estar logueado
npm login

# Construye el paquete
npm run build

# Publica el paquete
npm publish
```

## Licencia

MIT
