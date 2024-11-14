/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProjectSchema } from '../models/CreateProjectSchema';
import type { GdprSchema } from '../models/GdprSchema';
import type { ProjectSettings } from '../models/ProjectSettings';
import type { SampleRateSchema } from '../models/SampleRateSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectsService {
    /**
     * Get Gdpr
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getGdprProjectIdGdprGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/gdpr',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Edit Gdpr
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static editGdprProjectIdGdprPost(
        projectId: number,
        requestBody: GdprSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/gdpr',
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
     * Get Capture Status
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getCaptureStatusProjectIdSampleRateGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/sample_rate',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Capture Status
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateCaptureStatusProjectIdSampleRatePost(
        projectId: number,
        requestBody: SampleRateSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/sample_rate',
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
     * Update Conditions
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateConditionsProjectIdConditionsPost(
        projectId: number,
        requestBody: ProjectSettings,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/conditions',
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
     * Get Conditions
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getConditionsProjectIdConditionsGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/conditions',
            path: {
                'projectId': projectId,
            },
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
    public static getProjectsProjectsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects',
        });
    }
    /**
     * Create Project
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createProjectProjectsPost(
        requestBody: CreateProjectSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/projects',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Project
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getProjectProjectsProjectIdGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects/{projectId}',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Edit Project
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static editProjectProjectsProjectIdPut(
        projectId: number,
        requestBody: CreateProjectSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/projects/{projectId}',
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
     * Delete Project
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteProjectProjectsProjectIdDelete(
        projectId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/projects/{projectId}',
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
}
