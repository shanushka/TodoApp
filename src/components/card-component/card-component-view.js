import { LitElement, html, css, notEqual } from "lit-element";
import { nothing } from "lit-html";

import "@polymer/paper-card/paper-card";
import "@polymer/iron-icons/iron-icons";
import "@polymer/paper-ripple/paper-ripple";
import "@polymer/paper-tooltip/paper-tooltip";
import "@polymer/paper-progress/paper-progress";
import "@material/mwc-icon-button/mwc-icon-button";
import "@polymer/paper-icon-button/paper-icon-button";

import "../donut-chart/donut-chart";

import { AVATAR, HOUR, COMMENT, MORE } from "../../constants/imagepath";

/**
 * Class for the element.
 */
export class CardComponentView extends LitElement {
  static get styles() {
    return css`
      :host {
        border: 1px solid rgba(115, 143, 179, 0.2);
        box-shadow: 0px 2px 1px rgba(115, 143, 179, 0.2),
          0px 1px 1px rgba(115, 143, 179, 0.14),
          0px 1px 3px rgba(115, 143, 179, 0.12);
        border-radius: 8px;
        width: 100%;
      }
      .header {
        display: flex;
        align-items: space-between;
        font-weight: var(--fontWeight-semibold);
        font-size: var(--font-main);
        line-height: 19px;
        padding-bottom: var(--spacing-4x);
      }

      .title {
        flex: 1;
      }

      .more-icon {
        --mdc-icon-size: 16px;
        --mdc-icon-button-size: 16px;
      }

      .footer {
        display: flex;
        align-items: space-between;
      }

      .icons {
        flex: 1;
      }

      .alert-icon {
        margin-right: var(--spacing-5x);
      }

      .form {
        flex: 1;
        font-weight: var(--fontWeight-semibold);
        font-size: var(--font-md);
        line-height: 18px;
        color: var(--color-grey-600);
      }

      .field {
        margin-bottom: var(--spacing-3x);
      }

      .field-value {
        color: var(--color-grey-900);
        font-weight: var(--fontWeight-semibold);
        font-size: var(--font-md);
        line-height: 16px;
      }

      paper-card {
        padding: var(--spacing-3x);
        min-width: 240px;
        width: 100%;
        max-width: 530px;
      }

      mwc-icon-button {
        --mdc-icon-size: 24px;
        --mdc-icon-button-size: 24px;
      }

      .percentage {
        font-weight: var(--fontWeight-semibold);
        font-size: var(--font-s);
        line-height: 12px;
        position: relative;
        display: block;
      }

      .percentage-indicator {
        display: inline-block;
      }

      paper-progress {
        --paper-progress-height: 8px;
        border-radius: 50px;
        margin-bottom: var(--spacing-3x);
        width: 100%;
        cursor: pointer;
      }

      paper-tooltip {
        border-radius: 4px;
        font-weight: var(--fontWeight-normal);
        font-size: var(--font-xs);
        line-height: 16px;
        padding: var(--spacing-2x);
      }

      .tooltip-value {
        color: var(--color-white);
        font-weight: var(--fontWeight-black);
      }

      .priority-background {
        padding: var(--spacing-1x);
        border-radius: 2px;
      }

      .yellow {
        background: var(--color-yellow);
      }

      .green {
        background: var(--color-green);
      }

      .dark-green {
        color: var(--color-darkGreen);
      }

      .orange {
        color: var(--color-lightRed);
      }

      .red {
        color: var(--color-red);
      }

      .pink {
        background: var(--color-pink);
      }

      .priority {
        font-size: var(--font-s);
        color: var(--color-grey-900);
      }

      .status-background {
        border-radius: 2px;
        padding: var(--spacing-1x);
      }

      .picture {
        cursor: pointer;
      }

      .status {
        font-size: var(--font-s);
        color: var(--color-white);
      }

      .dark-brown {
        background: var(--color-red);
      }

      .border {
        width: 100%;
        background: rgba(115, 143, 179, 0.3);
        height: 1px;
        margin-bottom: var(--spacing-3x);
      }

      .name {
        font-weight: var(--fontWeight-semibold);
        font-size: var(--font-md);
        line-height: 24px;
        color: var(--color-grey-700);
        margin-left: var(--spacing-2x);
      }

      .wrapper {
        display: flex;
        align-items: space-between;
      }

      .donut-wrapper {
        width: 180px;
        height: auto;
        position: relative;
        right: 0;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The header of the component.
       */
      title: { type: String },

      /**
       * Funtion to run when more icon is clicked.
       */
      onMoreIconClick: { type: Function },

      /**
       * Function to run when clicked on profile.
       */
      onProfileClick: { type: Function },

      /**
       * Boolean whether to show or hide status.
       */
      showStatus: { type: Boolean },

      /**
       * Boolean whether to show big card or not.
       */
      isBig: { type: Boolean },

      /**
       * Boolean whether to show small card or not.
       */
      isSmall: { type: Boolean },

      /**
       * Boolean whether to show medium card or not.
       */
      isMedium: { type: Boolean },

      /**
       * Object to hold the data for the card.
       */
      cardData: { type: Object }
    };
  }

  constructor() {
    super();

    this.isBig = false;
    this.isMedium = false;
    this.isSmall = false;
    this.showStatus = true;

    this.title = "Card Header";

    this.cardData = {
      picture: AVATAR,
      progressValue: 80,
      progressColor: "green",
      dueDate: "2020-20-20",
      startedDate: "2020-20-20",
      priority: "Medium",
      status: "Blocked",
      statusColor: "dark-brown",
      priorityColor: "yellow",
      indicatorColor: "dark-green",
      username: "Harry Potter",
      estimatedDuration: 1000000,
      actualDuration: 2000000,
      chartColors: ["red", "#EEEEEE"],
      chartValue: [
        ["this", "that"],
        ["Done", 100000],
        ["Remaining", 2000000],
      ],
    };
  }

  render() {
    return html`
      <paper-card>
        <div class="header">
          <div class="title">
            ${this.title}
          </div>
          <div>
            <mwc-icon-button class="more-icon" @click="${this.onMoreIconClick}"
              ><img src=${MORE} alt="more"
            /></mwc-icon-button>
          </div>
        </div>
        ${this.isBig ? this.renderBigCard() : nothing}
        ${this.isMedium ? this.renderMediumCard() : nothing}
        ${this.isSmall ? this.renderSmallCard() : nothing}
      </paper-card>
    `;
  }

  renderSmallCard() {
    return html`
      <div class="form">
        <div class="field">Priotity: ${this.renderPriority()}</div>
        <div class="field">
          Started Date:
          <span class="field-value">${this.cardData.startedDate}</span>
        </div>
        <div class="field">
          Due Date: <span class="field-value">${this.cardData.dueDate}</span>
        </div>
      </div>
      <div class="percent-indicator small">
        <span class="percentage ${this.cardData.indicatorColor}"
          >${this.cardData.progressValue}%</span
        >
      </div>
      <paper-progress
        id="progress"
        value="${this.cardData.progressValue}"
        class="${this.cardData.progressColor} small"
        @mouseover=${(e) => this.positionTooltip(e)}
      >
      </paper-progress>
      <paper-tooltip id="tooltip" for="progress"
        ><div>
          Estimated Duration:
          <span class="tooltip-value">${this.cardData.estimatedDuration}</span>
        </div>
        <div>
          Total Actual Duration:
          <span class="tooltip-value">${this.cardData.actualDuration}</span>
        </div>
      </paper-tooltip>
      <div class="footer">
        <div class="icons">
          <mwc-icon-button class="alert-icon">
            <img src=${HOUR} alt="hour" />
          </mwc-icon-button>
          <mwc-icon-button>
            <img src=${COMMENT} alt="comment" />
          </mwc-icon-button>
        </div>
        <div class="picture">
          <mwc-icon-button>
            <img src="${this.cardData.picture}" />
          </mwc-icon-button>
        </div>
      </div>
    `;
  }

  renderBigCard() {
    return html`
      <div class="wrapper">
        <div class="form">
          ${this.showStatus
            ? html`<div class="field">Status: ${this.renderStatus()}</div>`
            : nothing}
          <div class="field">Priotity: ${this.renderPriority()}</div>
          <div class="field">
            Started Date:
            <span class="field-value">${this.cardData.startedDate}</span>
          </div>
          <div class="field">
            Due Date: <span class="field-value">${this.cardData.dueDate}</span>
          </div>
          <div class="field">
            Estmiated Duration:
            <span class="field-value">${this.cardData.estimatedDuration}</span>
          </div>
          <div class="field">
            Total Actual Duration:
            <span class="field-value">${this.cardData.actualDuration}</span>
          </div>
        </div>
        <div class="donut-wrapper">
          <donut-chart
            .data=${this.cardData.chartValue}
            label="${this.cardData.progressValue}%"
            .colors=${this.cardData.chartColors}
          ></donut-chart>
        </div>
      </div>
      <div class="border"></div>
      <div class="footer">
        <div class="icons">
          <mwc-icon-button class="alert-icon">
            <img src=${HOUR} alt="hour" />
          </mwc-icon-button>
          <mwc-icon-button>
            <img src=${COMMENT} alt="comment" />
          </mwc-icon-button>
        </div>
        <div class="picture">
          <a @click=${this.onProfileClick}>
            <mwc-icon-button>
              <img src="${this.cardData.picture}" />
            </mwc-icon-button>
            <span class="name">${this.cardData.username}</span>
          </a>
        </div>
      </div>
    `;
  }

  renderPriority() {
    return html`
      <span class="priority-background ${this.cardData.priorityColor}">
        <span class="priority">${this.cardData.priority}</span>
      </span>
    `;
  }

  renderStatus() {
    return html`
      <span class="status-background ${this.cardData.statusColor}">
        <span class="status">${this.cardData.status}</span>
      </span>
    `;
  }

  positionTooltip(e) {
    const tooltip = this.shadowRoot.querySelector("paper-tooltip");
    //todo change the position of tooltip.
  }
}

window.customElements.define("card-component-view", CardComponentView);
