"use client";

import { LocaleProvider } from "@/contexts/LocaleContext";
import { UserProvider } from "@/contexts/userContext";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
      >
        <UserProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </UserProvider>
      </ThemeProvider>
    </LocaleProvider>
  );
}
