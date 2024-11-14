/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LoginService {
    /**
     * Logout User
     * @returns any Successful Response
     * @throws ApiError
     */
    public static logoutUserLogoutGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/logout',
        });
    }
    /**
     * Refresh Login
     * @returns any Successful Response
     * @throws ApiError
     */
    public static refreshLoginRefreshGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/refresh',
        });
    }
}
