/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Util
 */

import { BasicPlaceHolder, PlaceHolder, PROFILE, RecordPlaceHolder } from "./declare";

export const fillBasicPlaceholderMessage = (message: string, placeholder: string, replacement: BasicPlaceHolder): string => {

    if (typeof replacement === 'undefined') {
        return message.replace(placeholder, 'undefined');
    }

    if (replacement === null) {
        return message.replace(placeholder, 'null');
    }

    if (typeof replacement === 'string'
        || typeof replacement === 'number'
        || typeof replacement === 'boolean') {
        return message.replace(placeholder, replacement.toString());
    }

    if (replacement instanceof Date) {
        return message.replace(placeholder, replacement.toString());
    }

    return message.replace(placeholder, typeof replacement);
};

export const fillRecordPlaceholderMessage = (message: string, replacement: RecordPlaceHolder): string => {

    const keys: string[] = Object.keys(replacement);

    return keys.reduce<string>((previous: string, currentKey: string) => {

        const currentReplacement: BasicPlaceHolder = replacement[currentKey];
        return fillBasicPlaceholderMessage(previous, `{${currentKey}}`, currentReplacement);
    }, message);
};

export const fillMessage = (message: string, ...placeholders: PlaceHolder[]): string => {

    return placeholders.reduce<string>((previous: string, placeholder: PlaceHolder) => {

        if (placeholder instanceof Date
            || placeholder === null
            || typeof placeholder !== 'object') {

            return fillBasicPlaceholderMessage(previous, '{}', placeholder as any as BasicPlaceHolder);
        }

        return fillRecordPlaceholderMessage(message, placeholder);
    }, message);
};

export const profileOrEmpty = (profile?: PROFILE): PROFILE => {

    if (profile) {
        return profile;
    }
    return {};
};
