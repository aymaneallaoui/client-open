/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EditPasswordByInvitationSchema } from '../models/EditPasswordByInvitationSchema';
import type { ModuleStatus } from '../models/ModuleStatus';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * Update User Module
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updateUserModuleUsersModulesPost(
        requestBody: ModuleStatus,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/modules',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Process Invitation Link
     * @param token
     * @returns any Successful Response
     * @throws ApiError
     */
    public static processInvitationLinkUsersInvitationGet(
        token: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/invitation',
            query: {
                'token': token,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Change Password By Invitation
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static changePasswordByInvitationPasswordResetPost(
        requestBody: EditPasswordByInvitationSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/password/reset',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
