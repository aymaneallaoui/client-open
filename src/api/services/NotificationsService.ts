/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationsViewSchema } from '../models/NotificationsViewSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NotificationsService {
    /**
     * Get Notifications
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getNotificationsNotificationsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications',
        });
    }
    /**
     * Get Notifications Count
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getNotificationsCountNotificationsCountGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications/count',
        });
    }
    /**
     * View Notifications
     * @param notificationId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static viewNotificationsNotificationsNotificationIdViewGet(
        notificationId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications/{notificationId}/view',
            path: {
                'notificationId': notificationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Batch View Notifications
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static batchViewNotificationsNotificationsViewPost(
        requestBody: NotificationsViewSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notifications/view',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
