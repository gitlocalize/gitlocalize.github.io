import * as grpcWeb from 'grpc-web';

import * as monolith_pb from './monolith_pb';


export class DiscussionsServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getDiscussions(
    request: monolith_pb.DiscussionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: monolith_pb.DiscussionsResponse) => void
  ): grpcWeb.ClientReadableStream<monolith_pb.DiscussionsResponse>;

  addComment(
    request: monolith_pb.CommentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: monolith_pb.CommentThread) => void
  ): grpcWeb.ClientReadableStream<monolith_pb.CommentThread>;

  toggleDiscussionImportance(
    request: monolith_pb.DiscussionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: monolith_pb.CommentThread) => void
  ): grpcWeb.ClientReadableStream<monolith_pb.CommentThread>;

  deleteDiscussion(
    request: monolith_pb.DiscussionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: monolith_pb.CommentThread) => void
  ): grpcWeb.ClientReadableStream<monolith_pb.CommentThread>;

}

export class CurrentUserServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getCurrentUser(
    request: monolith_pb.CurrentUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: monolith_pb.CurrentUser) => void
  ): grpcWeb.ClientReadableStream<monolith_pb.CurrentUser>;

}

export class ResourceServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getResource(
    request: monolith_pb.GetResourceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: monolith_pb.GetResourceResponse) => void
  ): grpcWeb.ClientReadableStream<monolith_pb.GetResourceResponse>;

}

export class DiscussionsServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getDiscussions(
    request: monolith_pb.DiscussionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<monolith_pb.DiscussionsResponse>;

  addComment(
    request: monolith_pb.CommentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<monolith_pb.CommentThread>;

  toggleDiscussionImportance(
    request: monolith_pb.DiscussionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<monolith_pb.CommentThread>;

  deleteDiscussion(
    request: monolith_pb.DiscussionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<monolith_pb.CommentThread>;

}

export class CurrentUserServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getCurrentUser(
    request: monolith_pb.CurrentUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<monolith_pb.CurrentUser>;

}

export class ResourceServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getResource(
    request: monolith_pb.GetResourceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<monolith_pb.GetResourceResponse>;

}

