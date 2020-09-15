/**
 * @author WMXPY
 * @namespace Example
 * @description Example
 */

import { LOCALE, SudooFormat, SudooInternationalization } from "../src";

const i18n: SudooInternationalization = SudooInternationalization.create(LOCALE.ENGLISH_UNITED_STATES);
i18n.set(LOCALE.ENGLISH_UNITED_STATES, {
    simple: 'foo bar {}',
    named: 'foo bar {value}',
});

const formatter: SudooFormat = i18n.format(LOCALE.ENGLISH_UNITED_STATES);

console.log(formatter.get('simple', 2000));
console.log(formatter.get('named', {
    value: 2000,
}));
