/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FetchFilterType } from './FetchFilterType';
import type { GraphqlFilterType } from './GraphqlFilterType';
import type { MathOperator } from './MathOperator';
import type { SearchEventOperator } from './SearchEventOperator';
export type RequestGraphqlFilterSchema = {
    type: (FetchFilterType | GraphqlFilterType);
    value: Array<(number | string)>;
    operator: (SearchEventOperator | MathOperator);
};

