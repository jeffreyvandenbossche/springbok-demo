export declare enum Breakpoint {
  xs = 375,
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  '2xl' = 1536,
  '3xl' = 1920
}
export declare function compareBreakpoint(type: 'min' | 'max', breakpoint: Breakpoint): boolean;
