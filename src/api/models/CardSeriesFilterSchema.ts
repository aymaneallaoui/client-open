/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorStatus } from './ErrorStatus';
import type { SearchEventOrder } from './SearchEventOrder';
import type { SessionSearchEventSchema2 } from './SessionSearchEventSchema2';
import type { SessionSearchFilterSchema } from './SessionSearchFilterSchema';
import type { SortOrderType } from './SortOrderType';
export type CardSeriesFilterSchema = {
    limit?: number;
    page?: number;
    startTimestamp?: number;
    endTimestamp?: number;
    filters?: Array<(SessionSearchFilterSchema | SessionSearchEventSchema2)>;
    sort?: (string | null);
    order?: SortOrderType;
    eventsOrder?: (SearchEventOrder | null);
    groupByUser?: boolean;
    bookmarked?: boolean;
    density?: (number | null);
    status?: (ErrorStatus | null);
    query?: (string | null);
};

