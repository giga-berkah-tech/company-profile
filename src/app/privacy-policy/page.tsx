'use client';
import { Container } from '@/components/Container';
import { useTranslation } from 'next-export-i18n';

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="mt-24 mb-24 space-y-12  leading-relaxed">
        {/* Header Section */}
        <header className="space-y-2 border-b pb-8">
          <h1 className="text-4xl font-extrabold">{t('privacy.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            {t('privacy.lastUpdated')}
          </p>
        </header>

        {/* Introduction */}
        <section className="space-y-4">
          <p>{t('privacy.intro.p1')}</p>
          <p>{t('privacy.intro.p2')}</p>
        </section>

        {/* Interpretation and Definitions */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">
            {t('privacy.interpretation.title')}
          </h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              {t('privacy.interpretation.interpretationTitle')}
            </h3>
            <p>{t('privacy.interpretation.interpretationText')}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              {t('privacy.definitions.title')}
            </h3>
            <p>{t('privacy.definitions.intro')}</p>
            <ul className="grid grid-cols-1 gap-4 pl-0">
              {Object.keys(t('privacy.definitions.items')).map((key) => (
                <li key={key} className="flex gap-2">
                  <span className="font-bold min-w-[120px] capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}:
                  </span>
                  <span>{t(`privacy.definitions.items.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Types of Data Collected */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold ">
            {t('privacy.collection.title')}
          </h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              {t('privacy.collection.personalData.title')}
            </h3>
            <p>{t('privacy.collection.personalData.p1')}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('privacy.collection.personalData.list.email')}</li>
              <li>{t('privacy.collection.personalData.list.name')}</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              {t('privacy.collection.usageData.title')}
            </h3>
            <p>{t('privacy.collection.usageData.p1')}</p>
            <p>{t('privacy.collection.usageData.p2')}</p>
            <p>{t('privacy.collection.usageData.p3')}</p>
            <p>{t('privacy.collection.usageData.p4')}</p>
          </div>

          {/* Tracking & Cookies */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              {t('privacy.collection.tracking.title')}
            </h3>
            <p>{t('privacy.collection.tracking.p1')}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('privacy.collection.tracking.items.cookies')}</li>
              <li>{t('privacy.collection.tracking.items.webBeacons')}</li>
            </ul>
            <p>{t('privacy.collection.tracking.p2')}</p>
            <p>{t('privacy.collection.tracking.p3')}</p>
            <p>{t('privacy.collection.tracking.p4')}</p>
          </div>
        </section>

        {/* Cookie Specifics */}
        <section className="grid md:grid-cols-3 gap-6">
          {['necessary', 'policyAcceptance', 'functionality'].map((type) => (
            <div
              key={type}
              className="p-5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-800"
            >
              <h4 className="font-bold">
                {t(`privacy.cookies.${type}.title`)}
              </h4>
              <p className="text-xs font-mono text-blue-600 mb-2">
                {t(`privacy.cookies.${type}.type`)}
              </p>
              <p className="text-sm">{t(`privacy.cookies.${type}.purpose`)}</p>
            </div>
          ))}
          <p className="md:col-span-3 text-sm italic">
            {t('privacy.cookies.moreInfo')}
          </p>
        </section>

        {/* Use and Sharing */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">
            {t('privacy.useOfPersonalData.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {Object.keys(t('privacy.useOfPersonalData.purposes')).map((key) => (
              <div key={key} className="text-sm">
                <span className="font-semibold block capitalize">
                  {key.replace(/([A-Z])/g, ' $1')}:
                </span>
                {t(`privacy.useOfPersonalData.purposes.${key}`)}
              </div>
            ))}
          </div>
        </section>

        {/* Retention */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">{t('privacy.retention.title')}</h2>
          <p>{t('privacy.retention.policy')}</p>
          <div className="bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl space-y-4 text-sm">
            <div>
              <h4 className="font-bold underline">
                {t('privacy.retention.categories.accountInformation.title')}
              </h4>
              <p>
                {t(
                  'privacy.retention.categories.accountInformation.userAccounts',
                )}
              </p>
            </div>
            <div>
              <h4 className="font-bold underline">
                {t('privacy.retention.categories.supportData.title')}
              </h4>
              <p>
                {t('privacy.retention.categories.supportData.supportTickets')}
              </p>
              <p>
                {t('privacy.retention.categories.supportData.chatTranscripts')}
              </p>
            </div>
          </div>
        </section>

        {/* Delete Data Right */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            {t('privacy.deleteData.title')}
          </h2>
          <p>{t('privacy.deleteData.rights')}</p>
          <p>{t('privacy.deleteData.accountManagement')}</p>
          <p className="bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 p-3 border-l-4 border-yellow-400 text-sm">
            <strong>Note:</strong> {t('privacy.deleteData.note')}
          </p>
        </section>

        {/* Disclosure */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">
            {t('privacy.disclosure.title')}
          </h2>
          <p>{t('privacy.disclosure.businessTransactions')}</p>
          <p>{t('privacy.disclosure.lawEnforcement')}</p>
          <ul className="list-disc pl-6 space-y-1">
            {/* Explicitly mapping the legalRequirements array */}
            {(
              t('privacy.disclosure.legalRequirements') as unknown as string[]
            ).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Final Sections */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold">
              {t('privacy.security.title')}
            </h2>
            <p>{t('privacy.security.content')}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">
              {t('privacy.children.title')}
            </h2>
            <p>{t('privacy.children.content1')}</p>
            <p>{t('privacy.children.content2')}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{t('privacy.links.title')}</h2>
            <p>{t('privacy.links.content')}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{t('privacy.changes.title')}</h2>
            <p>{t('privacy.changes.content')}</p>
          </div>
        </section>

        {/* Contact */}
        <footer className="pt-10 border-t text-center">
          <h2 className="text-2xl font-bold mb-4">
            {t('privacy.contact.title')}
          </h2>
          <a
            href={`mailto:${t('privacy.contact.email')}`}
            className="text-xl text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            {t('privacy.contact.email')}
          </a>
        </footer>
      </div>
    </Container>
  );
}
