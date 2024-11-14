/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CardSeriesSchema } from './CardSeriesSchema';
import type { SessionSearchEventSchema2 } from './SessionSearchEventSchema2';
import type { SessionSearchFilterSchema } from './SessionSearchFilterSchema';
export type CardSessionsSchema = {
    limit?: number;
    page?: number;
    startTimestamp?: number;
    endTimestamp?: number;
    density?: number;
    series?: Array<CardSeriesSchema>;
    filters?: Array<(SessionSearchFilterSchema | SessionSearchEventSchema2)>;
    /**
     * Hide extra values
     */
    hideExcess?: (boolean | null);
};

