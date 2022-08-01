import { useState, useEffect } from 'react';
import {getUserRequest} from "@site/src/services/authorization";
import getCookie from "@site/src/utils/getCookies";

export interface User {
    userId: number;
    userName: string;
    avatar: string;
}

export const useAuthorization = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const AUTH_TOKEN_PROPERTY = 'auth_token';
        const token = getCookie(AUTH_TOKEN_PROPERTY);

        if (token) {
            setAuthenticated(true);
            getUserRequest(token).then((response: User) => {
                setUser(response);
            }, (error) => {
                setAuthenticated(false);
            });
        }
    }, []);

    return [authenticated, user];
}
