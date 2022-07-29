// @ts-ignore
import {CurrentUserServiceClient} from "../protos/monolith_grpc_web_pb";
// @ts-ignore
import {CurrentUserRequest} from "../protos/monolith_pb";

const API_ROOT = 'https://gitlocalize-staging.herokuapp.com/grpc';

export const getUserRequest = (token) => {
    const service = new CurrentUserServiceClient(API_ROOT, null, null);
    const currentUserRequest = new CurrentUserRequest();
    const metadata = {Authorization: `Bearer ${token}`};

    return new Promise((resolve: any, reject: any) => {
        service.getCurrentUser(currentUserRequest, metadata, (err, response) => {
            err ? reject({err}) : resolve(response.toObject());
        });
    })
};
