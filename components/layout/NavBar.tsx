"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
  DropdownItem,
  DropdownMenu,
  Button,
  DropdownTrigger,
  Dropdown,
  Skeleton
} from "@nextui-org/react";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import DarkModeToggle from "../DarkModeToggle";
import { useRouter } from "next/navigation";
import Logout from "../Logout";
import { useUser } from "@/contexts/userContext";
import { Locale } from "@/i18n.config";
import ChangeLocale from "../LocaleTrigger";

export default function NavBar({ lang }: { lang: Locale }) {
  const { user, loading } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="block bg-white dark:bg-black dark:text-white md:px-16"
      classNames={{
        wrapper: ["py-5", "max-w-full"],
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]"
        ]
      }}
    >
      <NavbarContent
        justify="start"
        className=""
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <div className=" flex items-center justify-between gap-20">
          <NavbarBrand>
            <Link
              href={`/${lang}`}
              className="flex gap-2"
            >
              <Image
                width={25}
                height={25}
                className="my-2"
                src={`/${lang}/logo.svg`}
                alt="logo"
              />
              <p className="text-2xl font-semibold text-black dark:text-white ">FinBiz</p>
            </Link>
          </NavbarBrand>
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden gap-4 sm:flex "
        justify="center"
      >
        <NavbarItem>
          <Link
            href="#"
            className="cursor-pointer text-xl text-black dark:text-customGray"
          >
            Product
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className=" flex items-center justify-center gap-0 bg-transparent p-0 text-xl  data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                <p className="text-black dark:text-customGray"> Pages</p>
                <RiArrowDropDownLine
                  className=" text-black dark:text-customGray"
                  size={30}
                />
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            classNames={{ list: "text-center" }} // slots
            itemClasses={{
              base: "gap-4"
            }}
          >
            <DropdownItem>
              <Link
                href={`/${lang}/comments`}
                className="flex items-center text-black dark:text-customGray "
              >
                <h4 className="font-semibold">Comments</h4>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link
                href="#"
                className="flex items-center text-black dark:text-customGray "
              >
                <h4 className="font-semibold">Test</h4>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link
            href={`/${lang}/comments`}
            className="cursor-pointer text-xl text-black dark:text-customGray"
          >
            Comments
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="cursor-pointer text-xl text-black dark:text-customGray"
          >
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="cursor-pointer text-xl text-black dark:text-customGray"
          >
            Pricing
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex gap-2">
          <DarkModeToggle />
          <ChangeLocale lang={lang} />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          {!loading ? (
            user ? (
              <Logout lang={lang} />
            ) : (
              <Button
                onClick={() => router.push(`/${lang}/login`)}
                className="bggr rounded-full border-2 border-b-0 border-blackGray  bg-[#f6f6f6] text-lg font-semibold text-black dark:bg-[#1f1f1f] dark:text-white"
              >
                Sign in
              </Button>
            )
          ) : (
            <Button className="bggr rounded-full border-2 border-b-0 border-blackGray  bg-[#f6f6f6] text-lg font-semibold text-black dark:bg-[#1f1f1f] dark:text-white">
              <Skeleton className="h-3 w-full rounded-lg  " />
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      {/* Mobile */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            href={`/${lang}/login`}
            size="lg"
            className="cursor-pointer text-xl text-black dark:text-customGray"
          >
            Login
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href={`/${lang}/comments`}
            size="lg"
            className="cursor-pointer text-xl text-black dark:text-customGray"
          >
            Comments
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/#"
            size="lg"
            className="cursor-pointer text-xl text-black dark:text-customGray"
          >
            Test
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
