import i18n from 'i18next';
import en from './langs/en';
import es from './langs/es';

import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: { ...en },
			es: { ...es },
		},
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	});
