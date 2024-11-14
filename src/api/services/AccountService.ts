/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EditAccountSchema } from '../models/EditAccountSchema';
import type { EditUserPasswordSchema } from '../models/EditUserPasswordSchema';
import type { ScopeSchema } from '../models/ScopeSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AccountService {
    /**
     * Generate New User Token
     * @returns any Successful Response
     * @throws ApiError
     */
    public static generateNewUserTokenAccountNewApiKeyGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/account/new_api_key',
        });
    }
    /**
     * Edit Account
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static editAccountAccountPost(
        requestBody: EditAccountSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/account',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Change Scope
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static changeScopeAccountScopePost(
        requestBody: ScopeSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/account/scope',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Change Client Password
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static changeClientPasswordAccountPasswordPost(
        requestBody: EditUserPasswordSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/account/password',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
