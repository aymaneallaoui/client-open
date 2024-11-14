/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SessionSearchEventSchema2 } from './SessionSearchEventSchema2';
import type { SessionSearchFilterSchema } from './SessionSearchFilterSchema';
export type ProjectConditions = {
    conditionId?: (number | null);
    name: string;
    captureRate: number;
    filters?: Array<(SessionSearchFilterSchema | SessionSearchEventSchema2)>;
};

