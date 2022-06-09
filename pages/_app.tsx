import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { CONTENTFUL_GRAPHQL_BASE_URI } from "../constants/constants";

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
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
