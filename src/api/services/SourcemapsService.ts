/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SourcemapUploadPayloadSchema } from '../models/SourcemapUploadPayloadSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SourcemapsService {
    /**
     * Sign Sourcemap For Upload
     * @param projectKey
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static signSourcemapForUploadProjectKeySourcemapsPut(
        projectKey: string,
        requestBody: SourcemapUploadPayloadSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{projectKey}/sourcemaps',
            path: {
                'projectKey': projectKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Sign Sourcemap For Upload
     * @param projectKey
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static signSourcemapForUploadProjectKeySourcemapsPut1(
        projectKey: string,
        requestBody: SourcemapUploadPayloadSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{projectKey}/sourcemaps/',
            path: {
                'projectKey': projectKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Error Trace
     * @param projectId
     * @param sessionId
     * @param errorId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getErrorTraceProjectIdSessionsSessionIdErrorsErrorIdSourcemapsGet(
        projectId: number,
        sessionId: number,
        errorId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/sessions/{sessionId}/errors/{errorId}/sourcemaps',
            path: {
                'projectId': projectId,
                'sessionId': sessionId,
                'errorId': errorId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
