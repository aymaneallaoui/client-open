/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchNoteSchema } from '../models/SearchNoteSchema';
import type { SessionNoteSchema } from '../models/SessionNoteSchema';
import type { SessionUpdateNoteSchema } from '../models/SessionUpdateNoteSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NotesService {
    /**
     * Create Note
     * @param projectId
     * @param sessionId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createNoteProjectIdSessionsSessionIdNotesPost(
        projectId: number,
        sessionId: number,
        requestBody: SessionNoteSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/sessions/{sessionId}/notes',
            path: {
                'projectId': projectId,
                'sessionId': sessionId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Session Notes
     * @param projectId
     * @param sessionId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSessionNotesProjectIdSessionsSessionIdNotesGet(
        projectId: number,
        sessionId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/sessions/{sessionId}/notes',
            path: {
                'projectId': projectId,
                'sessionId': sessionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Edit Note
     * @param projectId
     * @param noteId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static editNoteProjectIdNotesNoteIdPost(
        projectId: number,
        noteId: number,
        requestBody: SessionUpdateNoteSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/notes/{noteId}',
            path: {
                'projectId': projectId,
                'noteId': noteId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Note
     * @param projectId
     * @param noteId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteNoteProjectIdNotesNoteIdDelete(
        projectId: number,
        noteId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{projectId}/notes/{noteId}',
            path: {
                'projectId': projectId,
                'noteId': noteId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Share Note To Slack
     * @param projectId
     * @param noteId
     * @param webhookId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static shareNoteToSlackProjectIdNotesNoteIdSlackWebhookIdGet(
        projectId: number,
        noteId: number,
        webhookId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/notes/{noteId}/slack/{webhookId}',
            path: {
                'projectId': projectId,
                'noteId': noteId,
                'webhookId': webhookId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Share Note To Msteams
     * @param projectId
     * @param noteId
     * @param webhookId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static shareNoteToMsteamsProjectIdNotesNoteIdMsteamsWebhookIdGet(
        projectId: number,
        noteId: number,
        webhookId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/notes/{noteId}/msteams/{webhookId}',
            path: {
                'projectId': projectId,
                'noteId': noteId,
                'webhookId': webhookId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get All Notes
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllNotesProjectIdNotesPost(
        projectId: number,
        requestBody: SearchNoteSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/notes',
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
}
