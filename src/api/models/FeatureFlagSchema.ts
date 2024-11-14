/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeatureFlagCondition } from './FeatureFlagCondition';
import type { FeatureFlagType } from './FeatureFlagType';
import type { FeatureFlagVariant } from './FeatureFlagVariant';
export type FeatureFlagSchema = {
    payload?: (string | null);
    flagKey: string;
    description?: (string | null);
    flagType?: FeatureFlagType;
    isPersist?: (boolean | null);
    isActive?: (boolean | null);
    conditions?: Array<FeatureFlagCondition>;
    variants?: Array<FeatureFlagVariant>;
};

