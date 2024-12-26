/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Language
 */

import { IETF_LOCALE } from "@sudoo/locale";

export const getLanguageLocale = (language: string): IETF_LOCALE | undefined => {

    const lowerCased: string = language.toLowerCase();
    switch (lowerCased) {
        case "zh-cn":
            return IETF_LOCALE.CHINESE_SIMPLIFIED;
        case "zh-tw":
            return IETF_LOCALE.CHINESE_TRADITIONAL;
        case "en-ca":
            return IETF_LOCALE.ENGLISH_CANADA;
        case "en-gb":
            return IETF_LOCALE.ENGLISH_UNITED_KINGDOM;
        case "en-us":
            return IETF_LOCALE.ENGLISH_UNITED_STATES;
        case "fr-ca":
            return IETF_LOCALE.FRENCH_CANADA;
        case "fr-fr":
            return IETF_LOCALE.FRENCH_FRANCE;
        case "ja-jp":
            return IETF_LOCALE.JAPANESE_JAPAN;
        case "ko-kr":
            return IETF_LOCALE.KOREAN_KOREA;
        case "mi-nz":
            return IETF_LOCALE.MAORI_NEW_ZEALAND;
        case "ru-ru":
            return IETF_LOCALE.RUSSIAN_RUSSIA;
        case "es-mx":
            return IETF_LOCALE.SPANISH_MEXICO;
        case "es-es":
            return IETF_LOCALE.SPANISH_SPAIN;
    }

    const languageHeader: string = lowerCased.substring(0, 2);
    switch (languageHeader) {
        case "zh":
            return IETF_LOCALE.CHINESE_SIMPLIFIED;
        case "en":
            return IETF_LOCALE.ENGLISH_UNITED_STATES;
        case "fr":
            return IETF_LOCALE.FRENCH_FRANCE;
        case "ja":
            return IETF_LOCALE.JAPANESE_JAPAN;
        case "ko":
            return IETF_LOCALE.KOREAN_KOREA;
        case "mi":
            return IETF_LOCALE.MAORI_NEW_ZEALAND;
        case "ru":
            return IETF_LOCALE.RUSSIAN_RUSSIA;
        case "es":
            return IETF_LOCALE.SPANISH_SPAIN;
    }

    return undefined;
};

export const getSystemLanguage = (defaultLanguage: IETF_LOCALE = IETF_LOCALE.ENGLISH_UNITED_STATES): IETF_LOCALE => {

    if (!navigator) {
        return defaultLanguage;
    }

    if (Array.isArray(navigator.languages)) {

        for (const language of navigator.languages) {

            const locale: IETF_LOCALE | undefined = getLanguageLocale(language);

            if (locale) {
                return locale;
            }
        }
    }

    if (navigator.language) {

        const locale: IETF_LOCALE | undefined = getLanguageLocale(navigator.language);

        if (locale) {
            return locale;
        }
    }

    const legacyLanguageProperties: string[] = ["browserLanguage", "systemLanguage", "userLanguage"];
    for (const property of legacyLanguageProperties) {

        const language: any = navigator[property as any as keyof Navigator];
        if (typeof language !== "string") {
            continue;
        }

        const locale: IETF_LOCALE | undefined = getLanguageLocale(language);

        if (locale) {
            return locale;
        }
    }

    return defaultLanguage;
};
