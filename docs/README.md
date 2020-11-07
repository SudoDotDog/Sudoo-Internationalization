# Sudoo-Internationalization

[![Build Status](https://travis-ci.com/SudoDotDog/Sudoo-Internationalization.svg?branch=master)](https://travis-ci.com/SudoDotDog/Sudoo-Internationalization)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Internationalization/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Internationalization)
[![npm version](https://badge.fury.io/js/%40sudoo%2Finternationalization.svg)](https://badge.fury.io/js/%40sudoo%2Finternationalization)
[![downloads](https://img.shields.io/npm/dm/@sudoo/internationalization.svg)](https://www.npmjs.com/package/@sudoo/internationalization)

:bamboo: I18n

## Install

```sh
yarn add @sudoo/internationalization
# Or
npm install @sudoo/internationalization --save
```

## Usage

```ts
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
```

This document is working in progress, for all usage features, see source code.
