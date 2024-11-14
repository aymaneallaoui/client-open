/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentAssignmentSchema } from '../models/CommentAssignmentSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueTrackingService {
    /**
     * Assign Session
     * @param projectId
     * @param sessionId
     * @param issueId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static assignSessionProjectIdSessionsSessionIdAssignIssueIdGet(
        projectId: number,
        sessionId: number,
        issueId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/sessions/{sessionId}/assign/{issueId}',
            path: {
                'projectId': projectId,
                'sessionId': sessionId,
                'issueId': issueId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Comment Assignment
     * @param projectId
     * @param sessionId
     * @param issueId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static commentAssignmentProjectIdSessionsSessionIdAssignIssueIdCommentPost(
        projectId: number,
        sessionId: number,
        issueId: string,
        requestBody: CommentAssignmentSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/sessions/{sessionId}/assign/{issueId}/comment',
            path: {
                'projectId': projectId,
                'sessionId': sessionId,
                'issueId': issueId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
