/**
 * Set the given element position.
 *
 * In if statement the element is positioned above the top position.
 *
 * @param {*} element
 * @param {Object} position
 */
export function setElementPosition(element, position = {}) {
  if (element instanceof HTMLElement) {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const { top, left, height = 0, length = 0, width = 0 } = position;

    element.style.top = `${top}px`;
    element.style.left = `${left - length}px`;

    if (windowHeight < top + height) {
      element.style.top = `${top - height}px`;
    }

    if (windowWidth < left + width) {
      element.style.left = `${left - width}px`;
    }
  }
}

export default { setElementPosition };
