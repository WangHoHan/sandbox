import 'next-i18next';
import common from './translations/en-US/common.json';
import hello from './translations/en-US/hello.json';
declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      common: typeof common;
      hello: typeof hello;
    };
  }
}
