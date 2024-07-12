// context/LocaleContext.tsx

import { getLocalePreference, saveLocalePreference } from "@/lib/localStorage";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type LocaleContextType = {
  locale: string;
  updateLocale: (newLocale: string) => void;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

type LocaleProviderProps = {
  children: ReactNode;
};

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const [locale, setLocale] = useState<string>("en"); // Default to 'en' if localStorage is not available

  useEffect(() => {
    setLocale(getLocalePreference());
  }, []);

  const updateLocale = (newLocale: string) => {
    setLocale(newLocale);
    saveLocalePreference(newLocale);
  };

  return <LocaleContext.Provider value={{ locale, updateLocale }}>{children}</LocaleContext.Provider>;
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
