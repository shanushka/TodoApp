import { LitElement, html, css } from 'lit-element';

import './components/dragAndDrop';

const TODO_LIST = ['Queued', 'In-Progress', 'QA', 'UAT', 'Done'];

/**
 * `my-app` Description
 *
 * @polymer
 * @demo
 *
 */
class MyApp extends LitElement {
  static get properties() {
    return {};
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
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
      <div>Todo app</div>
      <drag-drop .lists=${TODO_LIST}></drag-drop>
    `;
  }
}

customElements.define('my-app', MyApp);
