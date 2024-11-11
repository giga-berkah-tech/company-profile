"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import {
  useTranslation,
  LanguageSwitcher,
  LinkWithLocale,
} from "next-export-i18n";

export const Navbar = () => {
  const { t } = useTranslation();

  const navigation = [
    { name: t("navbar.product"), url: "/product" },
    { name: t("navbar.services"), url: "/services" },
    { name: t("navbar.company"), url: "/company" },
    { name: t("navbar.blog"), url: "/blog" },
  ];

  return (
    <div className="w-full fixed bg-white dark:bg-black shadow-md z-50">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <LinkWithLocale href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium dark:text-white">
            <span>
              <img
                src="/img/logo.png"
                width="32"
                alt={t("navbar.logoAlt")}
                height="32"
                className="w-8"
              />
            </span>
            <div className="md:text-2xl text-xs flex flex-col md:flex-row">
              <span>{t("navbar.companyName1")}</span>
              <span className="text-indigo-500">
                {t("navbar.companyName2")}
              </span>
            </div>
          </span>
        </LinkWithLocale>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 flex ml-auto lg:ml-0 lg:order-2 ">
          <ThemeChanger />
          <div className="hidden mr-3 lg:flex nav__item">
            <LinkWithLocale
              href="/contact"
              className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
            >
              {t("navbar.getStarted")}
            </LinkWithLocale>
          </div>
          <div className="flex items-center space-x-1">
            <div
              className="px-3 py-1 text-sm rounded-s-md transition-all duration-200 ease-in-out 
                hover:bg-gray-200 dark:hover:bg-gray-700
                bg-gray-100 dark:bg-gray-800 
                text-gray-600 dark:text-gray-300"
            >
              <LanguageSwitcher lang="id">ID</LanguageSwitcher>
            </div>

            <div
              className="px-3 py-1 text-sm rounded-e-md transition-all duration-200 ease-in-out 
                hover:bg-gray-200 dark:hover:bg-gray-700
                bg-gray-100 dark:bg-gray-800 
                text-gray-600 dark:text-gray-300"
            >
              <LanguageSwitcher lang="en">EN</LanguageSwitcher>
            </div>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label={t("navbar.toggleMenu")}
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <LinkWithLocale
                      key={index}
                      href={item.url}
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      {item.name}
                    </LinkWithLocale>
                  ))}
                  <LinkWithLocale
                    href="/"
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                  >
                    {t("navbar.getStarted")}
                  </LinkWithLocale>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="hidden">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <LinkWithLocale
                  href={menu.url}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu.name}
                </LinkWithLocale>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
