/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebhookSchema } from '../models/WebhookSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebhooksService {
    /**
     * Get Webhooks
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getWebhooksWebhooksGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/webhooks',
        });
    }
    /**
     * Add Edit Webhook
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addEditWebhookWebhooksPut(
        requestBody: WebhookSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/webhooks',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Webhook
     * @param webhookId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteWebhookWebhooksWebhookIdDelete(
        webhookId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/webhooks/{webhookId}',
            path: {
                'webhookId': webhookId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
