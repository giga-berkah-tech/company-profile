"use client";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { benefitOne, benefitTwo } from "@/resources/data";

import { useTranslation } from "next-export-i18n";

export default function Home() {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="mt-24"></div>
      <Hero />
      <SectionTitle
        preTitle={t("home.services.preTitle")}
        title={t("home.services.title")}
      >
        {t("home.services.description")}
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      {/* <SectionTitle 
        preTitle={t('whoWeAre.preTitle')} 
        title={t('whoWeAre.title')}
      >
        {t('whoWeAre.description')}
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" /> */}

      {/* <SectionTitle
        preTitle={t('testimonials.preTitle')}
        title={t('testimonials.title')}
      >
      </SectionTitle> */}

      {/* <Testimonials /> */}

      <SectionTitle
        preTitle={t("home.faq.preTitle")}
        title={t("home.faq.title")}
      ></SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
