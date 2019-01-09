/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Format
 * @package Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { SudooFormat } from "../../src/format";

describe('Given a {Format} class', (): void => {

    const chance: Chance.Chance = new Chance('internationalization-format');

    it('should be able to create a instance', (): void => {

        const format: SudooFormat = SudooFormat.create({}, {});

        expect(format).to.be.instanceOf(SudooFormat);
    });

    it('should be able to get raw value from active profile', (): void => {

        const key: string = chance.string();
        const value: string = chance.string();

        const format: SudooFormat = SudooFormat.create({
            [key]: value,
        }, {});

        expect(format.raw(key)).to.be.equal(value);
    });

    it('should be able to get raw value from default profile', (): void => {

        const key: string = chance.string();
        const value: string = chance.string();

        const format: SudooFormat = SudooFormat.create({}, {
            [key]: value,
        });

        expect(format.raw(key)).to.be.equal(value);
    });

    it('should be able to throw error', (): void => {

        const key: string = chance.string();

        const format: SudooFormat = SudooFormat.create({}, {});

        const exec: () => void = () => format.raw(key);

        expect(exec).to.be.throw(`[Sudoo-Internationalization] undefined key: {${key}}`);
    });

    it('should be able to get raw parsed value', (): void => {

        const key: string = chance.string();
        const value: string = chance.string();

        const format: SudooFormat = SudooFormat.create({
            [key]: value,
        }, {});

        expect(format.get(key)).to.be.equal(value);
    });

    it('should be able to get single filled parsed value', (): void => {

        const key: string = chance.string();
        const value: string = chance.string();
        const placeholder: string = chance.string();

        const parsed: string = `${value} {}`;

        const format: SudooFormat = SudooFormat.create({
            [key]: parsed,
        }, {});

        expect(format.get(key, placeholder)).to.be.equal(`${value} ${placeholder}`);
    });
});
