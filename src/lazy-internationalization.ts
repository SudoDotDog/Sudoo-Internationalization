/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Lazy Internationalization
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { PROFILE } from "./declare";
import { SudooFormat } from "./format";
import { getSystemLanguage } from "./language";

export class SudooLazyInternationalization<PK extends string = string> {

    public static create<PK extends string = string>(initial: IETF_LOCALE): SudooLazyInternationalization<PK> {

        return new SudooLazyInternationalization<PK>(initial);
    }

    public static withSystemLanguage(): SudooLazyInternationalization {

        const systemLanguage: IETF_LOCALE = getSystemLanguage();
        return new SudooLazyInternationalization(systemLanguage);
    }

    private readonly _initial: IETF_LOCALE;
    private readonly _map: Map<IETF_LOCALE, Promise<PROFILE<PK>>[]>;

    private constructor(initial: IETF_LOCALE) {

        this._initial = initial;
        this._map = new Map<IETF_LOCALE, Promise<PROFILE<PK>>[]>();
    }

    public mergeLazyProfile(code: IETF_LOCALE, profile: Promise<PROFILE<PK>>): SudooLazyInternationalization {

        const current: Promise<PROFILE<PK>>[] = this._map.get(code) ?? [];
        const newProfiles: Promise<PROFILE<PK>>[] = [
            ...current,
            profile,
        ];
        this._map.set(code, newProfiles);
        return this;
    }

    public async format(code: IETF_LOCALE): Promise<SudooFormat<PK>> {

        const realizedInitialProfiles: PROFILE<PK> = await this._realizeProfiles(this._initial);
        const realizedProfiles: PROFILE<PK> = await this._realizeProfiles(code);

        return SudooFormat.create<PK>(realizedProfiles, realizedInitialProfiles);
    }

    private async _realizeProfiles(code: IETF_LOCALE): Promise<PROFILE<PK>> {

        const lazyProfiles: Promise<PROFILE<PK>>[] = this._map.get(code) ?? [];
        const profiles: PROFILE<PK>[] = await Promise.all(lazyProfiles);

        const mergedProfiles: PROFILE<PK> = profiles.reduce((previous, current) => {
            return {
                ...previous,
                ...current,
            };
        }, {} as PROFILE<PK>);

        return mergedProfiles;
    }
}
