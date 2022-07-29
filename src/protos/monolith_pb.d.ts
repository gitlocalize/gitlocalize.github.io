import * as jspb from 'google-protobuf'



export class CommentThreadComment extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): CommentThreadComment;

  getUserName(): string;
  setUserName(value: string): CommentThreadComment;

  getAvatar(): string;
  setAvatar(value: string): CommentThreadComment;

  getComment(): string;
  setComment(value: string): CommentThreadComment;

  getCreatedAt(): string;
  setCreatedAt(value: string): CommentThreadComment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommentThreadComment.AsObject;
  static toObject(includeInstance: boolean, msg: CommentThreadComment): CommentThreadComment.AsObject;
  static serializeBinaryToWriter(message: CommentThreadComment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommentThreadComment;
  static deserializeBinaryFromReader(message: CommentThreadComment, reader: jspb.BinaryReader): CommentThreadComment;
}

export namespace CommentThreadComment {
  export type AsObject = {
    userId: number,
    userName: string,
    avatar: string,
    comment: string,
    createdAt: string,
  }
}

export class CommentThread extends jspb.Message {
  getCommentsList(): Array<CommentThreadComment>;
  setCommentsList(value: Array<CommentThreadComment>): CommentThread;
  clearCommentsList(): CommentThread;
  addComments(value?: CommentThreadComment, index?: number): CommentThreadComment;

  getSegmentIdsList(): Array<string>;
  setSegmentIdsList(value: Array<string>): CommentThread;
  clearSegmentIdsList(): CommentThread;
  addSegmentIds(value: string, index?: number): CommentThread;

  getDiscussionId(): number;
  setDiscussionId(value: number): CommentThread;

  getImportant(): boolean;
  setImportant(value: boolean): CommentThread;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommentThread.AsObject;
  static toObject(includeInstance: boolean, msg: CommentThread): CommentThread.AsObject;
  static serializeBinaryToWriter(message: CommentThread, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommentThread;
  static deserializeBinaryFromReader(message: CommentThread, reader: jspb.BinaryReader): CommentThread;
}

export namespace CommentThread {
  export type AsObject = {
    commentsList: Array<CommentThreadComment.AsObject>,
    segmentIdsList: Array<string>,
    discussionId: number,
    important: boolean,
  }
}

export class DiscussionsRequest extends jspb.Message {
  getResourceId(): number;
  setResourceId(value: number): DiscussionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiscussionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DiscussionsRequest): DiscussionsRequest.AsObject;
  static serializeBinaryToWriter(message: DiscussionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiscussionsRequest;
  static deserializeBinaryFromReader(message: DiscussionsRequest, reader: jspb.BinaryReader): DiscussionsRequest;
}

export namespace DiscussionsRequest {
  export type AsObject = {
    resourceId: number,
  }
}

export class DiscussionRequest extends jspb.Message {
  getDiscussionId(): number;
  setDiscussionId(value: number): DiscussionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiscussionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DiscussionRequest): DiscussionRequest.AsObject;
  static serializeBinaryToWriter(message: DiscussionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiscussionRequest;
  static deserializeBinaryFromReader(message: DiscussionRequest, reader: jspb.BinaryReader): DiscussionRequest;
}

export namespace DiscussionRequest {
  export type AsObject = {
    discussionId: number,
  }
}

export class CommentRequest extends jspb.Message {
  getResourceId(): number;
  setResourceId(value: number): CommentRequest;

  getText(): string;
  setText(value: string): CommentRequest;

  getLanguage(): string;
  setLanguage(value: string): CommentRequest;

  getCommentid(): number;
  setCommentid(value: number): CommentRequest;

