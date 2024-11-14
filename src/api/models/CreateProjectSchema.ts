/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateProjectSchema = {
    name?: string;
    platform?: CreateProjectSchema.platform;
};
export namespace CreateProjectSchema {
    export enum platform {
        WEB = 'web',
        IOS = 'ios',
    }
}

