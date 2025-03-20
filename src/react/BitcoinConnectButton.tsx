import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

// Definimos la interfaz para el elemento web component
interface BitcoinConnectElement extends HTMLElement {
  connectWallet: (provider: string) => Promise<void>;
  disconnectWallet: () => void;
  walletManager: {
    walletAddress: string | null;
    walletProvider: string | null;
    connected: boolean;
  };
}

// Importamos el tipo para las propiedades del web component
type BitcoinConnectButtonProps = {
  'button-text'?: string;
  'connected-text'?: string;
  'loading-text'?: string;
  'modal-title'?: string;
  'theme'?: 'default' | 'dark';
  'show-address'?: boolean | string;
  'show-provider'?: boolean | string;
  'primary-color'?: string;
  'primary-hover'?: string;
  'connected-color'?: string;
  'connected-hover'?: string;
  'wallet-info-bg'?: string;
  'wallet-info-color'?: string;
  'primary-shadow'?: string;
  'primary-shadow-hover'?: string;
  'connected-shadow'?: string;
  'connected-shadow-hover'?: string;
  'modal-bg'?: string;
  'modal-text'?: string;
  'modal-border'?: string;
  'modal-option-border'?: string;
  'modal-option-hover'?: string;
  'modal-option-hover-border'?: string;
  'modal-close-color'?: string;
  'modal-close-hover'?: string;
  'modal-close-hover-color'?: string;
  className?: string;
  style?: React.CSSProperties;
  onConnect?: (provider: string, address: string) => void;
  onDisconnect?: () => void;
};

// Definimos el tipo para la referencia del componente
export interface BitcoinConnectButtonRef {
  connectWallet: (provider: string) => Promise<void>;
  disconnectWallet: () => void;
  getWalletInfo: () => { address: string | null; provider: string | null; connected: boolean };
}

// Aseguramos que el web component esté registrado
const ensureWebComponentRegistered = () => {
  // Importamos dinámicamente solo en el navegador
  if (typeof window !== 'undefined') {
    import('../components/connectButton.js');
  }
};

// Componente React que envuelve el web component
const BitcoinConnectButton = forwardRef<BitcoinConnectButtonRef, BitcoinConnectButtonProps>(
  (props, ref) => {
    const elementRef = useRef<BitcoinConnectElement | null>(null);
    
    // Registramos el web component al montar el componente
    useEffect(() => {
      ensureWebComponentRegistered();
    }, []);

    // Exponemos los métodos del web component a través de la referencia
    useImperativeHandle(ref, () => ({
      connectWallet: async (provider: string) => {
        if (elementRef.current) {
          return elementRef.current.connectWallet(provider);
        }
      },
      disconnectWallet: () => {
        if (elementRef.current) {
          elementRef.current.disconnectWallet();
        }
      },
      getWalletInfo: () => {
        if (elementRef.current) {
          const walletManager = elementRef.current.walletManager || {};
          return {
            address: walletManager.walletAddress || null,
            provider: walletManager.walletProvider || null,
            connected: walletManager.connected || false
          };
        }
        return { address: null, provider: null, connected: false };
      }
    }));

    // Manejamos los eventos del web component
    useEffect(() => {
      const element = elementRef.current;
      if (!element) return;

      const handleConnect = (e: Event) => {
        const customEvent = e as CustomEvent;
        if (props.onConnect && customEvent.detail) {
          props.onConnect(
            customEvent.detail.provider,
            customEvent.detail.address
          );
        }
      };

      const handleDisconnect = () => {
        if (props.onDisconnect) {
          props.onDisconnect();
        }
      };

      element.addEventListener('wallet-connected', handleConnect);
      element.addEventListener('wallet-disconnected', handleDisconnect);

      return () => {
        element.removeEventListener('wallet-connected', handleConnect);
        element.removeEventListener('wallet-disconnected', handleDisconnect);
      };
    }, [props.onConnect, props.onDisconnect]);

    // Filtramos las propiedades para separar las propiedades de React de las del web component
    const { className, style, onConnect, onDisconnect, ...webComponentProps } = props;

    // Convertimos las propiedades booleanas a strings para el web component
    const processedProps: Record<string, string> = {};
    
    for (const [key, value] of Object.entries(webComponentProps)) {
      if (typeof value === 'boolean') {
        processedProps[key] = value ? 'true' : 'false';
      } else if (value !== undefined && value !== null) {
        processedProps[key] = String(value);
      }
    }

    // Renderizamos el web component con las propiedades procesadas
    return React.createElement('btc-wallet-connect', {
      ref: elementRef,
      className,
      style,
      ...processedProps
    });
  }
);

BitcoinConnectButton.displayName = 'BitcoinConnectButton';

export default BitcoinConnectButton;