  getSegmentIdsList(): Array<number>;
  setSegmentIdsList(value: Array<number>): CommentRequest;
  clearSegmentIdsList(): CommentRequest;
  addSegmentIds(value: number, index?: number): CommentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommentRequest): CommentRequest.AsObject;
  static serializeBinaryToWriter(message: CommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommentRequest;
  static deserializeBinaryFromReader(message: CommentRequest, reader: jspb.BinaryReader): CommentRequest;
}

export namespace CommentRequest {
  export type AsObject = {
    resourceId: number,
    text: string,
    language: string,
    commentid: number,
    segmentIdsList: Array<number>,
  }
}

export class DiscussionsResponse extends jspb.Message {
  getDiscussionsList(): Array<CommentThread>;
  setDiscussionsList(value: Array<CommentThread>): DiscussionsResponse;
  clearDiscussionsList(): DiscussionsResponse;
  addDiscussions(value?: CommentThread, index?: number): CommentThread;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiscussionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DiscussionsResponse): DiscussionsResponse.AsObject;
  static serializeBinaryToWriter(message: DiscussionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiscussionsResponse;
  static deserializeBinaryFromReader(message: DiscussionsResponse, reader: jspb.BinaryReader): DiscussionsResponse;
}

export namespace DiscussionsResponse {
  export type AsObject = {
    discussionsList: Array<CommentThread.AsObject>,
  }
}

export class CurrentUser extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): CurrentUser;

  getUserName(): string;
  setUserName(value: string): CurrentUser;

  getAvatar(): string;
  setAvatar(value: string): CurrentUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentUser.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentUser): CurrentUser.AsObject;
  static serializeBinaryToWriter(message: CurrentUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentUser;
  static deserializeBinaryFromReader(message: CurrentUser, reader: jspb.BinaryReader): CurrentUser;
}

export namespace CurrentUser {
  export type AsObject = {
    userId: number,
    userName: string,
    avatar: string,
  }
}

export class CurrentUserRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentUserRequest): CurrentUserRequest.AsObject;
  static serializeBinaryToWriter(message: CurrentUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentUserRequest;
  static deserializeBinaryFromReader(message: CurrentUserRequest, reader: jspb.BinaryReader): CurrentUserRequest;
}

export namespace CurrentUserRequest {
  export type AsObject = {
  }
}

export class GetResourceRequest extends jspb.Message {
  getResourceId(): number;
  setResourceId(value: number): GetResourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetResourceRequest): GetResourceRequest.AsObject;
  static serializeBinaryToWriter(message: GetResourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResourceRequest;
  static deserializeBinaryFromReader(message: GetResourceRequest, reader: jspb.BinaryReader): GetResourceRequest;
}

export namespace GetResourceRequest {
  export type AsObject = {
    resourceId: number,
  }
}

export class ResourceTranslationStatistic extends jspb.Message {
  getStatisticId(): number;
  setStatisticId(value: number): ResourceTranslationStatistic;

  getTotalChars(): number;
  setTotalChars(value: number): ResourceTranslationStatistic;

  getUntranslatedChars(): number;
  setUntranslatedChars(value: number): ResourceTranslationStatistic;

  getTranslatedChars(): number;
  setTranslatedChars(value: number): ResourceTranslationStatistic;

  getElementableId(): number;
  setElementableId(value: number): ResourceTranslationStatistic;

  getElementableType(): string;
  setElementableType(value: string): ResourceTranslationStatistic;

  getTotalWords(): number;
  setTotalWords(value: number): ResourceTranslationStatistic;

  getUntranslatedWords(): number;
  setUntranslatedWords(value: number): ResourceTranslationStatistic;

  getTranslatedWords(): number;
  setTranslatedWords(value: number): ResourceTranslationStatistic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceTranslationStatistic.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceTranslationStatistic): ResourceTranslationStatistic.AsObject;
  static serializeBinaryToWriter(message: ResourceTranslationStatistic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceTranslationStatistic;
  static deserializeBinaryFromReader(message: ResourceTranslationStatistic, reader: jspb.BinaryReader): ResourceTranslationStatistic;
}

export namespace ResourceTranslationStatistic {
  export type AsObject = {
    statisticId: number,
    totalChars: number,
    untranslatedChars: number,
    translatedChars: number,
    elementableId: number,
    elementableType: string,
    totalWords: number,
    untranslatedWords: number,
    translatedWords: number,
  }
}

export class ResourceForView extends jspb.Message {
  getResourceId(): number;
  setResourceId(value: number): ResourceForView;

