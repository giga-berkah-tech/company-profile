'use client';
import { Container } from '@/components/Container';
import { useTranslation } from 'next-export-i18n'; // adjust to your project

export default function Term() {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="mt-24 space-y-6">
        <h1 className="text-3xl font-bold">{t('term.title')}</h1>

        <p className="text-gray-600">{t('term.lastUpdated')}</p>

        <p>{t('term.intro')}</p>

        {/* Interpretation */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {t('term.interpretation.title')}
          </h2>

          <h3 className="text-xl font-semibold">
            {t('term.interpretation.subtitle1')}
          </h3>
          <p>{t('term.interpretation.text1')}</p>

          <h3 className="text-xl font-semibold">
            {t('term.interpretation.subtitle2')}
          </h3>
          <p>{t('term.interpretation.text2')}</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>{t('term.definitions.affiliate_label')}:</strong>{' '}
              {t('term.definitions.affiliate')}
            </li>
            <li>
              <strong>{t('term.definitions.country_label')}:</strong> Indonesia
            </li>
            <li>
              <strong>{t('term.definitions.company_label')}:</strong>{' '}
              {t('term.definitions.company')}
            </li>
            <li>
              <strong>{t('term.definitions.device_label')}:</strong>{' '}
              {t('term.definitions.device')}
            </li>
            <li>
              <strong>{t('term.definitions.service_label')}:</strong>{' '}
              {t('term.definitions.service')}
            </li>
            <li>
              <strong>{t('term.definitions.terms_label')}:</strong>{' '}
              {t('term.definitions.terms')}
            </li>
            <li>
              <strong>{t('term.definitions.website_label')}:</strong>
              <a
                href="https://company.aplikasiku.web.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                https://company.aplikasiku.web.id/
              </a>
            </li>
            <li>
              <strong>{t('term.definitions.you_label')}:</strong>{' '}
              {t('term.definitions.you')}
            </li>
          </ul>
        </section>

        {/* --- Below is where all next content will go --- */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('term.ack.title')}</h2>
          <p>{t('term.ack.p1')}</p>
          <p>{t('term.ack.p2')}</p>
          <p>{t('term.ack.p3')}</p>
          <p>{t('term.ack.p4')}</p>
          <p>{t('term.ack.p5')}</p>
        </section>

        {/* Links Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('term.links.title')}</h2>
          <p>{t('term.links.p1')}</p>
          <p>{t('term.links.p2')}</p>
          <p>{t('term.links.p3')}</p>

          <h3 className="text-xl font-semibold">
            {t('term.links.socialTitle')}
          </h3>
          <p>{t('term.links.socialP1')}</p>
          <p>{t('term.links.socialP2')}</p>
        </section>

        {/* Termination */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {t('term.termination.title')}
          </h2>
          <p>{t('term.termination.p1')}</p>
          <p>{t('term.termination.p2')}</p>
        </section>

        {/* Liability */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {t('term.liability.title')}
          </h2>
          <p>{t('term.liability.p1')}</p>
          <p>{t('term.liability.p2')}</p>
          <p>{t('term.liability.p3')}</p>
        </section>

        {/* Disclaimer */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {t('term.disclaimer.title')}
          </h2>
          <p>{t('term.disclaimer.p1')}</p>
          <p>{t('term.disclaimer.p2')}</p>
          <p>{t('term.disclaimer.p3')}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('term.govLaw.title')}</h2>
          <p>{t('term.govLaw.p1')}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('term.dispute.title')}</h2>
          <p>{t('term.dispute.p1')}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('term.eu.title')}</h2>
          <p>{t('term.eu.p1')}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('term.us.title')}</h2>
          <p>{t('term.us.p1')}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {t('term.severability.title')}
          </h2>
          <h3 className="text-xl font-semibold">
            {t('term.severability.sub1')}
          </h3>
          <p>{t('term.severability.p1')}</p>

          <h3 className="text-xl font-semibold">
            {t('term.severability.sub2')}
          </h3>
          <p>{t('term.severability.p2')}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {t('term.translation.title')}
          </h2>
          <p>{t('term.translation.p1')}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('term.changes.title')}</h2>
          <p>{t('term.changes.p1')}</p>
          <p>{t('term.changes.p2')}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('term.contact.title')}</h2>
          <p>{t('term.contact.p1')}</p>
          <ul>
            <li>cs@aplikasiku.web.id</li>
          </ul>
        </section>
      </div>
    </Container>
  );
}
