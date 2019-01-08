/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Internationalization
 */

import { LOCALE, PROFILE } from "./declare";
import { SudooFormat } from "./format";
import { profileOrEmpty } from "./util";

export class SudooInternationalization {

    public static create(initial: LOCALE): SudooInternationalization {

        return new SudooInternationalization(initial);
    }

    private readonly _initial: LOCALE;
    private readonly _map: Map<LOCALE, PROFILE>;

    private constructor(initial: LOCALE) {

        this._map = new Map<LOCALE, PROFILE>();
    }

    public add(code: LOCALE, profile: PROFILE): SudooInternationalization {

        this._map.set(code, profile);
        return this;
    }

    public format(code: LOCALE): SudooFormat {

        const profile: PROFILE = profileOrEmpty(this._map.get(code));
        const initial: PROFILE = profileOrEmpty(this._map.get(this._initial));

        return SudooFormat.create(profile, initial);
    }
}
