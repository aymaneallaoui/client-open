/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeatureFlagConditionFilterSchema } from './FeatureFlagConditionFilterSchema';
export type FeatureFlagCondition = {
    conditionId?: (number | null);
    name: string;
    rolloutPercentage?: (number | null);
    filters?: Array<FeatureFlagConditionFilterSchema>;
};

