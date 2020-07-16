import '@google-web-components/google-chart';
import { LitElement, css, html } from 'lit-element';

import { nothing } from 'lit-html';

import { debounceReturns } from '../../utils/debounce';
/**
 * The component to display the donut chart provided data.
 *
 * Usage: <donut-chart data="[]" label="" colors="[]"></donut-chart>
 */
class DonutChart extends LitElement {
  /**
   * Styles for the donut chart component.
   */
  static get styles() {
    return [
      css`
        :host {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
        google-chart {
          width: 100%;
          height: 100%;
          background-color: transparent;
        }
        .chart-container {
          position: relative;
          display: flex;
        }

        .center-label {
          position: absolute;
          topfont-family: Arial, Helvetica, sans-serif;
          font-size: var(--font-lg);
          font-weight: bold;
          top: 50%;
          left: 50%;
          color: #212121;;
          z-index: 6;
          transform: translate(-50%, -50%);
        }
      `
    ];
  }

  /**
   * Property of the component.
   */
  static get properties() {
    return {
      /**
       * Data array for the chart.
       * Passed from parent.
       * @type Array
       */
      data: {
        type: Array
      },

      /**
       * Array of colors.
       *
       * @type Array
       */
      colors: {
        type: Array
      },

      /**
       * Label to display in center of donut chart.
       */
      label: {
        type: String
      },

      /**
       * Options for the chart.
       * Used within the component.
       * @type Object
       */
      options: {
        type: Object
      },

      /**
       * Wait till the chart is rendered before showing the label.
       */
      isReady: {
        type: Boolean
      }
    };
  }

  /**
   * Initialize the properties.
   */
  constructor() {
    super();
    this.options = {};
    this.data = [];
    this.label = '';
    this.colors = [];
    this.isReady = false;

    this.resizeDebounced = this.resizeDebounced.bind(this);
    this.reRenderGoogleChart = this.reRenderGoogleChart.bind(this);
    this.handleGoogleChartReady = this.handleGoogleChartReady.bind(this);
  }

  /**
   * Invoked each time the custom element is first updated.
   */
  firstUpdated() {
    this.options = {
      pieHole: 0.65,
      backgroundColor: 'transparent',
      pieSliceBorderColor: 'transparent',
      enableInteractivity: false,
      pieSliceText: 'none',
      legend: { position: 'none' },
      colors: this.colors,
      chartArea: {
        width: '70%',
        height: '70%',
        left: '15%'
      },
      sliceVisibilityThreshold: 0
    };
    window.addEventListener('resize', this.resizeDebounced);
  }

  /**
   * Invoked each time the custom element is disconnected from the document's DOM.
   */
  disconnectedCallback() {
    window.removeEventListener('resize', this.resizeDebounced);

    super.disconnectedCallback();
  }

  /**
   * Resizes the charts with debounce.
   */
  resizeDebounced() {
    debounceReturns(this.reRenderGoogleChart, 200);
  }

  /**
   * Called when the google chart is ready.
   */
  handleGoogleChartReady() {
    this.isReady = true;
  }

  reRenderGoogleChart() {
    const googleChart = this.shadowRoot.querySelector('google-chart');

    if (googleChart) {
      googleChart.redraw();
    }
  }

  /**
   * Renders the chart to display the total count promoted to HR.
   *
   * @returns {TemplateResult | void}
   */
  render() {
    return html`
      <div class="chart-container">
        ${this.isReady
          ? html`
              <div class="center-label">${this.label}</div>
            `
          : nothing}
        <google-chart
          .data="${this.data}"
          type="pie"
          .options="${this.options}"
          @google-chart-ready="${this.handleGoogleChartReady}"
        ></google-chart>
      </div>
    `;
  }
}

customElements.define('donut-chart', DonutChart);
