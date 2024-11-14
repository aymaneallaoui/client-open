/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CardSessionsSchema } from '../models/CardSessionsSchema';
import type { CreateDashboardSchema } from '../models/CreateDashboardSchema';
import type { EditDashboardSchema } from '../models/EditDashboardSchema';
import type { UpdateCardStatusSchema } from '../models/UpdateCardStatusSchema';
import type { UpdateWidgetPayloadSchema } from '../models/UpdateWidgetPayloadSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DashboardService {
    /**
     * Create Dashboards
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createDashboardsProjectIdDashboardsPost(
        projectId: number,
        requestBody: CreateDashboardSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/dashboards',
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
     * Get Dashboards
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getDashboardsProjectIdDashboardsGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/dashboards',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Dashboard
     * @param projectId
     * @param dashboardId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getDashboardProjectIdDashboardsDashboardIdGet(
        projectId: number,
        dashboardId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/dashboards/{dashboardId}',
            path: {
                'projectId': projectId,
                'dashboardId': dashboardId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Dashboard
     * @param projectId
     * @param dashboardId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateDashboardProjectIdDashboardsDashboardIdPut(
        projectId: number,
        dashboardId: number,
        requestBody: EditDashboardSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{projectId}/dashboards/{dashboardId}',
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
     * Delete Dashboard
     * @param projectId
     * @param dashboardId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteDashboardProjectIdDashboardsDashboardIdDelete(
        projectId: number,
        dashboardId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{projectId}/dashboards/{dashboardId}',
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
     * Pin Dashboard
     * @param projectId
     * @param dashboardId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static pinDashboardProjectIdDashboardsDashboardIdPinGet(
        projectId: number,
        dashboardId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/dashboards/{dashboardId}/pin',
            path: {
                'projectId': projectId,
                'dashboardId': dashboardId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Metric And Add To Dashboard
     * @param projectId
     * @param dashboardId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createMetricAndAddToDashboardProjectIdDashboardsDashboardIdMetricsPost(
        projectId: number,
        dashboardId: number,
        requestBody: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/dashboards/{dashboardId}/metrics',
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
     * Update Widget In Dashboard
     * @param projectId
     * @param dashboardId
     * @param widgetId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateWidgetInDashboardProjectIdDashboardsDashboardIdWidgetsWidgetIdPut(
        projectId: number,
        dashboardId: number,
        widgetId: number,
        requestBody: UpdateWidgetPayloadSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{projectId}/dashboards/{dashboardId}/widgets/{widgetId}',
            path: {
                'projectId': projectId,
                'dashboardId': dashboardId,
                'widgetId': widgetId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Remove Widget From Dashboard
     * @param projectId
     * @param dashboardId
     * @param widgetId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static removeWidgetFromDashboardProjectIdDashboardsDashboardIdWidgetsWidgetIdDelete(
        projectId: number,
        dashboardId: number,
        widgetId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{projectId}/dashboards/{dashboardId}/widgets/{widgetId}',
            path: {
                'projectId': projectId,
                'dashboardId': dashboardId,
                'widgetId': widgetId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Card
     * @param projectId
     * @param metricId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateCardProjectIdCardsMetricIdPost(
        projectId: number,
        metricId: number,
        requestBody: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/cards/{metric_id}',
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
     * Delete Card
     * @param projectId
     * @param metricId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteCardProjectIdCardsMetricIdDelete(
        projectId: number,
        metricId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{projectId}/cards/{metric_id}',
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
     * Get Metric Funnel Issue Sessions
     * @param projectId
     * @param metricId
     * @param issueId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getMetricFunnelIssueSessionsProjectIdCardsMetricIdIssuesIssueIdSessionsPost(
        projectId: number,
        metricId: number,
        issueId: string,
        requestBody: CardSessionsSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/cards/{metric_id}/issues/{issueId}/sessions',
            path: {
                'projectId': projectId,
                'metric_id': metricId,
                'issueId': issueId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Card Errors List
     * @param projectId
     * @param metricId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getCardErrorsListProjectIdCardsMetricIdErrorsPost(
        projectId: number,
        metricId: number,
        requestBody: CardSessionsSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/cards/{metric_id}/errors',
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
     * Update Card State
     * @param projectId
     * @param metricId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateCardStateProjectIdCardsMetricIdStatusPost(
        projectId: number,
        metricId: number,
        requestBody: UpdateCardStatusSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/cards/{metric_id}/status',
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
