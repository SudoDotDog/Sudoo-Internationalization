/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Index
 * @package Unit Test
 */

import { IETF_LOCALE } from "@sudoo/locale";
import { expect } from "chai";
import * as Chance from "chance";
import { SudooFormat } from "../../src/format";
import { SudooInternationalization } from "../../src/internationalization";

describe('General unit tests', (): void => {

    const chance: Chance.Chance = new Chance('internationalization-index');
    const US: IETF_LOCALE = IETF_LOCALE.ENGLISH_UNITED_STATES;
    const CN: IETF_LOCALE = IETF_LOCALE.CHINESE_SIMPLIFIED;

    it('should be able to get different locale', (): void => {

        const intl: SudooInternationalization = SudooInternationalization.create(US);
        intl.set(US, {
            [chance.string()]: chance.string(),
        });

        expect(intl.count(US)).to.be.equal(1);
        expect(intl.count(CN)).to.be.equal(0);
    });

    it('should be able to get active message', (): void => {

        const key: string = chance.string();
        const value: string = chance.string();

        const intl: SudooInternationalization = SudooInternationalization.create(US);
        intl.set(US, {
            [key]: value,
        });

        const format: SudooFormat = intl.format(US);
        expect(format.raw(key)).to.be.equal(value);
    });

    it('should be able to get default message', (): void => {

        const key: string = chance.string();
        const value: string = chance.string();

        const intl: SudooInternationalization = SudooInternationalization.create(US);
        intl.set(US, {
            [key]: value,
        });

        const format: SudooFormat = intl.format(CN);
        expect(format.raw(key)).to.be.equal(value);
    });
});
