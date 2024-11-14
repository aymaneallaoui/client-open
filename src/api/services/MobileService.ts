/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MobileSignPayloadSchema } from '../models/MobileSignPayloadSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MobileService {
    /**
     * Mobile Signe
     * @param projectId
     * @param sessionId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static mobileSigneProjectIdMobileSessionIdUrlsPost(
        projectId: number,
        sessionId: number,
        requestBody: MobileSignPayloadSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/mobile/{sessionId}/urls',
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
