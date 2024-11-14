/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FilterType } from './FilterType';
import type { MathOperator } from './MathOperator';
import type { SearchEventOperator } from './SearchEventOperator';
export type FeatureFlagConditionFilterSchema = {
    isEvent?: boolean;
    type: FilterType;
    value?: Array<string>;
    operator: (SearchEventOperator | MathOperator);
    source?: (string | null);
    sourceOperator?: (SearchEventOperator | MathOperator | null);
};

