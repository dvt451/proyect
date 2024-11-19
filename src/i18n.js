// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
    .use(HttpApi)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: 'en',
        interpolation: {
            escapeValue: false,
        },
        backend: {
            // Adjust the loadPath to point to a single API endpoint for all translations
            loadPath: process.env.REACT_APP_API_URL + '/translations',
        },
        keySeparator: '.', // Use dot notation for nested keys
    });

export default i18n;
