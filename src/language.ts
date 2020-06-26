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
        case 'zh-tw':
            return LOCALE.CHINESE_TRADITIONAL;
        case 'en-ca':
            return LOCALE.ENGLISH_CANADA;
        case 'en-gb':
            return LOCALE.ENGLISH_UNITED_KINGDOM;
        case 'en-us':
            return LOCALE.ENGLISH_UNITED_STATES;
        case 'fr-ca':
            return LOCALE.FRENCH_CANADA;
        case 'fr-fr':
            return LOCALE.FRENCH_FRANCE;
        case 'ja-jp':
            return LOCALE.JAPANESE_JAPAN;
        case 'ko-kr':
            return LOCALE.KOREAN_KOREA;
        case 'mi-nz':
            return LOCALE.MAORI_NEW_ZEALAND;
        case 'ru-ru':
            return LOCALE.RUSSIAN_RUSSIA;
        case 'es-mx':
            return LOCALE.SPANISH_MEXICO;
        case 'es-es':
            return LOCALE.SPANISH_SPAIN;
    }

    const languageHeader: string = lowerCased.substring(0, 2);
    switch (languageHeader) {
        case 'zh':
            return LOCALE.CHINESE_SIMPLIFIED;
        case 'en':
            return LOCALE.ENGLISH_UNITED_STATES;
        case 'fr':
            return LOCALE.FRENCH_FRANCE;
        case 'ja':
            return LOCALE.JAPANESE_JAPAN;
        case 'ko':
            return LOCALE.KOREAN_KOREA;
        case 'mi':
            return LOCALE.MAORI_NEW_ZEALAND;
        case 'ru':
            return LOCALE.RUSSIAN_RUSSIA;
        case 'es':
            return LOCALE.SPANISH_SPAIN;
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
