"use client";

import { UserProvider } from "@/contexts/userContext";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
    >
      <UserProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
