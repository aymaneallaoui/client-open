/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlertSchema } from '../models/AlertSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AlertsService {
    /**
     * Create Alert
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createAlertProjectIdAlertsPost(
        projectId: number,
        requestBody: AlertSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/alerts',
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
     * Get All Alerts
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllAlertsProjectIdAlertsGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/alerts',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Alerts Triggers
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAlertsTriggersProjectIdAlertsTriggersGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/alerts/triggers',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Alert
     * @param projectId
     * @param alertId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAlertProjectIdAlertsAlertIdGet(
        projectId: number,
        alertId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/alerts/{alertId}',
            path: {
                'projectId': projectId,
                'alertId': alertId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Alert
     * @param projectId
     * @param alertId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateAlertProjectIdAlertsAlertIdPost(
        projectId: number,
        alertId: number,
        requestBody: AlertSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/alerts/{alertId}',
            path: {
                'projectId': projectId,
                'alertId': alertId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Alert
     * @param projectId
     * @param alertId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteAlertProjectIdAlertsAlertIdDelete(
        projectId: number,
        alertId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{projectId}/alerts/{alertId}',
            path: {
                'projectId': projectId,
                'alertId': alertId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
