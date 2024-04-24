'use strict';

function throttle(fn, delay) {
  // Capture the current time
  let time = Date.now();
  let timeoutId = null;
  return () => {
    if (time + delay - Date.now() <= 0) {
      clearTimeout(timeoutId);
      timeoutId = null;
      // Run the function we've passed to our throttler,
      fn();
      // Reset the `time` variable (so we can check again).
      time = Date.now();
    }
    // Start a timer 100ms longer than the delay to run at the end of the event.
    if (timeoutId === null) {
      timeoutId = setTimeout(() => {
        fn();
      }, delay + 100);
    }
  };
}

exports.throttle = throttle;

//# sourceMappingURL=throttle-20539969.js.map