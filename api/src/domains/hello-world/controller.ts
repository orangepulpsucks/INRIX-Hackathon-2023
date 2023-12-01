import generateHash from "../../util/generateHash";
import { HelloWorldType } from "./types";

export function getMessage(): HelloWorldType {
  const helloFrom: HelloWorldType = {
    message: `Hello World!`,
    id: generateHash(),
  };

  return helloFrom;
}
