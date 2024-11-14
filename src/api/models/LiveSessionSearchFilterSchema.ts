/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LiveFilterType } from './LiveFilterType';
export type LiveSessionSearchFilterSchema = {
    value: (Array<string> | string);
    type: LiveFilterType;
    source?: (string | null);
    operator?: LiveSessionSearchFilterSchema.operator;
};
export namespace LiveSessionSearchFilterSchema {
    export enum operator {
        IS = 'is',
        CONTAINS = 'contains',
    }
}

