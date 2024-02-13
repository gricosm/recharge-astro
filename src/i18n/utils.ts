import { ui, defaultLang } from "@i18n/ui";

export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[keyof typeof ui]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function useTranslatedPath(currentLang: keyof typeof ui) {
  return function translatePath(path: string, newLang: string = currentLang) {
    if (newLang === defaultLang) {
      return path.replace(/^\/(en|eu|es)\//, "/");
    } else {
      const pathWithoutLang = path.replace(/^\/(en|eu|es)\//, "/");
      return `/${newLang}${pathWithoutLang}`;
    }
  };
}
