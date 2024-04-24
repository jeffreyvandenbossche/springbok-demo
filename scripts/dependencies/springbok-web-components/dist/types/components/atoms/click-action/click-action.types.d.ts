export declare enum ClickActionTarget {
  Internal = "internal",
  Blank = "_blank",
  Self = "_self",
  Parent = "_parent",
  Top = "_top"
}
export declare enum ClickActionType {
  Button = "button",
  Reset = "reset",
  Submit = "submit"
}
export interface ClickActionEvent {
  name?: string;
  value?: any;
  type?: ClickActionType;
  href?: string;
  target?: ClickActionTarget;
}
