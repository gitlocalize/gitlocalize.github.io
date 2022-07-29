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
        const token = getCookie(AUTH_TOKEN_PROPERTY) || `eyJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjEwMzEsImlhdCI6MTY1ODgyNTA3MX0.rFTOSAKRyVPMUtg8SDp2qi4n0gaf11kJ_Z0hqt3u0e0`;

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
