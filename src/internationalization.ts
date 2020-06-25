/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Internationalization
 */

import { LOCALE, PROFILE } from "./declare";
import { SudooFormat } from "./format";
import { getSystemLanguage } from "./language";
import { profileOrEmpty } from "./util";

export class SudooInternationalization {

    public static create(initial: LOCALE): SudooInternationalization {

        return new SudooInternationalization(initial);
    }

    public static withSystemLanguage(): SudooInternationalization {

        const systemLanguage: LOCALE = getSystemLanguage();
        return new SudooInternationalization(systemLanguage);
    }

    private readonly _initial: LOCALE;
    private readonly _map: Map<LOCALE, PROFILE>;

    private constructor(initial: LOCALE) {

        this._initial = initial;
        this._map = new Map<LOCALE, PROFILE>();
    }

    public set(code: LOCALE, profile: PROFILE): SudooInternationalization {

        this._map.set(code, profile);
        return this;
    }

    public merge(code: LOCALE, profile: PROFILE): SudooInternationalization {

        const current: PROFILE = this._get(code);
        const newProfile: PROFILE = {
            ...current,
            ...profile,
        };
        return this.set(code, newProfile);
    }

    public format(code: LOCALE): SudooFormat {

        const profile: PROFILE = this._get(code);
        const initial: PROFILE = this._get(this._initial);
        return SudooFormat.create(profile, initial);
    }

    public count(code: LOCALE): number {

        return this.format(code).length;
    }

    private _get(code: LOCALE): PROFILE {

        return profileOrEmpty(this._map.get(code));
    }
}
