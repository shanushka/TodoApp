import { LitElement, html, css } from "lit-element";

import "./card-component-view";

/**
 * `LowerCaseDashedName` Description
 *
 * @polymer
 * @demo
 *
 */
class CardComponent extends LitElement {
  static get properties() {
    return {
      /**
       * Funtion to run when more icon is clicked.
       */
      moreIconClicked: { type: Function },

      /**
       * Boolean whether to show big card or not.
       */
      isBig: { type: Boolean }
    };
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();

    this.isBig = true;
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
    return html`
      <card-component-view
        .moreIconClicked=${this.moreIconClicked}
        .isBig=${this.isBig}
      ></card-component-view>
    `;
  }
}

customElements.define("card-component", CardComponent);
