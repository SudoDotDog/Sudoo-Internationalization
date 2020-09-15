/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Util
 */

import { PlaceHolder, PROFILE } from "./declare";

export const fillMessage = (message: string, ...placeholders: PlaceHolder[]): string => {

    return placeholders.reduce<string>((previous: string, placeholder: PlaceHolder) => {

        if (typeof placeholder === 'undefined') {
            return previous.replace('{}', 'undefined');
        }

        if (placeholder === null) {
            return previous.replace('{}', 'null');
        }

        if (typeof placeholder === 'string'
            || typeof placeholder === 'number'
            || typeof placeholder === 'boolean') {
            return previous.replace('{}', placeholder.toString());
        }

        if (placeholder instanceof Date) {
            return previous.replace('{}', placeholder.toString());
        }

        return previous.replace('{}', typeof placeholder);
    }, message);
};

export const profileOrEmpty = (profile?: PROFILE): PROFILE => {

    if (profile) {
        return profile;
    }
    return {};
};
