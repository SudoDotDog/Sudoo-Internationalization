/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Declare
 */

export enum LOCALE {

    CHINESE_SIMPLIFIED = "zh_CN",
    CHINESE_TRADITIONAL = "zh_TW",
    ENGLISH_CANADA = "en_CA",
    ENGLISH_UNITED_KINGDOM = "en_GB",
    ENGLISH_UNITED_STATES = "en_US",
    FRENCH_CANADA = "fr_CA",
    FRENCH_FRANCE = "fr_FR",
    JAPANESE_JAPAN = "ja_JP",
    KOREAN_KOREA = "ko_KR",
    MAORI_NEW_ZEALAND = "mi_NZ",
    RUSSIAN_Russia = "ru_RU",
    SPANISH_MEXICO = "es_MX",
    SPANISH_SPAIN = "es_ES",
}

export type PROFILE = Record<string, string>;
