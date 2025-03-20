import { useWallet } from '../context/WalletManager.js';
import { walletProviders } from '../wallets/index.js';
import { styles } from './styles.js';
import { btc_logo } from './assets.js';

class BitcoinConnectButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.isLoading = false;

    try {
      this.walletManager = useWallet();
      console.log("WalletManager initialized:", this.walletManager);
    } catch (error) {
      console.error("Error initializing WalletManager:", error);
      this.walletManager = {
        connected: false,
        walletAddress: null,
        walletProvider: null,
        connectWallet: () => console.error("WalletManager not available"),
        disconnectWallet: () => console.error("WalletManager not available")
      };
    }
    
    this.applyCustomColors();
  }

  static get observedAttributes() {
    return [
      'button-text',
      'connected-text',
      'loading-text',
      'modal-title',
      'theme',
      'show-address',
      'show-provider',
      'primary-color',
      'primary-hover',
      'connected-color',
      'connected-hover',
      'wallet-info-bg',
      'wallet-info-color'
    ];
  }

  get options() {
    return {
      buttonText: this.getAttribute('button-text') || 'Connect Wallet',
      connectedText: this.getAttribute('connected-text') || 'Wallet Connected',
      loadingText: this.getAttribute('loading-text') || 'Connecting...',
      modalTitle: this.getAttribute('modal-title') || 'Select your Wallet',
      theme: this.getAttribute('theme') || 'default',
      showAddress: this.getAttribute('show-address') !== 'false',
      showProvider: this.getAttribute('show-provider') !== 'false'
    };
  }

  connectedCallback() {
    console.log('BitcoinConnectButton connected to DOM');

    setTimeout(() => {
      this.render();
      this.updateButtonState();
    }, 0);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name.includes('color') || name.includes('hover') || name.includes('bg')) {
        this.applyCustomColors();
      }
      this.render();
      this.updateButtonState();
    }
  }
  
  applyCustomColors() {
    const customColors = {
      '--btn-primary-color': this.getAttribute('primary-color'),
      '--btn-primary-hover': this.getAttribute('primary-hover'),
      '--btn-connected-color': this.getAttribute('connected-color'),
      '--btn-connected-hover': this.getAttribute('connected-hover'),
      '--wallet-info-bg': this.getAttribute('wallet-info-bg'),
      '--wallet-info-color': this.getAttribute('wallet-info-color'),
      '--btn-primary-shadow': this.getAttribute('primary-shadow'),
      '--btn-primary-shadow-hover': this.getAttribute('primary-shadow-hover'),
      '--btn-connected-shadow': this.getAttribute('connected-shadow'),
      '--btn-connected-shadow-hover': this.getAttribute('connected-shadow-hover'),
      '--modal-bg': this.getAttribute('modal-bg'),
      '--modal-text': this.getAttribute('modal-text'),
      '--modal-border': this.getAttribute('modal-border'),
      '--modal-option-border': this.getAttribute('modal-option-border'),
      '--modal-option-hover': this.getAttribute('modal-option-hover'),
      '--modal-option-hover-border': this.getAttribute('modal-option-hover-border'),
      '--modal-close-color': this.getAttribute('modal-close-color'),
      '--modal-close-hover': this.getAttribute('modal-close-hover'),
      '--modal-close-hover-color': this.getAttribute('modal-close-hover-color')
    };
    
    this.style.cssText = Object.entries(customColors)
      .filter(([_, value]) => value !== null && value !== undefined)
      .map(([prop, value]) => `${prop}: ${value};`)
      .join(' ');
  }

  render() {
    let walletOptionsHtml = '';
    for (const [key, config] of Object.entries(walletProviders)) {
      walletOptionsHtml += `
        <div class="wallet-option" data-provider="${key}">
          ${config.icon ? `<img src="${config.icon}" alt="${config.label} logo" />` : ''}
          <span class="wallet-option-label">${config.label}</span>
        </div>
      `;
    }

    let walletAddressDisplay = '';
    if (this.walletManager.walletAddress) {
      const address = this.walletManager.walletAddress;
      walletAddressDisplay = `${address.slice(0, 6)}...${address.slice(-4)}`;
    }

    const getButtonContent = () => {
      if (this.isLoading) return `<span class="spinner"></span>`;
      if (this.walletManager.connected) {
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>`;
      }
      return `
      <span class="bitcoin-connect-icon" style="width: 24px; height: 24px;">
        ${btc_logo}  
      </span>
      ${this.options.buttonText}`;
    };

    const html = `
      <style>${styles}</style>
      
      <div class="${this.options.theme === 'dark' ? 'theme-dark' : ''} wallet-container">
        ${this.walletManager.connected ? `
          <div class="wallet-info">
            <span class="wallet-icon" style="width: 24px; height: 24px;">
            ${btc_logo}
            </span>
            <span class="wallet-address">${walletAddressDisplay}</span>
          </div>
        ` : ''}
        
        <button class="bitcoin-connect-button ${this.walletManager.connected ? 'connected' : ''} ${this.isLoading ? 'loading' : ''}">
          ${getButtonContent()}
        </button>
        
        <!-- Modal using native dialog -->
        <dialog id="wallet-dialog">
          <div class="wallet-modal-content">
            <div class="wallet-modal-header">
              <h2>${this.options.modalTitle}</h2>
              <button class="wallet-modal-close">×</button>
            </div>
            <div class="wallet-list">
              ${walletOptionsHtml}
            </div>
          </div>
        </dialog>
      </div>
    `;

    this.shadowRoot.innerHTML = html;

    this.shadowRoot.querySelector('.bitcoin-connect-button').addEventListener('click', this.handleButtonClick.bind(this));
    this.shadowRoot.querySelector('.wallet-modal-close').addEventListener('click', () => this.hideModal());

    this.shadowRoot.querySelector('dialog').addEventListener('cancel', () => this.hideModal());

    for (const option of this.shadowRoot.querySelectorAll('.wallet-option')) {
      option.addEventListener('click', () => {
        const provider = option.dataset.provider;
        this.hideModal();
        this.connectWallet(provider);
      });
    }
  }

  shouldShowStatus() {
    return this.walletManager.connected &&
      (this.options.showAddress || this.options.showProvider);
  }

  getStatusText() {
    let statusText = '';

    if (this.options.showProvider && this.walletManager.walletProvider) {
      statusText += `Wallet: ${this.walletManager.walletProvider}`;
    }

    if (this.options.showAddress && this.walletManager.walletAddress) {
      if (statusText) statusText += ' | ';
      const address = this.walletManager.walletAddress;
      const shortenedAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;
      statusText += `Address: ${shortenedAddress}`;
    }

    return statusText;
  }

  showModal() {
    const dialog = this.shadowRoot.querySelector('dialog');
    if (dialog) {
      dialog.showModal();
    }
  }

  hideModal() {
    const dialog = this.shadowRoot.querySelector('dialog');
    if (dialog) {
      dialog.close();
    }
  }

  async handleButtonClick() {
    if (this.isLoading) return;

    if (this.walletManager.connected) {
      await this.disconnect();
    } else {
      this.showModal();
    }
  }

  async connectWallet(providerKey) {
    try {
      this.setLoading(true);
      await this.walletManager.connectWallet(providerKey);
      this.updateButtonState();

      this.dispatchEvent(new CustomEvent('wallet-connected', {
        bubbles: true,
        composed: true,
        detail: {
          address: this.walletManager.walletAddress,
          publicKey: this.walletManager.publicKey,
          provider: this.walletManager.walletProvider
        }
      }));
    } catch (error) {
      console.error('Error connecting wallet:', error);

      this.dispatchEvent(new CustomEvent('wallet-error', {
        bubbles: true,
        composed: true,
        detail: { error }
      }));
    } finally {
      this.setLoading(false);
    }
  }

  async disconnect() {
    try {
      this.setLoading(true);
      this.walletManager.disconnectWallet();
      this.updateButtonState();
      this.dispatchEvent(new CustomEvent('wallet-disconnected', {
        bubbles: true,
        composed: true
      }));
    } catch (error) {
      console.error('Error disconnecting wallet:', error);

      this.dispatchEvent(new CustomEvent('wallet-error', {
        bubbles: true,
        composed: true,
        detail: { error }
      }));
    } finally {
      this.setLoading(false);
    }
  }

  setLoading(isLoading) {
    this.isLoading = isLoading;
    this.render();
  }

  updateButtonState() {
    this.render();
  }

  getWalletManager() {
    return this.walletManager;
  }
}

if (typeof window !== 'undefined' && !customElements.get('btc-wallet-connect')) {
  customElements.define('btc-wallet-connect', BitcoinConnectButton);
}
export default BitcoinConnectButton;