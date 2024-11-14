/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagCreate } from '../models/TagCreate';
import type { TagUpdate } from '../models/TagUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TagsService {
    /**
     * Tags Create
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static tagsCreateProjectIdTagsPost(
        projectId: number,
        requestBody: TagCreate,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/tags',
            path: {
                'projectId': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Tags List
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static tagsListProjectIdTagsGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/tags',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Tags Update
     * @param projectId
     * @param tagId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static tagsUpdateProjectIdTagsTagIdPut(
        projectId: number,
        tagId: number,
        requestBody: TagUpdate,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/{projectId}/tags/{tagId}',
            path: {
                'projectId': projectId,
                'tagId': tagId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Tags Delete
     * @param projectId
     * @param tagId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static tagsDeleteProjectIdTagsTagIdDelete(
        projectId: number,
        tagId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{projectId}/tags/{tagId}',
            path: {
                'projectId': projectId,
                'tagId': tagId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
