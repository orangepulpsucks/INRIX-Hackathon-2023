import { randomUUID } from "crypto";

export default function generateHash(): string {
  return randomUUID().toString();
}
