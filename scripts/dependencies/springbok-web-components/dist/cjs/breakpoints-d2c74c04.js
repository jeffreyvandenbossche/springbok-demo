'use strict';

exports.Breakpoint = void 0;
(function (Breakpoint) {
  Breakpoint[Breakpoint["xs"] = 375] = "xs";
  Breakpoint[Breakpoint["sm"] = 640] = "sm";
  Breakpoint[Breakpoint["md"] = 768] = "md";
  Breakpoint[Breakpoint["lg"] = 1024] = "lg";
  Breakpoint[Breakpoint["xl"] = 1280] = "xl";
  Breakpoint[Breakpoint["2xl"] = 1536] = "2xl";
  Breakpoint[Breakpoint["3xl"] = 1920] = "3xl";
})(exports.Breakpoint || (exports.Breakpoint = {}));
function compareBreakpoint(type, breakpoint) {
  const { innerWidth } = window;
  switch (type) {
    case 'min': {
      return innerWidth >= breakpoint;
    }
    case 'max': {
      return innerWidth < breakpoint;
    }
    default:
      return false;
  }
}

exports.compareBreakpoint = compareBreakpoint;

//# sourceMappingURL=breakpoints-d2c74c04.js.map