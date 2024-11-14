/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UTTestSearch = {
    /**
     * Search query for the UT tests
     */
    query?: (string | null);
    /**
     * Page number of the results
     */
    page?: (number | null);
    /**
     * Number of results per page
     */
    limit?: (number | null);
    /**
     * Field to sort by
     */
    sortBy?: (string | null);
    /**
     * Sort order: 'asc' or 'desc'
     */
    sortOrder?: (string | null);
    /**
     * Flag to indicate if the test is active
     */
    isActive?: (boolean | null);
    /**
     * The ID of the user who created the test
     */
    userId?: (number | null);
};

