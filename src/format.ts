/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Format
 */

import { PROFILE } from "./declare";
import { fillMessage } from "./util";

export class SudooFormat {

    public static create(profile: PROFILE, initial: PROFILE): SudooFormat {

        return new SudooFormat(profile, initial);
    }

    private readonly _profile: PROFILE;
    private readonly _initial: PROFILE;

    private constructor(profile: PROFILE, initial: PROFILE) {

        this._profile = profile;
        this._initial = initial;
    }

    public get length(): number {
        return Object.keys(this._profile).length;
    }

    public raw(key: string): string {

        if (typeof this._profile[key] === 'string') {
            return this._profile[key];
        }
        if (typeof this._initial[key] === 'string') {
            return this._initial[key];
        }
        throw new Error("[Sudoo-Internationalization] undefined key: {" + key + "}");
    }

    public get(key: string, ...args: any[]): string {

        const raw: string = this.raw(key);
        return fillMessage(raw, ...args);
    }
}
