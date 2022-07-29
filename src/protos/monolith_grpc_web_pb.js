/**
 * @fileoverview gRPC-Web generated client stub for api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.api = require('./monolith_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.DiscussionsServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.DiscussionsServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DiscussionsRequest,
 *   !proto.api.DiscussionsResponse>}
 */
const methodDescriptor_DiscussionsService_GetDiscussions = new grpc.web.MethodDescriptor(
  '/api.DiscussionsService/GetDiscussions',
  grpc.web.MethodType.UNARY,
  proto.api.DiscussionsRequest,
  proto.api.DiscussionsResponse,
  /**
   * @param {!proto.api.DiscussionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.DiscussionsResponse.deserializeBinary
);


/**
 * @param {!proto.api.DiscussionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.DiscussionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.DiscussionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.DiscussionsServiceClient.prototype.getDiscussions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.DiscussionsService/GetDiscussions',
      request,
      metadata || {},
      methodDescriptor_DiscussionsService_GetDiscussions,
      callback);
};


/**
 * @param {!proto.api.DiscussionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.DiscussionsResponse>}
 *     Promise that resolves to the response
 */
proto.api.DiscussionsServicePromiseClient.prototype.getDiscussions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.DiscussionsService/GetDiscussions',
      request,
      metadata || {},
      methodDescriptor_DiscussionsService_GetDiscussions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.CommentRequest,
 *   !proto.api.CommentThread>}
 */
const methodDescriptor_DiscussionsService_AddComment = new grpc.web.MethodDescriptor(
  '/api.DiscussionsService/AddComment',
  grpc.web.MethodType.UNARY,
  proto.api.CommentRequest,
  proto.api.CommentThread,
  /**
   * @param {!proto.api.CommentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.CommentThread.deserializeBinary
);


/**
 * @param {!proto.api.CommentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.CommentThread)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.CommentThread>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.DiscussionsServiceClient.prototype.addComment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.DiscussionsService/AddComment',
      request,
      metadata || {},
      methodDescriptor_DiscussionsService_AddComment,
      callback);
};


/**
 * @param {!proto.api.CommentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.CommentThread>}
 *     Promise that resolves to the response
 */
proto.api.DiscussionsServicePromiseClient.prototype.addComment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.DiscussionsService/AddComment',
      request,
      metadata || {},
      methodDescriptor_DiscussionsService_AddComment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DiscussionRequest,
 *   !proto.api.CommentThread>}
 */
const methodDescriptor_DiscussionsService_ToggleDiscussionImportance = new grpc.web.MethodDescriptor(
  '/api.DiscussionsService/ToggleDiscussionImportance',
  grpc.web.MethodType.UNARY,
  proto.api.DiscussionRequest,
  proto.api.CommentThread,
  /**
   * @param {!proto.api.DiscussionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.CommentThread.deserializeBinary
);


/**
 * @param {!proto.api.DiscussionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.CommentThread)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.CommentThread>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.DiscussionsServiceClient.prototype.toggleDiscussionImportance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.DiscussionsService/ToggleDiscussionImportance',
      request,
      metadata || {},
      methodDescriptor_DiscussionsService_ToggleDiscussionImportance,
      callback);
};


/**
 * @param {!proto.api.DiscussionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.CommentThread>}
 *     Promise that resolves to the response
 */
proto.api.DiscussionsServicePromiseClient.prototype.toggleDiscussionImportance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.DiscussionsService/ToggleDiscussionImportance',
      request,
      metadata || {},
      methodDescriptor_DiscussionsService_ToggleDiscussionImportance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DiscussionRequest,
 *   !proto.api.CommentThread>}
 */
const methodDescriptor_DiscussionsService_DeleteDiscussion = new grpc.web.MethodDescriptor(
  '/api.DiscussionsService/DeleteDiscussion',
  grpc.web.MethodType.UNARY,
  proto.api.DiscussionRequest,
  proto.api.CommentThread,
  /**
   * @param {!proto.api.DiscussionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.CommentThread.deserializeBinary
);


/**
 * @param {!proto.api.DiscussionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.CommentThread)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.CommentThread>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.DiscussionsServiceClient.prototype.deleteDiscussion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.DiscussionsService/DeleteDiscussion',
      request,
      metadata || {},
      methodDescriptor_DiscussionsService_DeleteDiscussion,
      callback);
};


/**
 * @param {!proto.api.DiscussionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.CommentThread>}
 *     Promise that resolves to the response
 */
proto.api.DiscussionsServicePromiseClient.prototype.deleteDiscussion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.DiscussionsService/DeleteDiscussion',
      request,
      metadata || {},
      methodDescriptor_DiscussionsService_DeleteDiscussion);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.CurrentUserServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.CurrentUserServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.CurrentUserRequest,
 *   !proto.api.CurrentUser>}
 */
const methodDescriptor_CurrentUserService_GetCurrentUser = new grpc.web.MethodDescriptor(
  '/api.CurrentUserService/GetCurrentUser',
  grpc.web.MethodType.UNARY,
  proto.api.CurrentUserRequest,
  proto.api.CurrentUser,
  /**
   * @param {!proto.api.CurrentUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.CurrentUser.deserializeBinary
);


/**
 * @param {!proto.api.CurrentUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.CurrentUser)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.CurrentUser>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.CurrentUserServiceClient.prototype.getCurrentUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.CurrentUserService/GetCurrentUser',
      request,
      metadata || {},
      methodDescriptor_CurrentUserService_GetCurrentUser,
      callback);
};


/**
 * @param {!proto.api.CurrentUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.CurrentUser>}
 *     Promise that resolves to the response
 */
proto.api.CurrentUserServicePromiseClient.prototype.getCurrentUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.CurrentUserService/GetCurrentUser',
      request,
      metadata || {},
      methodDescriptor_CurrentUserService_GetCurrentUser);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.ResourceServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.ResourceServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetResourceRequest,
 *   !proto.api.GetResourceResponse>}
 */
const methodDescriptor_ResourceService_GetResource = new grpc.web.MethodDescriptor(
  '/api.ResourceService/GetResource',
  grpc.web.MethodType.UNARY,
  proto.api.GetResourceRequest,
  proto.api.GetResourceResponse,
  /**
   * @param {!proto.api.GetResourceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetResourceResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.GetResourceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetResourceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ResourceServiceClient.prototype.getResource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ResourceService/GetResource',
      request,
      metadata || {},
      methodDescriptor_ResourceService_GetResource,
      callback);
};


/**
 * @param {!proto.api.GetResourceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetResourceResponse>}
 *     Promise that resolves to the response
 */
proto.api.ResourceServicePromiseClient.prototype.getResource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ResourceService/GetResource',
      request,
      metadata || {},
      methodDescriptor_ResourceService_GetResource);
};


module.exports = proto.api;

