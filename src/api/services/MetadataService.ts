/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MetadataSchema } from '../models/MetadataSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MetadataService {
    /**
     * Get Metadata
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getMetadataProjectIdMetadataGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/metadata',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Metadata
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addMetadataProjectIdMetadataPost(
        projectId: number,
        requestBody: MetadataSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/metadata',
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
     * Edit Metadata
     * @param projectId
     * @param index
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static editMetadataProjectIdMetadataIndexPost(
        projectId: number,
        index: number,
        requestBody: MetadataSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/metadata/{index}',
            path: {
                'projectId': projectId,
                'index': index,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Metadata
     * @param projectId
     * @param index
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteMetadataProjectIdMetadataIndexDelete(
        projectId: number,
        index: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{projectId}/metadata/{index}',
            path: {
                'projectId': projectId,
                'index': index,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Search Metadata
     * @param projectId
     * @param q
     * @param key
     * @returns any Successful Response
     * @throws ApiError
     */
    public static searchMetadataProjectIdMetadataSearchGet(
        projectId: number,
        q: string,
        key: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/metadata/search',
            path: {
                'projectId': projectId,
            },
            query: {
                'q': q,
                'key': key,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Search Sessions By Metadata
     * @param key
     * @param value
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static searchSessionsByMetadataMetadataSessionSearchGet(
        key: string,
        value: string,
        projectId?: (number | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/metadata/session_search',
            query: {
                'key': key,
                'value': value,
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
