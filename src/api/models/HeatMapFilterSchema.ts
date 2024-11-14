/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type HeatMapFilterSchema = {
    value?: Array<'click_rage' | 'dead_click'>;
    type: HeatMapFilterSchema.type;
    operator: HeatMapFilterSchema.operator;
};
export namespace HeatMapFilterSchema {
    export enum type {
        ISSUE = 'issue',
    }
    export enum operator {
        IS = 'is',
        _ = '=',
    }
}

