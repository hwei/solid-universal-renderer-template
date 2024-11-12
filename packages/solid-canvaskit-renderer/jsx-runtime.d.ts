import { type VElement } from "./src/node";

export namespace JSX {
  type Element = VElement;
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
