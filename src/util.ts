/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Util
 */

import { PROFILE } from "./declare";

export const fillMessage = (message: string, ...placeholders: any[]): string => {

    return placeholders.reduce((previous: string, placeholder: any) => {

        if (typeof placeholder === 'undefined') {
            return previous.replace('{}', 'undefined');
        }

        if (placeholder === null) {
            return previous.replace('{}', 'null');
        }

        const fixed: string = Boolean(placeholder.toString)
            ? placeholder.toString()
            : typeof placeholder;

        return previous.replace('{}', fixed);
    }, message);
};

export const profileOrEmpty = (profile?: PROFILE): PROFILE => {

    if (profile) {
        return profile;
    }
    return {};
};
