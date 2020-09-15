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

            // eslint-disable-next-line @typescript-eslint/unbound-method
            const fixed: string = Boolean(placeholder.toString)
                ? placeholder.toString()
                : typeof placeholder;

            return previous.replace('{}', fixed);
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
