/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Lazy Internationalization
 * @package Unit Test
 */

import { IETF_LOCALE } from "@sudoo/locale";
import Chance from "chance";
import { SudooFormat } from "../../src/format";
import { SudooLazyInternationalization } from "../../src/lazy-internationalization";

describe('Given a {LazyInternationalization} class', (): void => {

    const chance: Chance.Chance = new Chance('internationalization-lazy-internationalization');
    const locale: IETF_LOCALE = IETF_LOCALE.ENGLISH_UNITED_STATES;

    it('should be able to create a instance', (): void => {

        const intl: SudooLazyInternationalization = SudooLazyInternationalization.create(locale);

        expect(intl).toBeInstanceOf(SudooLazyInternationalization);
    });

    it('should be able to merge profile', (): void => {

        const intl: SudooLazyInternationalization = SudooLazyInternationalization.create(locale);

        intl.mergeLazyProfile(locale, Promise.resolve({
            [chance.string()]: chance.string(),
        }));
    });

    it('should be able to format', async (): Promise<void> => {

        const intl: SudooLazyInternationalization = SudooLazyInternationalization.create(locale);

        const key: string = chance.string();
        const value: string = chance.string();

        intl.mergeLazyProfile(locale, Promise.resolve({
            [key]: value,
        }));
        const format: SudooFormat = await intl.format(locale);
        expect(format).toBeInstanceOf(SudooFormat);

        expect(format.get(key)).toEqual(value);
    });

    it('should be able to format with async import', async (): Promise<void> => {

        const mockProfile = Promise.resolve((await import("../mock/mock-profile")).default);

        const intl: SudooLazyInternationalization<string> = SudooLazyInternationalization.create(locale);

        intl.mergeLazyProfile(locale, mockProfile as any);

        const format: SudooFormat = await intl.format(locale);
        expect(format).toBeInstanceOf(SudooFormat);

        expect(format.get("key1")).toEqual("value1");
        expect(format.get("key2")).toEqual("value2");
    });
});
