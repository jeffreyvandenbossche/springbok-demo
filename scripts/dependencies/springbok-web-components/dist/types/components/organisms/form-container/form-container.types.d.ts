import { Components } from '../../../components';
export type Rename<T, K extends keyof T, N extends string> = Pick<T, Exclude<keyof T, K>> & {
  [P in N]: T[K];
};
export type Thankyou = Components.BsImage & Rename<Components.BsTitle, 'text', 'title'> & Components.BsText;
