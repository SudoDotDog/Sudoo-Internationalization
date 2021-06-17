/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Internationalization
 */

import { LOCALE, PROFILE } from "./declare";
import { SudooFormat } from "./format";
import { getSystemLanguage } from "./language";
import { profileOrEmpty } from "./util";

export class SudooInternationalization<P extends PROFILE = any> {

    public static create<P extends PROFILE = any>(initial: LOCALE): SudooInternationalization<P> {

        return new SudooInternationalization<P>(initial);
    }

    public static withSystemLanguage(): SudooInternationalization {

        const systemLanguage: LOCALE = getSystemLanguage();
        return new SudooInternationalization(systemLanguage);
    }

    private readonly _initial: LOCALE;
    private readonly _map: Map<LOCALE, P>;

    private constructor(initial: LOCALE) {

        this._initial = initial;
        this._map = new Map<LOCALE, P>();
    }

    public set(code: LOCALE, profile: P): SudooInternationalization {

        this._map.set(code, profile);
        return this;
    }

    public merge(code: LOCALE, profile: P): SudooInternationalization {

        const current: P = this._get(code);
        const newProfile: P = {
            ...current,
            ...profile,
        };
        return this.set(code, newProfile);
    }

    public format(code: LOCALE): SudooFormat {

        const profile: P = this._get(code);
        const initial: P = this._get(this._initial);
        return SudooFormat.create<P>(profile, initial);
    }

    public count(code: LOCALE): number {

        return this.format(code).length;
    }

    private _get(code: LOCALE): P {

        return profileOrEmpty(this._map.get(code)) as P;
    }
}
