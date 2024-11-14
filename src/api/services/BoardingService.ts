/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BoardingService {
    /**
     * Get Boarding State
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getBoardingStateBoardingGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/boarding',
        });
    }
    /**
     * Get Boarding State Installing
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getBoardingStateInstallingBoardingInstallingGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/boarding/installing',
        });
    }
    /**
     * Get Boarding State Identify Users
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getBoardingStateIdentifyUsersBoardingIdentifyUsersGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/boarding/identify-users',
        });
    }
    /**
     * Get Boarding State Manage Users
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getBoardingStateManageUsersBoardingManageUsersGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/boarding/manage-users',
        });
    }
    /**
     * Get Boarding State Integrations
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getBoardingStateIntegrationsBoardingIntegrationsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/boarding/integrations',
        });
    }
}
