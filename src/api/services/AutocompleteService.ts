/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventType } from '../models/EventType';
import type { FetchFilterType } from '../models/FetchFilterType';
import type { FilterType } from '../models/FilterType';
import type { GraphqlFilterType } from '../models/GraphqlFilterType';
import type { PerformanceEventType } from '../models/PerformanceEventType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AutocompleteService {
    /**
     * Events Search
     * @param projectId
     * @param q
     * @param type
     * @param key
     * @param source
     * @param live
     * @returns any Successful Response
     * @throws ApiError
     */
    public static eventsSearchProjectIdAutocompleteGet(
        projectId: number,
        q?: (string | null),
        type?: (FilterType | EventType | PerformanceEventType | FetchFilterType | GraphqlFilterType | string),
        key?: string,
        source?: string,
        live: boolean = false,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{projectId}/autocomplete',
            path: {
                'projectId': projectId,
            },
            query: {
                'q': q,
                'type': type,
                'key': key,
                'source': source,
                'live': live,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
