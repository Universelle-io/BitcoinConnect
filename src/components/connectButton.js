// Importamos el WalletManager existente
import { useWallet } from '../context/WalletManager.js';
import { walletProviders } from '../wallets/index.js';
import { styles } from './styles.js';

// Definición del Web Component
class BitcoinConnectButton extends HTMLElement {
  constructor() {
    super();

    // Crear Shadow DOM para encapsulación
    this.attachShadow({ mode: 'open' });

    // Estado interno
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
    
    // Aplicar colores personalizados si se proporcionan
    this.applyCustomColors();
  }

  // Propiedades observadas que permite actualizar el componente cuando cambian
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

  // Opciones del componente con defaults
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

  // Ciclo de vida: cuando el componente se agrega al DOM
  connectedCallback() {
    console.log('BitcoinConnectButton connected to DOM');

    // Aseguramos que el render se ejecute después de que el DOM esté completamente cargado
    setTimeout(() => {
      this.render();
      this.updateButtonState();
    }, 0);
  }

  // Ciclo de vida: cuando cambia un atributo observado
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      // Si cambia un color, aplicamos los colores personalizados
      if (name.includes('color') || name.includes('hover') || name.includes('bg')) {
        this.applyCustomColors();
      }
      this.render();
      this.updateButtonState();
    }
  }
  
  // Aplicar colores personalizados desde atributos
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
    
    // Aplicar estilos personalizados al elemento host
    this.style.cssText = Object.entries(customColors)
      .filter(([_, value]) => value !== null && value !== undefined)
      .map(([prop, value]) => `${prop}: ${value};`)
      .join(' ');
  }

  // Renderiza el componente en el Shadow DOM
  render() {
    // Generar opciones de wallet
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
      return `<span class="bitcoin-connect-icon">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M23.638 14.904c-1.602 6.425-8.113 10.323-14.542 8.725C2.67 22.027-1.244 15.525.362 9.105 1.962 2.675 8.475-1.22 14.9.377c6.444 1.596 10.36 8.095 8.738 14.527zm-5.6-3.095l-1.286-.322c.057-.18.11-.366.154-.555.248-1.046.165-1.865-.246-2.437-.407-.563-1.17-.853-2.28-.865v-2.07l-1.414.344v1.738c-.36.002-.725.018-1.094.044v-1.785l-1.414.343v2.07c-.306.027-.614.057-.92.088l.002-.005-1.952.475.39 1.484c.702-.173.83-.204.83-.204.39-.095.62.147.636.273v2.202c.05-.012.12-.02.204-.02l-.205.047v3.08c-.034.182-.2.398-.532.306 0 0-.127-.037-.83-.21l-.83 1.624 1.842.456c.343.087.677.165 1.003.243v2.092l1.415-.343v-1.93c.372.026.744.044 1.094.044v1.896l1.414-.342v-2.124c2.28-.433 3.843-1.426 4.147-3.477.244-1.65-.08-2.587-1.02-3.204.796-.182 1.405-.687 1.568-1.74zm-2.776 3.775c-.38 1.617-2.966 1.122-3.808 1.003l.68-2.763c.84.12 3.547.357 3.128 1.76zm.38-4.18c-.34 1.483-2.493 1.03-3.19.93l.616-2.498c.696.1 2.948.285 2.574 1.568z"/>
        </svg>
      </span>
      ${this.options.buttonText}`;
    };

    const html = `
      <style>${styles}</style>
      
      <div class="${this.options.theme === 'dark' ? 'theme-dark' : ''} wallet-container">
        ${this.walletManager.connected ? `
          <div class="wallet-info">
            <span class="wallet-icon">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M23.638 14.904c-1.602 6.425-8.113 10.323-14.542 8.725C2.67 22.027-1.244 15.525.362 9.105 1.962 2.675 8.475-1.22 14.9.377c6.444 1.596 10.36 8.095 8.738 14.527zm-5.6-3.095l-1.286-.322c.057-.18.11-.366.154-.555.248-1.046.165-1.865-.246-2.437-.407-.563-1.17-.853-2.28-.865v-2.07l-1.414.344v1.738c-.36.002-.725.018-1.094.044v-1.785l-1.414.343v2.07c-.306.027-.614.057-.92.088l.002-.005-1.952.475.39 1.484c.702-.173.83-.204.83-.204.39-.095.62.147.636.273v2.202c.05-.012.12-.02.204-.02l-.205.047v3.08c-.034.182-.2.398-.532.306 0 0-.127-.037-.83-.21l-.83 1.624 1.842.456c.343.087.677.165 1.003.243v2.092l1.415-.343v-1.93c.372.026.744.044 1.094.044v1.896l1.414-.342v-2.124c2.28-.433 3.843-1.426 4.147-3.477.244-1.65-.08-2.587-1.02-3.204.796-.182 1.405-.687 1.568-1.74zm-2.776 3.775c-.38 1.617-2.966 1.122-3.808 1.003l.68-2.763c.84.12 3.547.357 3.128 1.76zm.38-4.18c-.34 1.483-2.493 1.03-3.19.93l.616-2.498c.696.1 2.948.285 2.574 1.568z"/>
              </svg>
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

customElements.define('bitcoin-connect', BitcoinConnectButton);
export default BitcoinConnectButton;