  getCompletion(): number;
  setCompletion(value: number): ResourceForView;

  getSynced(): boolean;
  setSynced(value: boolean): ResourceForView;

  getStatusChecking(): boolean;
  setStatusChecking(value: boolean): ResourceForView;

  getHtml(): string;
  setHtml(value: string): ResourceForView;

  getSegmentsList(): Array<SegmentForView>;
  setSegmentsList(value: Array<SegmentForView>): ResourceForView;
  clearSegmentsList(): ResourceForView;
  addSegments(value?: SegmentForView, index?: number): SegmentForView;

  getTranslationStatistic(): ResourceTranslationStatistic | undefined;
  setTranslationStatistic(value?: ResourceTranslationStatistic): ResourceForView;
  hasTranslationStatistic(): boolean;
  clearTranslationStatistic(): ResourceForView;

  getRawContent(): string;
  setRawContent(value: string): ResourceForView;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceForView.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceForView): ResourceForView.AsObject;
  static serializeBinaryToWriter(message: ResourceForView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceForView;
  static deserializeBinaryFromReader(message: ResourceForView, reader: jspb.BinaryReader): ResourceForView;
}

export namespace ResourceForView {
  export type AsObject = {
    resourceId: number,
    completion: number,
    synced: boolean,
    statusChecking: boolean,
    html: string,
    segmentsList: Array<SegmentForView.AsObject>,
    translationStatistic?: ResourceTranslationStatistic.AsObject,
    rawContent: string,
  }
}

export class GetResourceResponse extends jspb.Message {
  getResource(): ResourceForView | undefined;
  setResource(value?: ResourceForView): GetResourceResponse;
  hasResource(): boolean;
  clearResource(): GetResourceResponse;

  getParentResource(): ResourceForView | undefined;
  setParentResource(value?: ResourceForView): GetResourceResponse;
  hasParentResource(): boolean;
  clearParentResource(): GetResourceResponse;

  getEnableGlossary(): boolean;
  setEnableGlossary(value: boolean): GetResourceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResourceResponse): GetResourceResponse.AsObject;
  static serializeBinaryToWriter(message: GetResourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResourceResponse;
  static deserializeBinaryFromReader(message: GetResourceResponse, reader: jspb.BinaryReader): GetResourceResponse;
}

export namespace GetResourceResponse {
  export type AsObject = {
    resource?: ResourceForView.AsObject,
    parentResource?: ResourceForView.AsObject,
    enableGlossary: boolean,
  }
}

export class SegmentForView extends jspb.Message {
  getSegmentId(): number;
  setSegmentId(value: number): SegmentForView;

  getParentSegmentId(): number;
  setParentSegmentId(value: number): SegmentForView;

  getContent(): string;
  setContent(value: string): SegmentForView;

  getPath(): string;
  setPath(value: string): SegmentForView;

  getCurrent(): boolean;
  setCurrent(value: boolean): SegmentForView;

  getTranslationFlag(): boolean;
  setTranslationFlag(value: boolean): SegmentForView;

  getIsPretranslated(): boolean;
  setIsPretranslated(value: boolean): SegmentForView;

  getDisabled(): boolean;
  setDisabled(value: boolean): SegmentForView;

  getHtmlContentForView(): string;
  setHtmlContentForView(value: string): SegmentForView;

  getHtmlContent(): string;
  setHtmlContent(value: string): SegmentForView;

  getCreatedAt(): string;
  setCreatedAt(value: string): SegmentForView;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SegmentForView.AsObject;
  static toObject(includeInstance: boolean, msg: SegmentForView): SegmentForView.AsObject;
  static serializeBinaryToWriter(message: SegmentForView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SegmentForView;
  static deserializeBinaryFromReader(message: SegmentForView, reader: jspb.BinaryReader): SegmentForView;
}

export namespace SegmentForView {
  export type AsObject = {
    segmentId: number,
    parentSegmentId: number,
    content: string,
    path: string,
    current: boolean,
    translationFlag: boolean,
    isPretranslated: boolean,
    disabled: boolean,
    htmlContentForView: string,
    htmlContent: string,
    createdAt: string,
  }
}

