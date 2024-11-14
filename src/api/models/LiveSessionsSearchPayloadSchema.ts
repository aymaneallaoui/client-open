/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LiveFilterType } from './LiveFilterType';
import type { LiveSessionSearchFilterSchema } from './LiveSessionSearchFilterSchema';
import type { SortOrderType } from './SortOrderType';
export type LiveSessionsSearchPayloadSchema = {
    limit?: number;
    page?: number;
    filters?: Array<LiveSessionSearchFilterSchema>;
    sort?: (LiveFilterType | string);
    order?: SortOrderType;
};

