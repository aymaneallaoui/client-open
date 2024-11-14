/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentAssignmentSchema } from '../models/CommentAssignmentSchema';
import type { SearchNoteSchema } from '../models/SearchNoteSchema';
import type { SessionNoteSchema } from '../models/SessionNoteSchema';
import type { SessionsSearchPayloadSchema } from '../models/SessionsSearchPayloadSchema';
import type { SessionUpdateNoteSchema } from '../models/SessionUpdateNoteSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SessionsService {
    /**
     * Check Recording Status
     * Check the recording status and sessions count for a given project ID.
     *
     * Args:
     * project_id (int): The ID of the project to check.
     *
     * Returns:
     * dict: A dictionary containing the recording status and sessions count.
     * The dictionary has the following structure:
     * {
         * "recording_status": int,   # The recording status:
         * # 0 - No sessions
         * # 1 - Processing
         * # 2 - Ready
         * "sessions_count": int      # The total count of sessions
         * }
         * @param projectId
         * @returns any Successful Response
         * @throws ApiError
         */
        public static checkRecordingStatusProjectIdCheckRecordingStatusGet(
            projectId: number,
        ): CancelablePromise<any> {
            return __request(OpenAPI, {
                method: 'GET',
                url: '/{project_id}/check-recording-status',
                path: {
                    'project_id': projectId,
                },
                errors: {
                    422: `Validation Error`,
                },
            });
        }
        /**
         * Sessions Search
         * @param projectId
         * @param requestBody
         * @returns any Successful Response
         * @throws ApiError
         */
        public static sessionsSearchProjectIdSessionsSearchPost(
            projectId: number,
            requestBody: SessionsSearchPayloadSchema,
        ): CancelablePromise<any> {
            return __request(OpenAPI, {
                method: 'POST',
                url: '/{projectId}/sessions/search',
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
         * Session Ids Search
         * @param projectId
         * @param requestBody
         * @returns any Successful Response
         * @throws ApiError
         */
        public static sessionIdsSearchProjectIdSessionsSearchIdsPost(
            projectId: number,
            requestBody: SessionsSearchPayloadSchema,
        ): CancelablePromise<any> {
            return __request(OpenAPI, {
                method: 'POST',
                url: '/{projectId}/sessions/search/ids',
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
         * Get First Mob File
         * @param projectId
         * @param sessionId
         * @returns any Successful Response
         * @throws ApiError
         */
        public static getFirstMobFileProjectIdSessionsSessionIdFirstMobGet(
            projectId: number,
            sessionId: (number | string),
        ): CancelablePromise<any> {
            return __request(OpenAPI, {
                method: 'GET',
                url: '/{projectId}/sessions/{sessionId}/first-mob',
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
         * Get Session Events
         * @param projectId
         * @param sessionId
         * @returns any Successful Response
         * @throws ApiError
         */
        public static getSessionEventsProjectIdSessionsSessionIdReplayGet(
            projectId: number,
            sessionId: (number | string),
        ): CancelablePromise<any> {
            return __request(OpenAPI, {
                method: 'GET',
                url: '/{projectId}/sessions/{sessionId}/replay',
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
         * Get Session Events
         * @param projectId
         * @param sessionId
         * @returns any Successful Response
         * @throws ApiError
         */
        public static getSessionEventsProjectIdSessionsSessionIdEventsGet(
            projectId: number,
            sessionId: (number | string),
        ): CancelablePromise<any> {
            return __request(OpenAPI, {
                method: 'GET',
                url: '/{projectId}/sessions/{sessionId}/events',
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
         * Get Error Trace
         * @param projectId
         * @param sessionId
         * @param errorId
         * @returns any Successful Response
         * @throws ApiError
         */
        public static getErrorTraceProjectIdSessionsSessionIdErrorsErrorIdSourcemapsGet(
            projectId: number,
            sessionId: number,
            errorId: string,
        ): CancelablePromise<any> {
            return __request(OpenAPI, {
                method: 'GET',
                url: '/{projectId}/sessions/{sessionId}/errors/{errorId}/sourcemaps',
                path: {
                    'projectId': projectId,
                    'sessionId': sessionId,
                    'errorId': errorId,
                },
                errors: {
                    422: `Validation Error`,
                },
            });
        }
        /**
         * Add Remove Favorite Session2
         * @param projectId
         * @param sessionId
         * @returns any Successful Response
         * @throws ApiError
         */
        public static addRemoveFavoriteSession2ProjectIdSessionsSessionIdFavoriteGet(
            projectId: number,
            sessionId: number,
        ): CancelablePromise<any> {
            return __request(OpenAPI, {
                method: 'GET',
                url: '/{projectId}/sessions/{sessionId}/favorite',
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
         * Assign Session
         * @param projectId
         * @param sessionId
         * @returns any Successful Response
         * @throws ApiError
         */
        public static assignSessionProjectIdSessionsSessionIdAssignGet(
            projectId: number,
            sessionId: any,
        ): CancelablePromise<any> {
            return __request(OpenAPI, {
                method: 'GET',
                url: '/{projectId}/sessions/{sessionId}/assign',
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
         * Assign Session
         * @param projectId
         * @param sessionId
         * @param issueId
         * @returns any Successful Response
         * @throws ApiError
         */
        public static assignSessionProjectIdSessionsSessionIdAssignIssueIdGet(
            projectId: number,
            sessionId: number,
            issueId: string,
        ): CancelablePromise<any> {
            return __request(OpenAPI, {
                method: 'GET',
                url: '/{projectId}/sessions/{sessionId}/assign/{issueId}',
                path: {
                    'projectId': projectId,
                    'sessionId': sessionId,
                    'issueId': issueId,
                },
                errors: {
                    422: `Validation Error`,
                },
            });
        }
        /**
         * Comment Assignment
         * @param projectId
         * @param sessionId
         * @param issueId
         * @param requestBody
         * @returns any Successful Response
         * @throws ApiError
         */
        public static commentAssignmentProjectIdSessionsSessionIdAssignIssueIdCommentPost(
            projectId: number,
            sessionId: number,
            issueId: string,
            requestBody: CommentAssignmentSchema,
        ): CancelablePromise<any> {
            return __request(OpenAPI, {
                method: 'POST',
                url: '/{projectId}/sessions/{sessionId}/assign/{issueId}/comment',
                path: {
                    'projectId': projectId,
                    'sessionId': sessionId,
                    'issueId': issueId,
                },
                body: requestBody,
                mediaType: 'application/json',
                errors: {
                    422: `Validation Error`,
                },
            });
        }
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
