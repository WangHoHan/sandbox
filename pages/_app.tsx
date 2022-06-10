import type { AppProps } from 'next/app';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { CONTENTFUL_GRAPHQL_BASE_URI } from '../constants/constants';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { Global, ThemeProvider } from '@emotion/react';
import { global } from '../styles/globals';
import en_US from '../lang/en-US.json';
import pl from '../lang/pl.json';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${CONTENTFUL_GRAPHQL_BASE_URI}${process.env.CONTENTFUL_SPACE_ID}`,
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
  },
});

const messages = {
  'en-US': en_US,
  pl,
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={{}}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <Global styles={global} />
          <Component {...pageProps} />
        </IntlProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default MyApp;
