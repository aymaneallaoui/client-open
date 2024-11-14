/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetClickMapPayloadSchema } from '../models/GetClickMapPayloadSchema';
import type { GetHeatMapPayloadSchema } from '../models/GetHeatMapPayloadSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class HeatmapsService {
    /**
     * Get Heatmaps By Url
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getHeatmapsByUrlProjectIdHeatmapsUrlPost(
        projectId: number,
        requestBody: GetHeatMapPayloadSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/heatmaps/url',
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
     * Get Heatmaps By Session Id Url
     * @param projectId
     * @param sessionId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getHeatmapsBySessionIdUrlProjectIdSessionsSessionIdHeatmapsPost(
        projectId: number,
        sessionId: number,
        requestBody: GetHeatMapPayloadSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/sessions/{sessionId}/heatmaps',
            path: {
                'projectId': projectId,
                'sessionId': sessionId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Clickmaps By Session Id Url
     * @param projectId
     * @param sessionId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getClickmapsBySessionIdUrlProjectIdSessionsSessionIdClickmapsPost(
        projectId: number,
        sessionId: number,
        requestBody: GetClickMapPayloadSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/sessions/{sessionId}/clickmaps',
            path: {
                'projectId': projectId,
                'sessionId': sessionId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
