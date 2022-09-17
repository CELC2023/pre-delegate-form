import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import delegateEn from './locales/en/delegate.json';
import delegateFr from './locales/fr/delegate.json';

const resources = {
    en: {
        delegate: delegateEn,
    },
    fr: {
        delegate: delegateFr,
    }
}

i18n.use(initReactI18next).init({ 
    defaultNS: 'delegate',
    lng: "en",
    fallbackLng: "en",
    resources
})