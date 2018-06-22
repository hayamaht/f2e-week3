import { Indentifiable } from "./indentifiable";

export class Transaction implements Indentifiable {
  id: number;
  site: string;
  current: number;
  last: number;
}
