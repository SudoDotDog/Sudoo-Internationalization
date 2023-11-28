/**
 * @author WMXPY
 * @namespace Internationalization
 * @description Declare
 */

export type BasicReplacement = string | number | boolean | Date;
export type RecordReplacement = Record<string, BasicReplacement>;
export type Replacement = BasicReplacement | RecordReplacement;

export type PROFILE<K extends string = string> = Record<K, string>;
