export declare enum ButtonTarget {
  Blank = "_blank",
  Self = "_self",
  Parent = "_parent",
  Top = "_top",
  Internal = "internal"
}
export declare enum ButtonType {
  Button = "button",
  Submit = "submit",
  Reset = "reset"
}
export declare enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Text = "text"
}
export declare enum ButtonIconPosition {
  Left = "left",
  Right = "right"
}
export type ButtonClickEvent = {
  type?: string;
  href?: string;
  target?: string;
  action?: string;
  value?: any;
};
