/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Language
 */

import { LOCALE } from "./declare";

export const getLanguageLocale = (language: string): LOCALE | undefined => {

    const lowerCased: string = language.toLowerCase();
    switch (lowerCased) {
        case 'en-gb':
            return LOCALE.ENGLISH_UNITED_KINGDOM;
        case 'en-us':
            return LOCALE.ENGLISH_UNITED_STATES;
        case 'zh-cn':
            return LOCALE.CHINESE_SIMPLIFIED;
        case 'zh-tw':
            return LOCALE.CHINESE_TRADITIONAL;
        case 'es-mx':
            return LOCALE.SPANISH_MEXICO;
        case 'fr-ca':
            return LOCALE.FRENCH_CANADA;
    }

    const languageHeader: string = lowerCased.substring(0, 2);
    switch (languageHeader) {
        case 'en':
            return LOCALE.ENGLISH_UNITED_STATES;
        case 'es':
            return LOCALE.SPANISH_SPAIN;
        case 'ja':
            return LOCALE.JAPANESE_JAPAN;
        case 'zh':
            return LOCALE.CHINESE_SIMPLIFIED;
        case 'fr':
            return LOCALE.FRENCH_FRANCE;
        case 'ko':
            return LOCALE.KOREAN_KOREA;
        case 'mi':
            return LOCALE.MAORI_NEW_ZEALAND;
        case 'ru':
            return LOCALE.RUSSIAN_RUSSIA;
    }

    return undefined;
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

    if (navigator.language) {

        const locale: LOCALE | undefined = getLanguageLocale(navigator.language);

        if (locale) {
            return locale;
        }
    }

    const legacyLanguageProperties: string[] = ['browserLanguage', 'systemLanguage', 'userLanguage'];
    for (const property of legacyLanguageProperties) {

        const language: any = navigator[property as any as keyof Navigator];
        if (typeof language !== 'string') {
            continue;
        }

        const locale: LOCALE | undefined = getLanguageLocale(language);

        if (locale) {
            return locale;
        }
    }

    return defaultLanguage;
};
