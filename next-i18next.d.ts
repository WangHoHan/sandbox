import 'next-i18next';
import ns1 from './public/locales/en-US/common.json';
import ns2 from './public/locales/pl/common.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ns1';
    resources: {
      ns1: typeof ns1;
      ns2: typeof ns2;
    };
  }
}
