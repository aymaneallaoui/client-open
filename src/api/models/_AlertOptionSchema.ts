/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _AlertMessageSchema } from './_AlertMessageSchema';
export type _AlertOptionSchema = {
    message?: Array<_AlertMessageSchema>;
    currentPeriod: _AlertOptionSchema.currentPeriod;
    previousPeriod?: _AlertOptionSchema.previousPeriod;
    lastNotification?: (number | null);
    renotifyInterval?: (number | null);
};
export namespace _AlertOptionSchema {
    export enum currentPeriod {
        '_15' = 15,
        '_30' = 30,
        '_60' = 60,
        '_120' = 120,
        '_240' = 240,
        '_1440' = 1440,
    }
    export enum previousPeriod {
        '_15' = 15,
        '_30' = 30,
        '_60' = 60,
        '_120' = 120,
        '_240' = 240,
        '_1440' = 1440,
    }
}

