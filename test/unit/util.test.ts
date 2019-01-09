/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Util
 * @package Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { fillMessage } from "../../src/util";

describe('Given [Utils] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('internationalization-util');

    it('should be able to fill simple message', (): void => {

        const message: string = chance.string();

        expect(fillMessage(message)).to.be.equal(message);
    });

    it('should be able to fill complex message', (): void => {

        const slots: string[] = [
            chance.string(),
            chance.string(),
            chance.string(),
        ];
        const slot1: string = chance.string();
        const slot2: string = chance.string();
        const message: string = slots.join('{}');

        expect(fillMessage(message, slot1, slot2)).to.be.equal(
            `${slots[0]}${slot1}${slots[1]}${slot2}${slots[2]}`,
        );
    });

    it('should be able to fill not string message', (): void => {

        const message: string = chance.string();
        const slot: Date = chance.date();

        expect(fillMessage(message + '{}', slot)).to.be.equal(
            `${message}${slot.toString()}`,
        );
    });

    it('should be able to fill not object message', (): void => {

        const emptyObject: any = Object.create(null);
        const message: string = chance.string();

        expect(fillMessage(message + '{}', emptyObject)).to.be.equal(
            `${message}object`,
        );
    });
});
