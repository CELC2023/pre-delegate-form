import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import Backend from 'i18next-fs-backend';

import translationEN from './locales/en/pre-delegate.json';
import translationFR from './locales/fr/pre-delegate.json';

const resources = {
    en: {
        translation: translationEN
    },
    fr: {
        translation: translationFR
    }
}

i18n.use(initReactI18next).init({
    // backend: {
    //     loadPath: './locales/{{lng}}/{{ns}}.json',
    // },
    lng: "en",
    fallbackLng: "en",
    debug: true,
    // ns: "pre-delegate",
    resources
})