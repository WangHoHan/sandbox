import { NextPage } from 'next/types';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: '1' } }],
    fallback: true,
  };
}

export const getStaticProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale, ['common', 'hello']);

  return {
    props: {
      ...translations,
    },
  };
};

const Hello: NextPage = () => {
  const { t } = useTranslation(['hello']);

  return <>{t('hello:hello')}</>;
};

export default Hello;
