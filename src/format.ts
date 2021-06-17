/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Format
 */

import { PROFILE } from "./declare";
import { fillMessage } from "./util";

export class SudooFormat<P extends PROFILE = any> {

    public static create<P extends PROFILE = any>(profile: P, initial: P): SudooFormat<P> {

        return new SudooFormat<P>(profile, initial);
    }

    private readonly _profile: P;
    private readonly _initial: P;

    private constructor(profile: P, initial: P) {

        this._profile = profile;
        this._initial = initial;
    }

    public get length(): number {
        return Object.keys(this._profile).length;
    }

    public raw(key: keyof P): string {

        if (typeof this._profile[key] === 'string') {
            return this._profile[key];
        }
        if (typeof this._initial[key] === 'string') {
            return this._initial[key];
        }

        const errorKey: string = key as string;
        throw new Error(`[Sudoo-Internationalization] undefined key: {${errorKey}}`);
    }

    public get(key: keyof P, ...args: any[]): string {

        const raw: string = this.raw(key);
        return fillMessage(raw, ...args);
    }
}
