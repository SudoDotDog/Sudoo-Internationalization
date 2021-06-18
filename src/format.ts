/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Format
 */

import { PROFILE, Replacement } from "./declare";
import { fillMessage } from "./util";

export class SudooFormat<PK extends string = string> {

    public static create<PK extends string = string>(profile: PROFILE<PK>, initial: PROFILE<PK>): SudooFormat<PK> {

        return new SudooFormat<PK>(profile, initial);
    }

    private readonly _profile: PROFILE<PK>;
    private readonly _initial: PROFILE<PK>;

    private constructor(profile: PROFILE<PK>, initial: PROFILE<PK>) {

        this._profile = profile;
        this._initial = initial;
    }

    public get length(): number {
        return Object.keys(this._profile).length;
    }

    public raw(key: keyof PROFILE<PK>): string {

        if (typeof this._profile[key] === 'string') {
            return this._profile[key];
        }
        if (typeof this._initial[key] === 'string') {
            return this._initial[key];
        }

        const errorKey: string = key as string;
        throw new Error(`[Sudoo-Internationalization] undefined key: {${errorKey}}`);
    }

    public get(key: PK, ...args: Replacement[]): string {

        const raw: string = this.raw(key);
        return fillMessage(raw, ...args);
    }
}
