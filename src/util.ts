/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Util
 */

import { PROFILE } from "./declare";

export const fillMessage = (message: string, ...placeholders: string[]) => {

    placeholders.reduce((previous: string, placeholder: string) => {

        return previous.replace('{}', placeholder);
    }, message);
};

export const profileOrEmpty = (profile?: PROFILE): PROFILE => {

    if (profile) {
        return profile;
    }
    return {};
};
