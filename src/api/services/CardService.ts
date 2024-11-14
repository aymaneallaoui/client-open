/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CardSessionsSchema } from '../models/CardSessionsSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CardService {
    /**
     * Get Card Chart
     * @param projectId
     * @param metricId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getCardChartProjectIdCardsMetricIdChartPost(
        projectId: number,
        metricId: number,
        requestBody: CardSessionsSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/cards/{metric_id}/chart',
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
