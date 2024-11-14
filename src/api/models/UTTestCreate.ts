/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StatusEnum } from './StatusEnum';
import type { UTTestTask } from './UTTestTask';
export type UTTestCreate = {
    /**
     * The title of the usability test
     */
    title: string;
    /**
     * The ID of the associated project
     */
    projectId?: (number | null);
    /**
     * The ID of the user who created the test
     */
    createdBy?: (number | null);
    /**
     * The starting path for the usability test
     */
    startingPath?: (string | null);
    /**
     * The current status of the usability test
     */
    status?: (StatusEnum | null);
    /**
     * Indicates if a microphone is required
     */
    requireMic?: boolean;
    /**
     * Indicates if a camera is required
     */
    requireCamera?: boolean;
    /**
     * A detailed description of the usability test
     */
    description?: (string | null);
    /**
     * Guidelines for the usability test
     */
    guidelines?: (string | null);
    /**
     * Conclusion message for the test participants
     */
    conclusionMessage?: (string | null);
    /**
     * Flag to indicate if the test is visible to the public
     */
    visibility?: boolean;
    /**
     * List of tasks for the usability test
     */
    tasks?: (Array<UTTestTask> | null);
};

