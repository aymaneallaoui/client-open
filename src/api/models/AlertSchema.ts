/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _AlertOptionSchema } from './_AlertOptionSchema';
import type { _AlertQuerySchema } from './_AlertQuerySchema';
import type { AlertDetectionMethod } from './AlertDetectionMethod';
import type { AlertDetectionType } from './AlertDetectionType';
export type AlertSchema = {
    name: string;
    detectionMethod: AlertDetectionMethod;
    change?: (AlertDetectionType | null);
    description?: (string | null);
    options: _AlertOptionSchema;
    query: _AlertQuerySchema;
};

