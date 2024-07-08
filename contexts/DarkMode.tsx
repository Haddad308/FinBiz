"use client";
import useDarkMode from "@/hooks/useDarkMode";
import React, { createContext, useContext, ReactNode } from "react";

interface DarkModeContextProps {
  dark: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [dark, toggleDarkMode] = useDarkMode();

  return <DarkModeContext.Provider value={{ dark, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};

export const useDarkModeContext = (): DarkModeContextProps => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkModeContext must be used within a DarkModeProvider");
  }
  return context;
};
