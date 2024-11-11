"use client";
import Image from "next/image";
import { Container } from "./Container";
import heroImg from "../../public/img/hero.png";
import { useTranslation } from "next-export-i18n";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="pb-4 text-2xl font-bold leading-snug tracking-tight text-indigo-800 dark:text-indigo-400  lg:leading-tight xl:leading-tight">
              PT. Giga Berkah Teknologi
            </h1>
            <h2 className="text-2xl md:text-4xl leading-snug tracking-tight text-gray-600 lg:leading-tight xl:leading-tight dark:text-white ">
              {t("hero.title")}
            </h2>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 xl:font-light">
              {t("hero.description")}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md"
              >
                {t("hero.primaryButton")}
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img
              src={heroImg.src}
              width="616"
              height="617"
              className={"object-cover"}
              alt={t("hero.imageAlt")}
              loading="eager"
              // priority={true}
            />
          </div>
        </div>
      </Container>
    </>
  );
};
