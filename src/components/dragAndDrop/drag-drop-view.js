import { LitElement, html, css } from 'lit-element';

/**
 * `DragDrop` Description
 *
 * @polymer
 * @demo
 *
 */
class DragDrop extends LitElement {
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
    return [
      css`
        .main-wrapper {
          display: flex;
        }

        .drag-drop--container {
          width: 200px;
          margin-left: var(--spacing-5x);
        }

        .drag-drop-body--container {
          background: linear-gradient(
            180deg,
            #eaedf2 0%,
            rgba(244, 247, 252, 0.5) 100%
          );

          height: calc(100vh - 50px);
        }
      `
    ];
  }

  /**
   * Implement to describe the element's DOM using lit-html.
   * Use the element current props to return a lit-html template result
   * to render into the element.
   */
  render() {
    return html`
      <div class="main-wrapper">
        ${this.lists.map(
          list => html`
            <div class="drag-drop--container">
              <div class="drag-drop-header--container">${list}</div>
              <div class="drag-drop-body--container"></div>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define('drag-drop-view', DragDrop);
