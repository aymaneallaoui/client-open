/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WeeklyReportConfigSchema } from '../models/WeeklyReportConfigSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WeeklyReportConfigService {
    /**
     * Get Weekly Report Config
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getWeeklyReportConfigConfigWeeklyReportGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/config/weekly_report',
        });
    }
    /**
     * Edit Weekly Report Config
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static editWeeklyReportConfigConfigWeeklyReportPost(
        requestBody: WeeklyReportConfigSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/config/weekly_report',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
