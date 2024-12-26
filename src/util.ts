/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Util
 */

import { BasicReplacement, PROFILE, RecordReplacement, Replacement } from "./declare";

export const fillBasicReplacementMessage = (message: string, placeholder: string, replacement: BasicReplacement): string => {

    if (typeof replacement === "undefined") {
        return message.replace(placeholder, "undefined");
    }

    if (replacement === null) {
        return message.replace(placeholder, "null");
    }

    if (typeof replacement === "string"
        || typeof replacement === "number"
        || typeof replacement === "boolean") {
        return message.replace(placeholder, replacement.toString());
    }

    if (replacement instanceof Date) {
        return message.replace(placeholder, replacement.toString());
    }

    return message.replace(placeholder, typeof replacement);
};

export const fillRecordReplacementMessage = (message: string, replacement: RecordReplacement): string => {

    const keys: string[] = Object.keys(replacement);

    return keys.reduce<string>((previous: string, currentKey: string) => {

        const currentReplacement: BasicReplacement = replacement[currentKey];
        return fillBasicReplacementMessage(previous, `{${currentKey}}`, currentReplacement);
    }, message);
};

export const fillMessage = (message: string, ...replacements: Replacement[]): string => {

    return replacements.reduce<string>((previous: string, replacement: Replacement) => {

        if (replacement instanceof Date
            || replacement === null
            || typeof replacement !== "object") {

            return fillBasicReplacementMessage(previous, "{}", replacement as any as BasicReplacement);
        }
        return fillRecordReplacementMessage(message, replacement);
    }, message);
};

export const profileOrEmpty = (profile?: PROFILE): PROFILE => {

    if (profile) {
        return profile;
    }
    return {};
};
