/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProjectSchema } from '../models/CreateProjectSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApiService {
    /**
     * Get User Sessions
     * @param projectKey
     * @param userId
     * @param startDate
     * @param endDate
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getUserSessionsV1ProjectKeyUsersUserIdSessionsGet(
        projectKey: string,
        userId: string,
        startDate?: number,
        endDate?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/{projectKey}/users/{userId}/sessions',
            path: {
                'projectKey': projectKey,
                'userId': userId,
            },
            query: {
                'start_date': startDate,
                'end_date': endDate,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Session Events
     * @param projectKey
     * @param sessionId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSessionEventsV1ProjectKeySessionsSessionIdEventsGet(
        projectKey: string,
        sessionId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/{projectKey}/sessions/{sessionId}/events',
            path: {
                'projectKey': projectKey,
                'sessionId': sessionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get User Details
     * @param projectKey
     * @param userId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getUserDetailsV1ProjectKeyUsersUserIdGet(
        projectKey: string,
        userId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/{projectKey}/users/{userId}',
            path: {
                'projectKey': projectKey,
                'userId': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Schedule To Delete User Data
     * @param projectKey
     * @param userId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static scheduleToDeleteUserDataV1ProjectKeyUsersUserIdDelete(
        projectKey: string,
        userId: string,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/{projectKey}/users/{userId}',
            path: {
                'projectKey': projectKey,
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Jobs
     * @param projectKey
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getJobsV1ProjectKeyJobsGet(
        projectKey: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/{projectKey}/jobs',
            path: {
                'projectKey': projectKey,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Job
     * @param projectKey
     * @param jobId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getJobV1ProjectKeyJobsJobIdGet(
        projectKey: string,
        jobId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/{projectKey}/jobs/{jobId}',
            path: {
                'projectKey': projectKey,
                'jobId': jobId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Cancel Job
     * @param projectKey
     * @param jobId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static cancelJobV1ProjectKeyJobsJobIdDelete(
        projectKey: string,
        jobId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/{projectKey}/jobs/{jobId}',
            path: {
                'projectKey': projectKey,
                'jobId': jobId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Projects
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getProjectsV1ProjectsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/projects',
        });
    }
    /**
     * Create Project
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createProjectV1ProjectsPost(
        requestBody: CreateProjectSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/projects',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Project
     * @param projectKey
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getProjectV1ProjectsProjectKeyGet(
        projectKey: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/projects/{projectKey}',
            path: {
                'projectKey': projectKey,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
