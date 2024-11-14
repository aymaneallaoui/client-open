/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ErrorsService {
    /**
     * Errors Get Details
     * @param projectId
     * @param errorId
     * @param density24
     * @param density30
     * @returns any Successful Response
     * @throws ApiError
     */
    public static errorsGetDetailsProjectIdErrorsErrorIdGet(
        projectId: number,
        errorId: string,
        density24: number = 24,
        density30: number = 30,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/errors/{errorId}',
            path: {
                'projectId': projectId,
                'errorId': errorId,
            },
            query: {
                'density24': density24,
                'density30': density30,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Errors Get Details Sourcemaps
     * @param projectId
     * @param errorId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static errorsGetDetailsSourcemapsProjectIdErrorsErrorIdSourcemapsGet(
        projectId: number,
        errorId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/errors/{errorId}/sourcemaps',
            path: {
                'projectId': projectId,
                'errorId': errorId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Remove Favorite Error
     * @param projectId
     * @param errorId
     * @param action
     * @param startDate
     * @param endDate
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addRemoveFavoriteErrorProjectIdErrorsErrorIdActionGet(
        projectId: number,
        errorId: string,
        action: string,
        startDate: number = 1730465158002,
        endDate: number = 1731069958002,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/errors/{errorId}/{action}',
            path: {
                'projectId': projectId,
                'errorId': errorId,
                'action': action,
            },
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
