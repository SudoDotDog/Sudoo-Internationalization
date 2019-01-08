/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Index
 */

export class SudooInternationalization {

    public static get instance(): SudooInternationalization {

        if (!this._instance) {
            this._instance = new SudooInternationalization();
        }
        return this._instance;
    }

    private static _instance: SudooInternationalization | undefined;

    private constructor() {

    }
}
