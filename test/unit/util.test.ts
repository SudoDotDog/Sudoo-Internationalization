/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Util
 * @package Unit Test
 */

import Chance from "chance";
import { RecordReplacement } from "../../src/declare";
import { fillMessage } from "../../src/util";

describe('Given [Utils] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('internationalization-util');

    it('should be able to fill simple message', (): void => {

        const message: string = chance.string();

        expect(fillMessage(message)).toEqual(message);
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

        expect(fillMessage(message, slot1, slot2)).toEqual(
            `${slots[0]}${slot1}${slots[1]}${slot2}${slots[2]}`,
        );
    });

    it('should be able to fill not string message', (): void => {

        const message: string = chance.string();
        const slot: Date = chance.date();

        expect(fillMessage(message + '{}', slot)).toEqual(
            `${message}${slot.toString()}`,
        );
    });

    it('should be able to fill object message', (): void => {

        const value: string = chance.string();
        const message: string = chance.string();
        const slot: RecordReplacement = {
            foo: value,
        };

        expect(fillMessage(message + '{foo}', slot)).toEqual(
            `${message}${value}`,
        );
    });

    it('should be able to fill combined message', (): void => {

        const value: string = chance.string();
        const innerValue: string = chance.string();
        const message: string = chance.string();
        const slot: RecordReplacement = {
            foo: value,
        };

        expect(fillMessage(message + '{}{foo}', slot, innerValue)).toEqual(
            `${message}${innerValue}${value}`,
        );
    });
});
