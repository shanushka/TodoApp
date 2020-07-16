import { LitElement, css, html } from "lit-element";

class GlobalCSS extends LitElement {
  static get styles() {
    return css`
      * {
        --color-black: #000000;
        --color-white: #ffffff;
        --color-yellow: #fff8ad;
        --color-green: #d3ea98;
        --color-darkGreen: #4caf50;
        --color-grey: #80868b;
        --color-lightGrey: #bdbdbd;
        --color-vaadinBorder: rgba(192, 192, 192, 0.4);
        --color-faintGrey: #fafafa;
        --color-darkGrey: #263238;
        --color-textGrey: #223741;
        --color-borderGrey: #e7e7e7;
        --color-softGrey: #eff2f7;
        --color-blue: #304ffe;
        --color-lightBlue: #1fb6ff;
        --color-pink: #ffc8bf;
        --color-red: #c22727;
        --color-darkRed: #d50000;
        --color-lightRed: #ff7849;
        --color-green: #66bb6a;
        --color-successGreen: #4bb543;
        --color-yellow: #ffca28;
        --color-backgroudGrey: #fafafa;
        --color-textHeaderGrey: #9faab7;
        --color-activeBlue: #3578f6;
        --color-headerBlue: #1a237e;
        --color-loaderGrey: #d2dcea;

        --success-green-dark: #228b22;
        --success-green-background: rgba(102, 187, 106, 0.3);

        --cycle-plate-red: rgba(213, 0, 0, 0.05);
        --cycle-plate-green: rgba(102, 187, 106, 0.05);
        --cycle-plate-yellow: rgb(255, 202, 40, 0.02);

        --loader-gradient: linear-gradient(
          -45deg,
          #e5e9ef,
          #f0f0f0,
          #e5e9ef,
          #f0f0f0
        );
        --loader-gradient-alt: linear-gradient(
          -45deg,
          #e5e9ef,
          #e0e3e8,
          #e5e9ef,
          #e0e3e8
        );

        --spacing-1x: 4px;
        --spacing-2x: 8px;
        --spacing-3x: 12px;
        --spacing-4x: 16px;
        --spacing-5x: 20px;
        --spacing-6x: 24px;
        --spacing-7x: 28px;
        --spacing-8x: 32px;
        --spacing-9x: 36px;
        --spacing-10x: 40px;
        --spacing-11x: 44px;
        --spacing-12x: 48px;
        --spacing-13x: 52px;
        --spacing-14x: 56px;
        --spacing-15x: 60px;

        --font-xxs: 0.5rem;
        --font-xs: 0.625rem;
        --font-s: 0.75rem;
        --font-md: 0.875rem;
        --font-main: 1rem;
        --font-lg: 1.125rem;
        --font-xlg: 1.25rem;
        --font-xxlg: 1.5rem;

        --fontWeight-thin: 300;
        --fontWeight-normal: 400;
        --fontWeight-semibold: 500;
        --fontWeight-black: 700;
        --fontWeight-extrablack: 900;

        --boxShadow-light: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
        --boxShadow-delScreening-cards: 0px 1px 5px rgba(0, 0, 0, 0.2),
          0px 3px 1px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14);
        --boxShadow-button-hover: 0px 1px 5px rgba(0, 0, 0, 0.12),
          0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.2);
        --boxShadow-1dp: 0px 1px 3px rgba(0, 0, 0, 0.12),
          0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
        --boxShadow-2dp: 0px 1px 5px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.2),
         0px 2px 2px rgba(0, 0, 0, 0.14);
        --boxShadow-6dp: 0px 3px 5px rgba(0, 0, 0, 0.2),
          0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14);
        --box-shadow-card: 0px 1px 3px rgba(60, 64, 67, 0.16),
          0px 1px 1px rgba(60, 64, 67, 0.08);

        --theme-font-family: Roboto;

        --gutter-main: 16px;

        --style-none: none;

        --color-grey-100: #f5f5f5;
        --color-grey-200: #eeeeee;
        --color-grey-300: #e0e0e0;
        --color-grey-400: #bdbdbd;
        --color-grey-500: #9e9e9e;
        --color-grey-600: #757575;
        --color-grey-700: #616161;
        --color-grey-900: #212121;
        --color-grey-e5: #e5e5e5;

        --color-grey-x: #80868b;

        --color-blue-500: #2196f3;

        --color-secondary-300: #7a89ff;
        --color-secondary-500: #304ffe;
        --color-secondary-700: #1e3ae5;

        --color-documents-panel-list-hover: #f6f9fc;
        --color-documents-panel-hover-border: #e2e5e8;
        --color-documents-panel-list-icon-hover: #f8fbfe;

        --color-campaign-stage-progress: #eaa800;
        --color-campaign-stage-completed: #4caf50;

        --color-primary-200: #f48fb1;
        --color-primary-300: #f06292;
        --color-primary-400: #ec407a;
        --color-primary-500: #e91e62;

        --color-orange: #ff4949;

        --color-error-background: #fdcdc9;
        --color-error-text: #700000;
        --color-error-icon: #DE350B;

        --paper-swatch-picker-color-size: 50px;
    `;
  }

  render() {
    return html` <slot></slot> `;
  }
}

customElements.define("global-css", GlobalCSS);
