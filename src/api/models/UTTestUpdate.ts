/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StatusEnum } from './StatusEnum';
import type { UTTestTask } from './UTTestTask';
export type UTTestUpdate = {
    /**
     * The updated title of the usability test
     */
    title?: (string | null);
    /**
     * The updated status of the usability test
     */
    status?: (StatusEnum | null);
    /**
     * The updated description of the usability test
     */
    description?: (string | null);
    /**
     * The updated starting path for the usability test
     */
    startingPath?: (string | null);
    /**
     * Indicates if a microphone is required
     */
    requireMic?: (boolean | null);
    /**
     * Indicates if a camera is required
     */
    requireCamera?: (boolean | null);
    /**
     * Updated guidelines for the usability test
     */
    guidelines?: (string | null);
    /**
     * Updated conclusion message for the test participants
     */
    conclusionMessage?: (string | null);
    /**
     * Flag to indicate if the test is visible to the public
     */
    visibility?: (boolean | null);
    /**
     * List of tasks for the usability test
     */
    tasks?: (Array<UTTestTask> | null);
};

