"use client";
import { Container } from "@/components/Container";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";

export default function PageNotFound() {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="pt-40 flex flex-col items-center justify-center">
        <h1 className="text-4xl">
          404
          <span className="text-2xl"> {t("notFound.title")}</span>
        </h1>
        <p className="text-md py-5 lg:max-w-2xl text-center font-light">
          {t("notFound.description")}
        </p>
        <Link
          href="/"
          className="px-4 py-2 text-md font-light text-center border rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {t("notFound.button")}
        </Link>
      </div>
    </Container>
  );
}
