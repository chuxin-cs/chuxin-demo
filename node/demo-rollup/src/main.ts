import "core-js/features/promise";
import { print } from "./core/utils";
import { name } from "../package.json";
export const Vue = () => {
  print().then((res) => {
    console.log(res, "res");
  });
  console.log(name, "name");
  console.log("Vue...");
};
export default {
  Vue,
};
