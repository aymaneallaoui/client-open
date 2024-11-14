/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchEventOrder } from './SearchEventOrder';
import type { SessionSearchEventSchema2 } from './SessionSearchEventSchema2';
import type { SessionSearchFilterSchema } from './SessionSearchFilterSchema';
import type { SortOrderType } from './SortOrderType';
export type SessionsSearchPayloadSchema = {
    limit?: number;
    page?: number;
    startTimestamp?: number;
    endTimestamp?: number;
    filters?: Array<(SessionSearchFilterSchema | SessionSearchEventSchema2)>;
    sort?: string;
    order?: SortOrderType;
    eventsOrder?: (SearchEventOrder | null);
    groupByUser?: boolean;
    bookmarked?: boolean;
};

