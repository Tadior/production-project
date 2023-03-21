// export interface CounterState {
//   value: number;
// }

import { CounterSchema } from "app/entities/Counter";

export interface StateSchema {
  counter: CounterSchema;
}
