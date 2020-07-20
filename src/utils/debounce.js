let timeout;

/**
 * This function delays the execution of the passed function by specified time.
 *
 * @param {Context} that
 * @param {Function} func
 * @param {Date} wait
 * @param {Array} args
 * @param {Boolean} immediate
 */
export const debounce = (that, func, wait, args = [], immediate = false) => {
  return (() => {
    const context = that;

    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  })();
};

export function debounceReturns(callback, delay) {
  if (callback.inDebounce) {
    clearTimeout(callback.inDebounce);
  }

  callback.inDebounce = setTimeout(callback, delay);
}

/**
 * The debounce function.
 *
 * @param {Function} callback - The function that needs to be debounced.
 * @param {Number} wait - The time in milliseconds to debounce.
 * @param {Boolean} isImmediate - Determines if the function should be run immediately.
 *
 * @returns {Function}
 */
export function debounceAgain(callback, wait = 1000, isImmediate = false) {
  let timeoutRef;

  return function(...args) {
    const context = this;

    const later = function() {
      timeoutRef = null;

      if (!isImmediate) {
        callback.apply(context, args);
      }
    };

    const shouldCallNow = isImmediate && !timeoutRef;

    clearTimeout(timeoutRef);

    timeoutRef = setTimeout(later, wait);

    if (shouldCallNow) {
      callback.apply(context, args);
    }
  };
}
