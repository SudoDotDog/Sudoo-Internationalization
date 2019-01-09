/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Internationalization
 * @package Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { LOCALE } from "../../src/declare";
import { SudooInternationalization } from "../../src/internationalization";

describe('Given a {Internationalization} class', (): void => {

    const chance: Chance.Chance = new Chance('internationalization-internationalization');
    const locale: LOCALE = LOCALE.ENGLISH_AMERICA;

    it('should be able to create a instance', (): void => {

        const intl: SudooInternationalization = SudooInternationalization.create(locale);

        expect(intl).to.be.instanceOf(SudooInternationalization);
    });

    it('should be able to set profile', (): void => {

        const intl: SudooInternationalization = SudooInternationalization.create(locale);

        intl.set(locale, {
            [chance.string()]: chance.string(),
        });
        intl.set(locale, {
            [chance.string()]: chance.string(),
        });
        expect(intl.count(locale)).to.be.equal(1);
    });

    it('should be able to merge profile', (): void => {

        const intl: SudooInternationalization = SudooInternationalization.create(locale);

        intl.set(locale, {
            [chance.string()]: chance.string(),
        });
        intl.merge(locale, {
            [chance.string()]: chance.string(),
        });
        expect(intl.count(locale)).to.be.equal(2);
    });

    it('should be able to get format', (): void => {

        const intl: SudooInternationalization = SudooInternationalization.create(locale);

        intl.set(locale, {
            [chance.string()]: chance.string(),
        });
        expect(intl.format(locale)).to.be.lengthOf(1);
    });
});
