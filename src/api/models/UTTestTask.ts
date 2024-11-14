/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UTTestTask = {
    /**
     * The unique identifier of the task
     */
    taskId?: (number | null);
    /**
     * The unique identifier of the usability test
     */
    testId?: (number | null);
    /**
     * The title of the task
     */
    title: string;
    /**
     * A detailed description of the task
     */
    description?: (string | null);
    /**
     * Indicates if the user is allowed to type
     */
    allowTyping?: (boolean | null);
};

