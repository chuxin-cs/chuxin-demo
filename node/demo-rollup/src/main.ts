import "core-js/features/promise";
import { print } from "./core/utils";
export const Vue = () => {
  print().then((res) => {
    console.log(res, "res");
  });
  console.log("Vue...");
};
export default {
  Vue,
};
