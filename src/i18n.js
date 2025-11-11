import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) // Pasa i18n a react-i18next
  .use(HttpApi) // Carga traducciones de forma perezosa desde /public/locales
  .init({
    supportedLngs: ['en', 'es'],
    fallbackLng: 'en',
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: {
      // Habilita Suspense, clave para la carga perezosa
      useSuspense: true, 
    },
  });

export default i18n;
