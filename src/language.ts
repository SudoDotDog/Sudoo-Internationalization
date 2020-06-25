/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Language
 */

import { LOCALE } from "./declare";

export const getLanguageLocale = (language: string): LOCALE | undefined => {

    const lowerCased: string = language.toLowerCase();
    switch (lowerCased) {
        case 'zh-cn':
            return LOCALE.CHINESE_SIMPLIFIED;
    }
};

export const getSystemLanguage = (defaultLanguage: LOCALE = LOCALE.ENGLISH_UNITED_STATES): LOCALE => {

    if (!navigator) {
        return defaultLanguage;
    }

    if (Array.isArray(navigator.languages)) {
        for (const language of navigator.languages) {
            const locale: LOCALE | undefined = getLanguageLocale(language);

            if (locale) {
                return locale;
            }
        }
    }

    return defaultLanguage;
};
