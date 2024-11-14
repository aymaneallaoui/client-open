/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssignmentSchema } from '../models/AssignmentSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AssignmentService {
    /**
     * Get All Assignments
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllAssignmentsProjectIdAssignmentsGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/assignments',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Issue Assignment
     * @param projectId
     * @param sessionId
     * @param integrationProjectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createIssueAssignmentProjectIdSessionsSessionIdAssignProjectsIntegrationProjectIdPost(
        projectId: number,
        sessionId: number,
        integrationProjectId: any,
        requestBody: AssignmentSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/sessions/{sessionId}/assign/projects/{integrationProjectId}',
            path: {
                'projectId': projectId,
                'sessionId': sessionId,
                'integrationProjectId': integrationProjectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
