/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserSignupSchema } from '../models/UserSignupSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SignupService {
    /**
     * Get All Signup
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllSignupSignupGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/signup',
        });
    }
    /**
     * Signup Handler
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static signupHandlerSignupPut(
        requestBody: UserSignupSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/signup',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Signup Handler
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static signupHandlerSignupPost(
        requestBody: UserSignupSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/signup',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
