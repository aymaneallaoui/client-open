/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LiveSessionsSearchPayloadSchema } from '../models/LiveSessionsSearchPayloadSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AssistService {
    /**
     * Get Sessions Live
     * @param projectId
     * @param userId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSessionsLiveProjectIdAssistSessionsGet(
        projectId: number,
        userId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/assist/sessions',
            path: {
                'projectId': projectId,
            },
            query: {
                'userId': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Sessions Live
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static sessionsLiveProjectIdAssistSessionsPost(
        projectId: number,
        requestBody: LiveSessionsSearchPayloadSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/assist/sessions',
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
     * Get Live Session
     * @param projectId
     * @param sessionId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getLiveSessionProjectIdAssistSessionsSessionIdGet(
        projectId: number,
        sessionId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/assist/sessions/{sessionId}',
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
     * Get Live Session Replay File
     * @param projectId
     * @param sessionId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getLiveSessionReplayFileProjectIdUnprocessedSessionIdDomMobGet(
        projectId: number,
        sessionId: (number | string),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/unprocessed/{sessionId}/dom.mob',
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
     * Get Live Session Devtools File
     * @param projectId
     * @param sessionId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getLiveSessionDevtoolsFileProjectIdUnprocessedSessionIdDevtoolsMobGet(
        projectId: number,
        sessionId: (number | string),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/unprocessed/{sessionId}/devtools.mob',
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
