/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SortOrderType } from './SortOrderType';
export type SearchNoteSchema = {
    limit?: number;
    page?: number;
    sort?: string;
    order?: SortOrderType;
    tags?: (Array<string> | null);
    sharedOnly?: boolean;
    mineOnly?: boolean;
};

