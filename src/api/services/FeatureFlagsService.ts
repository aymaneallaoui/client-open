/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeatureFlagSchema } from '../models/FeatureFlagSchema';
import type { FeatureFlagStatus } from '../models/FeatureFlagStatus';
import type { SearchFlagsSchema } from '../models/SearchFlagsSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FeatureFlagsService {
    /**
     * Search Feature Flags
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static searchFeatureFlagsProjectIdFeatureFlagsSearchPost(
        projectId: number,
        requestBody: SearchFlagsSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{project_id}/feature-flags/search',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Feature Flag
     * @param projectId
     * @param featureFlagId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getFeatureFlagProjectIdFeatureFlagsFeatureFlagIdGet(
        projectId: number,
        featureFlagId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{project_id}/feature-flags/{feature_flag_id}',
            path: {
                'project_id': projectId,
                'feature_flag_id': featureFlagId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Feature Flag
     * @param projectId
     * @param featureFlagId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateFeatureFlagProjectIdFeatureFlagsFeatureFlagIdPut(
        projectId: number,
        featureFlagId: number,
        requestBody: FeatureFlagSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{project_id}/feature-flags/{feature_flag_id}',
            path: {
                'project_id': projectId,
                'feature_flag_id': featureFlagId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Feature Flag
     * @param projectId
     * @param featureFlagId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteFeatureFlagProjectIdFeatureFlagsFeatureFlagIdDelete(
        projectId: number,
        featureFlagId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{project_id}/feature-flags/{feature_flag_id}',
            path: {
                'project_id': projectId,
                'feature_flag_id': featureFlagId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Feature Flag
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addFeatureFlagProjectIdFeatureFlagsPost(
        projectId: number,
        requestBody: FeatureFlagSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{project_id}/feature-flags',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Feature Flag Status
     * @param projectId
     * @param featureFlagId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateFeatureFlagStatusProjectIdFeatureFlagsFeatureFlagIdStatusPost(
        projectId: number,
        featureFlagId: number,
        requestBody: FeatureFlagStatus,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{project_id}/feature-flags/{feature_flag_id}/status',
            path: {
                'project_id': projectId,
                'feature_flag_id': featureFlagId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
