/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SpotService {
    /**
     * Logout Spot
     * @returns any Successful Response
     * @throws ApiError
     */
    public static logoutSpotSpotLogoutGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/spot/logout',
        });
    }
    /**
     * Refresh Spot Login
     * @returns any Successful Response
     * @throws ApiError
     */
    public static refreshSpotLoginSpotRefreshGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/spot/refresh',
        });
    }
    /**
     * Get Slack Channels
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSlackChannelsSpotIntegrationsSlackChannelsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/spot/integrations/slack/channels',
        });
    }
}
