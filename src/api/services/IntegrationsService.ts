/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddCollaborationSchema } from '../models/AddCollaborationSchema';
import type { EditCollaborationSchema } from '../models/EditCollaborationSchema';
import type { IntegartionStackdriverSchema } from '../models/IntegartionStackdriverSchema';
import type { IntegrationBugsnagBasicSchema } from '../models/IntegrationBugsnagBasicSchema';
import type { IntegrationBugsnagSchema } from '../models/IntegrationBugsnagSchema';
import type { IntegrationCloudwatchBasicSchema } from '../models/IntegrationCloudwatchBasicSchema';
import type { IntegrationCloudwatchSchema } from '../models/IntegrationCloudwatchSchema';
import type { IntegrationDatadogSchema } from '../models/IntegrationDatadogSchema';
import type { IntegrationElasticsearchSchema } from '../models/IntegrationElasticsearchSchema';
import type { IntegrationElasticsearchTestSchema } from '../models/IntegrationElasticsearchTestSchema';
import type { IntegrationNewrelicSchema } from '../models/IntegrationNewrelicSchema';
import type { IntegrationNotificationSchema } from '../models/IntegrationNotificationSchema';
import type { IntegrationRollbarSchema } from '../models/IntegrationRollbarSchema';
import type { IntegrationSentrySchema } from '../models/IntegrationSentrySchema';
import type { IntegrationSumologicSchema } from '../models/IntegrationSumologicSchema';
import type { IssueTrackingGithubSchema } from '../models/IssueTrackingGithubSchema';
import type { IssueTrackingJiraSchema } from '../models/IssueTrackingJiraSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IntegrationsService {
    /**
     * Get Integrations Status
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getIntegrationsStatusProjectIdIntegrationsGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/integrations',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Integration Notify
     * @param projectId
     * @param integration
     * @param webhookId
     * @param source
     * @param sourceId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static integrationNotifyProjectIdIntegrationsIntegrationNotifyWebhookIdSourceSourceIdPost(
        projectId: number,
        integration: string,
        webhookId: number,
        source: string,
        sourceId: string,
        requestBody: IntegrationNotificationSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/integrations/{integration}/notify/{webhookId}/{source}/{sourceId}',
            path: {
                'projectId': projectId,
                'integration': integration,
                'webhookId': webhookId,
                'source': source,
                'sourceId': sourceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get All Sentry
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllSentryIntegrationsSentryGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/sentry',
        });
    }
    /**
     * Get Sentry
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSentryProjectIdIntegrationsSentryGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/integrations/sentry',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Edit Sentry
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addEditSentryProjectIdIntegrationsSentryPost(
        projectId: number,
        requestBody: IntegrationSentrySchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/integrations/sentry',
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
     * Delete Sentry
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteSentryProjectIdIntegrationsSentryDelete(
        projectId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{projectId}/integrations/sentry',
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
     * Proxy Sentry
     * @param projectId
     * @param eventId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static proxySentryProjectIdIntegrationsSentryEventsEventIdGet(
        projectId: number,
        eventId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/integrations/sentry/events/{eventId}',
            path: {
                'projectId': projectId,
                'eventId': eventId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get All Datadog
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllDatadogIntegrationsDatadogGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/datadog',
        });
    }
    /**
     * Get Datadog
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getDatadogProjectIdIntegrationsDatadogGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/integrations/datadog',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Edit Datadog
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addEditDatadogProjectIdIntegrationsDatadogPost(
        projectId: number,
        requestBody: IntegrationDatadogSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/integrations/datadog',
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
     * Delete Datadog
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteDatadogProjectIdIntegrationsDatadogDelete(
        projectId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{projectId}/integrations/datadog',
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
     * Get All Stackdriver
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllStackdriverIntegrationsStackdriverGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/stackdriver',
        });
    }
    /**
     * Get Stackdriver
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getStackdriverProjectIdIntegrationsStackdriverGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/integrations/stackdriver',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Edit Stackdriver
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addEditStackdriverProjectIdIntegrationsStackdriverPost(
        projectId: number,
        requestBody: IntegartionStackdriverSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/integrations/stackdriver',
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
     * Delete Stackdriver
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteStackdriverProjectIdIntegrationsStackdriverDelete(
        projectId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{projectId}/integrations/stackdriver',
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
     * Get All Newrelic
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllNewrelicIntegrationsNewrelicGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/newrelic',
        });
    }
    /**
     * Get Newrelic
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getNewrelicProjectIdIntegrationsNewrelicGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/integrations/newrelic',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Edit Newrelic
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addEditNewrelicProjectIdIntegrationsNewrelicPost(
        projectId: number,
        requestBody: IntegrationNewrelicSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/integrations/newrelic',
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
     * Delete Newrelic
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteNewrelicProjectIdIntegrationsNewrelicDelete(
        projectId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{projectId}/integrations/newrelic',
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
     * Get All Rollbar
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllRollbarIntegrationsRollbarGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/rollbar',
        });
    }
    /**
     * Get Rollbar
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getRollbarProjectIdIntegrationsRollbarGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/integrations/rollbar',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Edit Rollbar
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addEditRollbarProjectIdIntegrationsRollbarPost(
        projectId: number,
        requestBody: IntegrationRollbarSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/integrations/rollbar',
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
     * Delete Datadog
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteDatadogProjectIdIntegrationsRollbarDelete(
        projectId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{projectId}/integrations/rollbar',
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
     * List Projects Bugsnag
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static listProjectsBugsnagIntegrationsBugsnagListProjectsPost(
        requestBody: IntegrationBugsnagBasicSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/integrations/bugsnag/list_projects',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get All Bugsnag
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllBugsnagIntegrationsBugsnagGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/bugsnag',
        });
    }
    /**
     * Get Bugsnag
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getBugsnagProjectIdIntegrationsBugsnagGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/integrations/bugsnag',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Edit Bugsnag
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addEditBugsnagProjectIdIntegrationsBugsnagPost(
        projectId: number,
        requestBody: IntegrationBugsnagSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/integrations/bugsnag',
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
     * Delete Bugsnag
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteBugsnagProjectIdIntegrationsBugsnagDelete(
        projectId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{projectId}/integrations/bugsnag',
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
     * List Groups Cloudwatch
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static listGroupsCloudwatchIntegrationsCloudwatchListGroupsPost(
        requestBody: IntegrationCloudwatchBasicSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/integrations/cloudwatch/list_groups',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get All Cloudwatch
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllCloudwatchIntegrationsCloudwatchGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/cloudwatch',
        });
    }
    /**
     * Get Cloudwatch
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getCloudwatchProjectIdIntegrationsCloudwatchGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/integrations/cloudwatch',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Edit Cloudwatch
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addEditCloudwatchProjectIdIntegrationsCloudwatchPost(
        projectId: number,
        requestBody: IntegrationCloudwatchSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/integrations/cloudwatch',
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
     * Delete Cloudwatch
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteCloudwatchProjectIdIntegrationsCloudwatchDelete(
        projectId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{projectId}/integrations/cloudwatch',
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
     * Get All Elasticsearch
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllElasticsearchIntegrationsElasticsearchGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/elasticsearch',
        });
    }
    /**
     * Get Elasticsearch
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getElasticsearchProjectIdIntegrationsElasticsearchGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/integrations/elasticsearch',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Edit Elasticsearch
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addEditElasticsearchProjectIdIntegrationsElasticsearchPost(
        projectId: number,
        requestBody: IntegrationElasticsearchSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/integrations/elasticsearch',
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
     * Delete Elasticsearch
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteElasticsearchProjectIdIntegrationsElasticsearchDelete(
        projectId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{projectId}/integrations/elasticsearch',
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
     * Test Elasticsearch Connection
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static testElasticsearchConnectionIntegrationsElasticsearchTestPost(
        requestBody: IntegrationElasticsearchTestSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/integrations/elasticsearch/test',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get All Sumologic
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllSumologicIntegrationsSumologicGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/sumologic',
        });
    }
    /**
     * Get Sumologic
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSumologicProjectIdIntegrationsSumologicGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/integrations/sumologic',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Edit Sumologic
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addEditSumologicProjectIdIntegrationsSumologicPost(
        projectId: number,
        requestBody: IntegrationSumologicSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{projectId}/integrations/sumologic',
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
     * Delete Sumologic
     * @param projectId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteSumologicProjectIdIntegrationsSumologicDelete(
        projectId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/{projectId}/integrations/sumologic',
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
     * Get Integration Status
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getIntegrationStatusIntegrationsIssuesGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/issues',
        });
    }
    /**
     * Delete Default Issue Tracking Tool
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteDefaultIssueTrackingToolIntegrationsIssuesDelete(
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/integrations/issues',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Integration Status Jira
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getIntegrationStatusJiraIntegrationsJiraGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/jira',
        });
    }
    /**
     * Add Edit Jira Cloud
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addEditJiraCloudIntegrationsJiraPost(
        requestBody: IssueTrackingJiraSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/integrations/jira',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Jira Cloud
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteJiraCloudIntegrationsJiraDelete(
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/integrations/jira',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Integration Status Github
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getIntegrationStatusGithubIntegrationsGithubGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/github',
        });
    }
    /**
     * Add Edit Github
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addEditGithubIntegrationsGithubPost(
        requestBody: IssueTrackingGithubSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/integrations/github',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Github
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteGithubIntegrationsGithubDelete(
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/integrations/github',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get All Issue Tracking Projects
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getAllIssueTrackingProjectsIntegrationsIssuesListProjectsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/issues/list_projects',
        });
    }
    /**
     * Get Integration Metadata
     * @param integrationProjectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getIntegrationMetadataIntegrationsIssuesIntegrationProjectIdGet(
        integrationProjectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/issues/{integrationProjectId}',
            path: {
                'integrationProjectId': integrationProjectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Search Integrations
     * @param projectId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static searchIntegrationsProjectIdIntegrationSourcesGet(
        projectId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/integration/sources',
            path: {
                'projectId': projectId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Slack Channels
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSlackChannelsIntegrationsSlackChannelsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/slack/channels',
        });
    }
    /**
     * Get Slack Webhook
     * @param integrationId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSlackWebhookIntegrationsSlackIntegrationIdGet(
        integrationId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/slack/{integrationId}',
            path: {
                'integrationId': integrationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Slack Integration
     * @param integrationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteSlackIntegrationIntegrationsSlackIntegrationIdDelete(
        integrationId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/integrations/slack/{integrationId}',
            path: {
                'integrationId': integrationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Edit Slack Integration
     * @param integrationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static editSlackIntegrationIntegrationsSlackIntegrationIdPost(
        integrationId: number,
        requestBody: EditCollaborationSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/integrations/slack/{integrationId}',
            path: {
                'integrationId': integrationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Msteams Channels
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getMsteamsChannelsIntegrationsMsteamsChannelsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/integrations/msteams/channels',
        });
    }
    /**
     * Add Msteams Integration
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addMsteamsIntegrationIntegrationsMsteamsPost(
        requestBody: AddCollaborationSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/integrations/msteams',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Edit Msteams Integration
     * @param webhookId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static editMsteamsIntegrationIntegrationsMsteamsWebhookIdPost(
        webhookId: number,
        requestBody: EditCollaborationSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/integrations/msteams/{webhookId}',
            path: {
                'webhookId': webhookId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Msteams Integration
     * @param webhookId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteMsteamsIntegrationIntegrationsMsteamsWebhookIdDelete(
        webhookId: number,
        requestBody?: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/integrations/msteams/{webhookId}',
            path: {
                'webhookId': webhookId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Slack Integration
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addSlackIntegrationIntegrationsSlackPut(
        requestBody: AddCollaborationSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/integrations/slack',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Slack Integration
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addSlackIntegrationIntegrationsSlackPost(
        requestBody: AddCollaborationSchema,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/integrations/slack',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Slack Channels
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSlackChannelsSpotIntegrationsSlackChannelsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/spot/integrations/slack/channels',
        });
    }
}
