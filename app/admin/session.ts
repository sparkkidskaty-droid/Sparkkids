import { createHash } from "crypto";

export const ADMIN_COOKIE = "sk_admin";

export function sessionToken(): string {
  return createHash("sha256")
    .update(`sparkkids-admin:${process.env.ADMIN_PASSWORD ?? ""}`)
    .digest("hex");
}
