import type { AppProps } from 'next/app';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { CONTENTFUL_GRAPHQL_BASE_URI } from '../constants/constants';
import { Global, ThemeProvider } from '@emotion/react';
import { global } from '../styles/globals';
import { appWithTranslation } from 'next-i18next';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${CONTENTFUL_GRAPHQL_BASE_URI}${process.env.CONTENTFUL_SPACE_ID}`,
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={{}}>
        <Global styles={global} />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default appWithTranslation(MyApp);
