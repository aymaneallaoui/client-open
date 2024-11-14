import {
    AuthenticationService,
    SessionsSearchPayloadSchema,
    SessionsService,
    UserLoginSchema
} from './api';

import { OpenAPI } from './api';

OpenAPI.BASE = 'https://akera/v1';
OpenAPI.TOKEN = 'your-api-token';

async function example() {
    try {

        const loginData: UserLoginSchema = {
            email: 'ayamne@something.com',
            password: 'password123'
        };
        const authResponse = await AuthenticationService.loginUserLoginPost(loginData);
        console.log('Login successful:', authResponse);


        const searchParams: SessionsSearchPayloadSchema = {
            filters: [],

        };
        const sessions = await SessionsService.sessionsSearchProjectIdSessionsSearchPost(435345, searchParams);
        console.log('Sessions found:', sessions);

    } catch (error) {
        if (error instanceof Error) {
            console.error('API Error:', error.message);
        }
    }
}

example();
