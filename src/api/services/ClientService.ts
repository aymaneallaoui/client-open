/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateMemberSchema } from '../models/CreateMemberSchema';
import type { EditMemberSchema } from '../models/EditMemberSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ClientService {
    /**
     * Generate New Tenant Token
     * @returns any Successful Response
     * @throws ApiError
     */
    public static generateNewTenantTokenClientNewApiKeyGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/client/new_api_key',
        });
    }
    /**
     * Get Members
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getMembersClientMembersGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/client/members',
        });
    }
    /**
     * Add Member
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addMemberClientMembersPost(
        requestBody: CreateMemberSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/client/members',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Reset Reinvite Member
     * @param memberId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static resetReinviteMemberClientMembersMemberIdResetGet(
        memberId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/client/members/{memberId}/reset',
            path: {
                'memberId': memberId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Member
     * @param memberId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteMemberClientMembersMemberIdDelete(
        memberId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/client/members/{memberId}',
            path: {
                'memberId': memberId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Edit Member
     * @param memberId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static editMemberClientMembersMemberIdPut(
        memberId: number,
        requestBody: EditMemberSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/client/members/{memberId}',
            path: {
                'memberId': memberId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
