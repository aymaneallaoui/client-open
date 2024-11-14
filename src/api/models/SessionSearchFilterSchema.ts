/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorSource } from './ErrorSource';
import type { FilterType } from './FilterType';
import type { IssueType } from './IssueType';
import type { MathOperator } from './MathOperator';
import type { PlatformType } from './PlatformType';
import type { SearchEventOperator } from './SearchEventOperator';
export type SessionSearchFilterSchema = {
    isEvent?: boolean;
    value?: Array<(IssueType | PlatformType | number | string)>;
    type: FilterType;
    operator: (SearchEventOperator | MathOperator);
    source?: (ErrorSource | string | null);
};

