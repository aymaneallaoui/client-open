/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClickEventExtraOperator } from './ClickEventExtraOperator';
import type { EventType } from './EventType';
import type { MathOperator } from './MathOperator';
import type { PerformanceEventType } from './PerformanceEventType';
import type { RequestGraphqlFilterSchema } from './RequestGraphqlFilterSchema';
import type { SearchEventOperator } from './SearchEventOperator';
export type SessionSearchEventSchema2 = {
    isEvent?: boolean;
    value: Array<(number | string)>;
    type: (EventType | PerformanceEventType);
    operator: (SearchEventOperator | ClickEventExtraOperator);
    source?: null;
    sourceOperator?: (MathOperator | null);
    filters?: (Array<RequestGraphqlFilterSchema> | null);
};

