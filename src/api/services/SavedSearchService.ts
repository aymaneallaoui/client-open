/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SavedSearchSchema } from '../models/SavedSearchSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SavedSearchService {
    /**
     * Add Saved Search
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addSavedSearchProjectIdSavedSearchPost(
        projectId: number,
        requestBody: SavedSearchSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/saved_search',
            path: {
                'projectId': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Saved Searches
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSavedSearchesProjectIdSavedSearchGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/saved_search',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Saved Search
     * @param projectId
     * @param searchId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSavedSearchProjectIdSavedSearchSearchIdGet(
        projectId: number,
        searchId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/saved_search/{search_id}',
            path: {
                'projectId': projectId,
                'search_id': searchId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Saved Search
     * @param projectId
     * @param searchId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateSavedSearchProjectIdSavedSearchSearchIdPost(
        projectId: number,
        searchId: number,
        requestBody: SavedSearchSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/saved_search/{search_id}',
            path: {
                'projectId': projectId,
                'search_id': searchId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Saved Search
     * @param projectId
     * @param searchId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteSavedSearchProjectIdSavedSearchSearchIdDelete(
        projectId: number,
        searchId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{projectId}/saved_search/{search_id}',
            path: {
                'projectId': projectId,
                'search_id': searchId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
