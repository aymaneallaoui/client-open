/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ForgetPasswordPayloadSchema } from '../models/ForgetPasswordPayloadSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ResetPasswordService {
    /**
     * Reset Password Handler
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static resetPasswordHandlerPasswordResetLinkPost(
        requestBody: ForgetPasswordPayloadSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/password/reset-link',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
