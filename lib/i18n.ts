import { cookies } from "next/headers";
import { dictionaries, type Dict, type Lang } from "./translations";

export type { Dict, Lang } from "./translations";

export async function getLang(): Promise<Lang> {
  const store = await cookies();
  return store.get("lang")?.value === "zh" ? "zh" : "en";
}

export function dict(lang: Lang): Dict {
  return dictionaries[lang];
}
