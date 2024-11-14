/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ReplayService {
    /**
     * Get First Mob File
     * @param projectId
     * @param sessionId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getFirstMobFileProjectIdSessionsSessionIdFirstMobGet(
        projectId: number,
        sessionId: (number | string),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/sessions/{sessionId}/first-mob',
            path: {
                'projectId': projectId,
                'sessionId': sessionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Session Events
     * @param projectId
     * @param sessionId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSessionEventsProjectIdSessionsSessionIdReplayGet(
        projectId: number,
        sessionId: (number | string),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/sessions/{sessionId}/replay',
            path: {
                'projectId': projectId,
                'sessionId': sessionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Session Events
     * @param projectId
     * @param sessionId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSessionEventsProjectIdSessionsSessionIdEventsGet(
        projectId: number,
        sessionId: (number | string),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/sessions/{sessionId}/events',
            path: {
                'projectId': projectId,
                'sessionId': sessionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
