/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Format
 */

import { _Map } from "@sudoo/bark/map";
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
        return _Map.keys(this._profile).length;
    }

    public raw(key: string): string {

        if (this._profile[key]) {
            return this._profile[key];
        }
        if (this._initial[key]) {
            return this._initial[key];
        }
        throw new Error("[Sudoo-Internationalization] undefined key: {" + key + "}");
    }

    public get(key: string, ...args: any[]) {

        const raw: string = this.raw(key);
        return fillMessage(raw, ...args);
    }
}
