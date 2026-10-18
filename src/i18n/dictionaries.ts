import type { Locale } from "./config";

const dictionaries = {
  en: () => import("./messages/en.json").then((module) => module.default),
  pt: () => import("./messages/pt.json").then((module) => module.default),
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
