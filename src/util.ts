/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Util
 */

import { BasicPlaceHolder, PlaceHolder, PROFILE } from "./declare";

export const fillBasicPlaceholderMessage = (message: string, placeholder: BasicPlaceHolder): string => {

    if (typeof placeholder === 'undefined') {
        return message.replace('{}', 'undefined');
    }

    if (placeholder === null) {
        return message.replace('{}', 'null');
    }

    if (typeof placeholder === 'string'
        || typeof placeholder === 'number'
        || typeof placeholder === 'boolean') {
        return message.replace('{}', placeholder.toString());
    }

    if (placeholder instanceof Date) {
        return message.replace('{}', placeholder.toString());
    }

    return message.replace('{}', typeof placeholder);
};

export const fillMessage = (message: string, ...placeholders: PlaceHolder[]): string => {

    return placeholders.reduce<string>((previous: string, placeholder: PlaceHolder) => {

        if (placeholder instanceof Date || typeof placeholder !== 'object') {

            return fillBasicPlaceholderMessage(previous, placeholder);
        }

        return previous;
    }, message);
};

export const profileOrEmpty = (profile?: PROFILE): PROFILE => {

    if (profile) {
        return profile;
    }
    return {};
};
