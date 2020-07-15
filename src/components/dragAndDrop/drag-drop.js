import { LitElement, html, css } from 'lit-element';

import './drag-drop-view';

/**
 * `LowerCaseDashedName` Description
 *
 * @polymer
 * @demo
 *
 */
class PascalCaseName extends LitElement {
  static get properties() {
    return {
      lists: { type: Array }
    };
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();

    this.lists = [];
  }

  static get styles() {
    return [css``];
  }

  /**
   * Implement to describe the element's DOM using lit-html.
   * Use the element current props to return a lit-html template result
   * to render into the element.
   */
  render() {
    console.log('Dd', this.lists);

    return html` <drag-drop-view .lists="${this.lists}"></drag-drop-view> `;
  }
}

customElements.define('drag-drop', PascalCaseName);
