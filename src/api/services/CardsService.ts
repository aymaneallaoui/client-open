/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddWidgetToDashboardPayloadSchema } from '../models/AddWidgetToDashboardPayloadSchema';
import type { CardSessionsSchema } from '../models/CardSessionsSchema';
import type { SearchCardsSchema } from '../models/SearchCardsSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CardsService {
    /**
     * Add Card To Dashboard
     * @param projectId
     * @param dashboardId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addCardToDashboardProjectIdDashboardsDashboardIdCardsPost(
        projectId: number,
        dashboardId: number,
        requestBody: AddWidgetToDashboardPayloadSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/dashboards/{dashboardId}/cards',
            path: {
                'projectId': projectId,
                'dashboardId': dashboardId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Try Card
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static tryCardProjectIdCardsTryPost(
        projectId: number,
        requestBody: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/cards/try',
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
     * Try Card Sessions
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static tryCardSessionsProjectIdCardsTrySessionsPost(
        projectId: number,
        requestBody: CardSessionsSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/cards/try/sessions',
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
     * Try Card Issues
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static tryCardIssuesProjectIdCardsTryIssuesPost(
        projectId: number,
        requestBody: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/cards/try/issues',
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
     * Get Cards
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getCardsProjectIdCardsGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/cards',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Card
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createCardProjectIdCardsPost(
        projectId: number,
        requestBody: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/cards',
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
     * Search Cards
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static searchCardsProjectIdCardsSearchPost(
        projectId: number,
        requestBody: SearchCardsSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/cards/search',
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
     * Get Card
     * @param projectId
     * @param metricId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getCardProjectIdCardsMetricIdGet(
        projectId: number,
        metricId: (number | string),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/cards/{metric_id}',
            path: {
                'projectId': projectId,
                'metric_id': metricId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Card Sessions
     * @param projectId
     * @param metricId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getCardSessionsProjectIdCardsMetricIdSessionsPost(
        projectId: number,
        metricId: number,
        requestBody: CardSessionsSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/cards/{metric_id}/sessions',
            path: {
                'projectId': projectId,
                'metric_id': metricId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Card Funnel Issues
     * @param projectId
     * @param metricId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getCardFunnelIssuesProjectIdCardsMetricIdIssuesPost(
        projectId: number,
        metricId: (number | string),
        requestBody: CardSessionsSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/cards/{metric_id}/issues',
            path: {
                'projectId': projectId,
                'metric_id': metricId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
