export type Locale = "en" | "es" | "eu" | string;

interface Fallback {
  [key: string]: string;
}
type PathNames = {
  [key: string]: {
    [locale in Locale]: string;
  };
};

export const defaultLocale: string = "es";
export const locales = ["en", "es", "eu"];
export const fallback: Fallback = {
  eu: "es",
  en: "es",
};

export const collectionDirectoryNames: PathNames = {
  blog: {
    en: "blog",
    es: "blog",
    eu: "blog",
  },
};
