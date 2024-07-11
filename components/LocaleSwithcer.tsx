"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { i18n } from "@/i18n.config";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  useEffect(() => {
    const locale = pathName ? pathName.split("/")[1] : "";
    if (locale === "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }, [pathName]);

  return (
    <ul className="flex gap-x-3">
      {i18n.locales.map((locale) => (
        <li key={locale}>
          <Link
            href={redirectedPathName(locale)}
            className="rounded-md border bg-black px-3 py-2 text-white"
          >
            {locale}
          </Link>
        </li>
      ))}
    </ul>
  );
}
