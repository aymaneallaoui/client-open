/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AccountsService {
    /**
     * Get Limits
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getLimitsLimitsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/limits',
        });
    }
    /**
     * Get Account
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAccountAccountGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/account',
        });
    }
}
