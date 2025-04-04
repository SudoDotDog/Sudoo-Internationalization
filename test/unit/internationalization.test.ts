/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Internationalization
 * @package Unit Test
 */

import { IETF_LOCALE } from "@sudoo/locale";
import Chance from "chance";
import { SudooInternationalization } from "../../src/internationalization";

describe('Given a {Internationalization} class', (): void => {

    const chance: Chance.Chance = new Chance('internationalization-internationalization');
    const locale: IETF_LOCALE = IETF_LOCALE.ENGLISH_UNITED_STATES;

    it('should be able to create a instance', (): void => {

        const intl: SudooInternationalization = SudooInternationalization.create(locale);

        expect(intl).toBeInstanceOf(SudooInternationalization);
    });

    it('should be able to set profile', (): void => {

        const intl: SudooInternationalization = SudooInternationalization.create(locale);

        intl.set(locale, {
            [chance.string()]: chance.string(),
        });
        intl.set(locale, {
            [chance.string()]: chance.string(),
        });
        expect(intl.count(locale)).toEqual(1);
    });

    it('should be able to merge profile', (): void => {

        const intl: SudooInternationalization = SudooInternationalization.create(locale);

        intl.set(locale, {
            [chance.string()]: chance.string(),
        });
        intl.merge(locale, {
            [chance.string()]: chance.string(),
        });
        expect(intl.count(locale)).toEqual(2);
    });

    it('should be able to get format', (): void => {

        const intl: SudooInternationalization = SudooInternationalization.create(locale);

        intl.set(locale, {
            [chance.string()]: chance.string(),
        });
        expect(intl.format(locale)).toHaveLength(1);
    });
});
