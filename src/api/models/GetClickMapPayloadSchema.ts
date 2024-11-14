/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HeatMapFilterSchema } from './HeatMapFilterSchema';
export type GetClickMapPayloadSchema = {
    startTimestamp?: number;
    endTimestamp?: number;
    url?: (string | null);
    filters?: Array<HeatMapFilterSchema>;
    clickRage?: boolean;
    operator?: GetClickMapPayloadSchema.operator;
};
export namespace GetClickMapPayloadSchema {
    export enum operator {
        IS = 'is',
        STARTS_WITH = 'startsWith',
        CONTAINS = 'contains',
        ENDS_WITH = 'endsWith',
    }
}

