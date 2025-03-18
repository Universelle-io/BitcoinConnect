export const styles = `
      :host {
        display: inline-flex !important;
        align-items: center !important;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        
        /* Color variables with defaults */
        --btn-primary-color: #f7931a;
        --btn-primary-hover: #e88a18;
        --btn-primary-shadow: rgba(247, 147, 26, 0.2);
        --btn-primary-shadow-hover: rgba(247, 147, 26, 0.3);
        
        --btn-connected-color: #2ecc71;
        --btn-connected-hover: #e74c3c;
        --btn-connected-shadow: rgba(46, 204, 113, 0.2);
        --btn-connected-shadow-hover: rgba(231, 76, 60, 0.3);
        
        --wallet-info-bg: rgba(247, 147, 26, 0.1);
        --wallet-info-color: #333;
        
        --modal-bg: white;
        --modal-text: #333;
        --modal-border: #f0f0f0;
        --modal-option-border: #eee;
        --modal-option-hover: #f9f9f9;
        --modal-option-hover-border: #ddd;
        --modal-close-color: #999;
        --modal-close-hover: #f5f5f5;
        --modal-close-hover-color: #333;
        
        /* Dark theme variables */
        --dark-btn-primary-color: #2c2c2c;
        --dark-btn-primary-hover: #3c3c3c;
        --dark-btn-connected-color: #207245;
        --dark-btn-connected-hover: #c0392b;
        --dark-wallet-info-bg: rgba(202, 114, 6, 0.85);
        --dark-wallet-info-color: #e0e0e0;
        --dark-modal-bg: #1e1e1e;
        --dark-modal-text: #e0e0e0;
        --dark-modal-border: #333;
        --dark-modal-option-border: #333;
        --dark-modal-option-hover: #2a2a2a;
        --dark-modal-option-hover-border: #444;
        --dark-modal-close-hover: #333;
        --dark-modal-close-hover-color: #e0e0e0;
      }
      
      *, *::before, *::after {
        box-sizing: border-box;
      }
      
      /* Container for the entire component when connected */
      .wallet-container {
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        gap: 8px !important;
      }
      
      .wallet-info {
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: center !important;
        font-size: 14px !important;
        color: var(--wallet-info-color) !important;
        background-color: var(--wallet-info-bg) !important;
        padding: 8px 16px !important;
        border-radius: 8px !important;
        transition: all 0.3s ease !important;
        margin-right: 0 !important;
        height: 40px !important;
      }
      
      .theme-dark .wallet-info {
        color: var(--dark-wallet-info-color) !important;
        background-color: var(--dark-wallet-info-bg) !important;
      }
      
      .wallet-icon {
        margin-right: 8px !important;
        display: inline-flex !important;
        align-items: center !important;
      }
      
      .wallet-address {
        font-weight: 500 !important;
      }
      
      .bitcoin-connect-button {
        display: flex !important;
        align-items: center !important;
        padding: 10px 16px !important;
        background-color: var(--btn-primary-color) !important;
        color: white !important;
        border: none !important;
        border-radius: 8px !important;
        cursor: pointer !important;
        font-weight: 600 !important;
        transition: all 0.3s ease !important;
        min-width: 150px !important;
        justify-content: center !important;
        font-size: 14px !important;
        box-shadow: 0 4px 12px var(--btn-primary-shadow) !important;
        position: relative !important;
        overflow: hidden !important;
      }
      
      .bitcoin-connect-button::before {
        content: '' !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%) !important;
        transform: translateX(-100%) !important;
        transition: transform 0.6s ease !important;
      }
      
      .bitcoin-connect-button:hover::before {
        transform: translateX(100%) !important;
      }
      
      .bitcoin-connect-button.connected {
        background-color: var(--btn-connected-color) !important;
        min-width: unset !important;
        width: 40px !important;
        height: 40px !important;
        padding: 0 !important;
        border-radius: 8px !important;
        box-shadow: 0 4px 12px var(--btn-connected-shadow) !important;
        order: 2 !important;
      }
      
      .bitcoin-connect-button:hover {
        background-color: var(--btn-primary-hover) !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 16px var(--btn-primary-shadow-hover) !important;
      }
      
      .bitcoin-connect-button.connected:hover {
        background-color: var(--btn-connected-hover) !important;
        box-shadow: 0 6px 16px var(--btn-connected-shadow-hover) !important;
      }
      
      .bitcoin-connect-icon {
        margin-right: 8px !important;
        display: inline-flex !important;
        align-items: center !important;
      }
      
      .bitcoin-connect-button.connected .bitcoin-connect-icon {
        margin-right: 0 !important;
      }
      
      .bitcoin-connect-button.loading {
        opacity: 0.7 !important;
        cursor: wait !important;
      }
      
      .spinner {
        display: inline-block !important;
        width: 20px !important;
        height: 20px !important;
        border: 2px solid rgba(255,255,255,0.3) !important;
        border-radius: 50% !important;
        border-top-color: white !important;
        animation: spin 1s ease-in-out infinite !important;
      }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      
      .bitcoin-connect-status {
        margin-top: 8px !important;
        font-size: 0.85rem !important;
        color: #555 !important;
        text-align: center !important;
      }
      
      dialog {
        padding: 0 !important;
        border: none !important;
        border-radius: 10px !important;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
        max-width: 400px !important;
        width: 90% !important;
        background-color: var(--modal-bg) !important;
        overflow: hidden !important;
      }
      
      dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.5) !important;
        backdrop-filter: blur(4px) !important;
      }
      
      .wallet-modal-content {
        padding: 24px !important;
      }
      
      .wallet-modal-header {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        margin-bottom: 20px !important;
        padding-bottom: 16px !important;
        border-bottom: 1px solid var(--modal-border) !important;
      }
      
      .wallet-modal-header h2 {
        margin: 0 !important;
        font-size: 1.25rem !important;
        color: var(--modal-text) !important;
        font-weight: 600 !important;
      }
      
      .wallet-modal-close {
        background: none !important;
        border: none !important;
        font-size: 1.5rem !important;
        cursor: pointer !important;
        color: var(--modal-close-color) !important;
        width: 32px !important;
        height: 32px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        border-radius: 6px !important;
        transition: all 0.2s ease !important;
      }
      
      .wallet-modal-close:hover {
        background-color: var(--modal-close-hover) !important;
        color: var(--modal-close-hover-color) !important;
      }
      
      .wallet-list {
        display: grid !important;
        grid-gap: 12px !important;
      }
      
      .wallet-option {
        display: flex !important;
        align-items: center !important;
        padding: 16px !important;
        border: 1px solid var(--modal-option-border) !important;
        border-radius: 8px !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
        position: relative !important;
        overflow: hidden !important;
      }
      
      .wallet-option::before {
        content: '' !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 4px !important;
        height: 100% !important;
        background-color: transparent !important;
        transition: all 0.2s ease !important;
      }
      
      .wallet-option:hover {
        background-color: var(--modal-option-hover) !important;
        border-color: var(--modal-option-hover-border) !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05) !important;
      }
      
      .wallet-option:hover::before {
        background-color: var(--btn-primary-color) !important;
      }
      
      .wallet-option img {
        width: 28px !important;
        height: 28px !important;
        margin-right: 16px !important;
        border-radius: 6px !important;
        object-fit: contain !important;
      }
      
      .wallet-option-label {
        color: var(--modal-text) !important;
        font-size: 15px !important;
        font-weight: 500 !important;
      }
      
      .theme-dark {
        color-scheme: dark !important;
      }
      
      .theme-dark .bitcoin-connect-button {
        background-color: var(--dark-btn-primary-color) !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
      }
      
      .theme-dark .bitcoin-connect-button:hover {
        background-color: var(--dark-btn-primary-hover) !important;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4) !important;
      }
      
      .theme-dark .bitcoin-connect-button.connected {
        background-color: var(--dark-btn-connected-color) !important;
      }
      
      .theme-dark .bitcoin-connect-button.connected:hover {
        background-color: var(--dark-btn-connected-hover) !important;
      }
      
      .theme-dark dialog {
        background-color: var(--dark-modal-bg) !important;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
      }
      
      .theme-dark .wallet-modal-header {
        border-bottom-color: var(--dark-modal-border) !important;
      }
      
      .theme-dark .wallet-modal-header h2 {
        color: var(--dark-modal-text) !important;
      }
      
      .theme-dark .wallet-modal-close:hover {
        background-color: var(--dark-modal-close-hover) !important;
        color: var(--dark-modal-close-hover-color) !important;
      }
      
      .theme-dark .wallet-option {
        border-color: var(--dark-modal-option-border) !important;
      }
      
      .theme-dark .wallet-option:hover {
        background-color: var(--dark-modal-option-hover) !important;
        border-color: var(--dark-modal-option-hover-border) !important;
      }
      
      .theme-dark .wallet-option-label {
        color: var(--dark-modal-text) !important;
      }
    `;