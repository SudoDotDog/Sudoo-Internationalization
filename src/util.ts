/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Util
 */

import { PROFILE } from "./declare";

export const fillMessage = (message: string, ...placeholders: any[]) =>
    placeholders.reduce((previous: string, placeholder: any) =>
        previous.replace(
            '{}',
            Boolean(placeholder.toString)
                ? placeholder.toString()
                : typeof placeholder,
        ), message);


export const profileOrEmpty = (profile?: PROFILE): PROFILE => {

    if (profile) {
        return profile;
    }
    return {};
};
