"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { GrLanguage } from "react-icons/gr";
import { Locale } from "@/i18n.config";
import { useLocale } from "@/contexts/LocaleContext";

export default function LocaleSwitcher({ lang }: { lang: Locale }) {
  const pathName = usePathname();
  const { locale, updateLocale } = useLocale(); // Use the context
  const iconClasses = "text-xl font-bold text-slate-600 pointer-events-none flex-shrink-0";

  const redirectedPathName = (newLocale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  };

  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set<string>([lang.toString() as string]));
  const selectedValue = useMemo(() => Array.from(selectedKeys).join(", ").replaceAll("_", " "), [selectedKeys]);

  useEffect(() => {
    setSelectedKeys(new Set<string>([locale])); // Update selected keys based on context
    document.body.dir = locale === "ar" ? "rtl" : "ltr"; // Update body direction
  }, [locale]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="mx-3 flex w-[90%] cursor-pointer items-center justify-start gap-2 rounded-lg p-2 capitalize text-slate-600 transition-all duration-300 hover:bg-[#9ac347] hover:text-black focus:text-black group-hover:bg-primary dark:text-white">
          <GrLanguage className={`h-5 w-5 flex-shrink-0 transition duration-75`} />
          <p className="text-md group font-semibold">{selectedValue}</p>
        </div>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={(keys) => {
          const newLocale = Array.from(keys)[0];
          setSelectedKeys(new Set<string>([newLocale.toString()]));
          updateLocale(newLocale.toString());
          window.location.href = redirectedPathName(newLocale.toString());
        }}
      >
        <DropdownItem
          startContent={<GrLanguage className={iconClasses} />}
          key="en"
        >
          English
        </DropdownItem>
        <DropdownItem
          startContent={<GrLanguage className={iconClasses} />}
          key="ar"
        >
          العربية
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
