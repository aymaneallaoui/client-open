/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssuesService {
    /**
     * Issue Types
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static issueTypesProjectIdIssueTypesGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/issue_types',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * All Issue Types
     * @returns any Successful Response
     * @throws ApiError
     */
    public static allIssueTypesIssueTypesGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/issue_types',
        });
    }
}
