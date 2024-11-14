/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HeatMapFilterSchema } from './HeatMapFilterSchema';
export type GetHeatMapPayloadSchema = {
    startTimestamp?: number;
    endTimestamp?: number;
    url?: (string | null);
    filters?: Array<HeatMapFilterSchema>;
    clickRage?: boolean;
    operator?: GetHeatMapPayloadSchema.operator;
};
export namespace GetHeatMapPayloadSchema {
    export enum operator {
        IS = 'is',
        STARTS_WITH = 'startsWith',
        CONTAINS = 'contains',
        ENDS_WITH = 'endsWith',
    }
}

