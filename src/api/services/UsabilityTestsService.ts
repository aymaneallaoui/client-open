/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UTTestCreate } from '../models/UTTestCreate';
import type { UTTestSearch } from '../models/UTTestSearch';
import type { UTTestUpdate } from '../models/UTTestUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsabilityTestsService {
    /**
     * Search Ui Tests
     * Search for UT tests within a given project with pagination and optional sorting.
     *
     * - **projectId**: The unique identifier of the project to search within.
     * - **search**: The search parameters including the query, page, limit, sort_by, and sort_order.
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static searchUiTestsProjectIdUsabilityTestsSearchPost(
        projectId: number,
        requestBody: UTTestSearch,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/usability-tests/search',
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
     * Create Ut Test
     * Create a new UT test in the specified project.
     *
     * - **projectId**: The unique identifier of the project.
     * - **test_data**: The data for the new UT test.
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createUtTestProjectIdUsabilityTestsPost(
        projectId: number,
        requestBody: UTTestCreate,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/usability-tests',
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
     * Get Ut Test
     * Retrieve a specific UT test by its ID.
     *
     * - **projectId**: The unique identifier of the project.
     * - **test_id**: The unique identifier of the UT test.
     * @param projectId
     * @param testId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getUtTestProjectIdUsabilityTestsTestIdGet(
        projectId: number,
        testId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/usability-tests/{test_id}',
            path: {
                'projectId': projectId,
                'test_id': testId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Ut Test
     * Delete a specific UT test by its ID.
     *
     * - **projectId**: The unique identifier of the project.
     * - **test_id**: The unique identifier of the UT test to be deleted.
     * @param projectId
     * @param testId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteUtTestProjectIdUsabilityTestsTestIdDelete(
        projectId: number,
        testId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{projectId}/usability-tests/{test_id}',
            path: {
                'projectId': projectId,
                'test_id': testId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Ut Test
     * Update a specific UT test by its ID.
     *
     * - **project_id**: The unique identifier of the project.
     * - **test_id**: The unique identifier of the UT test to be updated.
     * - **test_update**: The updated data for the UT test.
     * @param projectId
     * @param testId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateUtTestProjectIdUsabilityTestsTestIdPut(
        projectId: number,
        testId: number,
        requestBody: UTTestUpdate,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{projectId}/usability-tests/{test_id}',
            path: {
                'projectId': projectId,
                'test_id': testId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Sessions
     * Get sessions related to a specific UT test.
     *
     * - **projectId**: The unique identifier of the project.
     * - **test_id**: The unique identifier of the UT test.
     * @param projectId
     * @param testId
     * @param page
     * @param limit
     * @param live
     * @param userId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSessionsProjectIdUsabilityTestsTestIdSessionsGet(
        projectId: number,
        testId: number,
        page: number = 1,
        limit: number = 10,
        live: boolean = false,
        userId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/usability-tests/{test_id}/sessions',
            path: {
                'projectId': projectId,
                'test_id': testId,
            },
            query: {
                'page': page,
                'limit': limit,
                'live': live,
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Responses
     * Get responses related to a specific UT test.
     *
     * - **project_id**: The unique identifier of the project.
     * - **test_id**: The unique identifier of the UT test.
     * @param projectId
     * @param testId
     * @param taskId
     * @param page
     * @param limit
     * @param query
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getResponsesProjectIdUsabilityTestsTestIdResponsesTaskIdGet(
        projectId: number,
        testId: number,
        taskId: number,
        page: number = 1,
        limit: number = 10,
        query?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/usability-tests/{test_id}/responses/{task_id}',
            path: {
                'projectId': projectId,
                'test_id': testId,
                'task_id': taskId,
            },
            query: {
                'page': page,
                'limit': limit,
                'query': query,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Statistics
     * Get statistics related to a specific UT test.
     *
     * :param test_id:
     * :return:
     * @param projectId
     * @param testId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getStatisticsProjectIdUsabilityTestsTestIdStatisticsGet(
        projectId: number,
        testId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/usability-tests/{test_id}/statistics',
            path: {
                'projectId': projectId,
                'test_id': testId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Task Statistics
     * Get statistics related to a specific UT test.
     *
     * :param test_id:
     * :return:
     * @param projectId
     * @param testId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getTaskStatisticsProjectIdUsabilityTestsTestIdTaskStatisticsGet(
        projectId: number,
        testId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/usability-tests/{test_id}/task-statistics',
            path: {
                'projectId': projectId,
                'test_id': testId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
