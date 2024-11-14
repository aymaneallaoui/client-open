/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SortOrderType } from './SortOrderType';
export type SearchCardsSchema = {
    limit?: number;
    page?: number;
    order?: SortOrderType;
    sharedOnly?: boolean;
    mineOnly?: boolean;
    query?: (string | null);
};

