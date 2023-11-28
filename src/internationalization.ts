/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Internationalization
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { PROFILE } from "./declare";
import { SudooFormat } from "./format";
import { getSystemLanguage } from "./language";
import { profileOrEmpty } from "./util";

export class SudooInternationalization<PK extends string = string> {

    public static create<PK extends string = string>(initial: IETF_LOCALE): SudooInternationalization<PK> {

        return new SudooInternationalization<PK>(initial);
    }

    public static withSystemLanguage(): SudooInternationalization {

        const systemLanguage: IETF_LOCALE = getSystemLanguage();
        return new SudooInternationalization(systemLanguage);
    }

    private readonly _initial: IETF_LOCALE;
    private readonly _map: Map<IETF_LOCALE, PROFILE<PK>>;

    private constructor(initial: IETF_LOCALE) {

        this._initial = initial;
        this._map = new Map<IETF_LOCALE, PROFILE<PK>>();
    }

    public set(code: IETF_LOCALE, profile: PROFILE<PK>): SudooInternationalization {

        this._map.set(code, profile);
        return this;
    }

    public merge(code: IETF_LOCALE, profile: PROFILE<PK>): SudooInternationalization {

        const current: PROFILE<PK> = this._get(code);
        const newProfile: PROFILE<PK> = {
            ...current,
            ...profile,
        };
        return this.set(code, newProfile);
    }

    public format(code: IETF_LOCALE): SudooFormat<PK> {

        const profile: PROFILE<PK> = this._get(code);
        const initial: PROFILE<PK> = this._get(this._initial);
        return SudooFormat.create<PK>(profile, initial);
    }

    public count(code: IETF_LOCALE): number {

        return this.format(code).length;
    }

    private _get(code: IETF_LOCALE): PROFILE<PK> {

        return profileOrEmpty(this._map.get(code)) as PROFILE<PK>;
    }
}
