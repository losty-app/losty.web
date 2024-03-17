import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum AttachmentType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO"
}

export enum SosEventStatus {
  PENDING = "PENDING",
  FINISHED = "FINISHED"
}

export enum ProviderResponseStatus {
  UNSEEN = "UNSEEN",
  SEEN = "SEEN",
  APPROVED_OUT = "APPROVED_OUT",
  APPROVED_DEST = "APPROVED_DEST"
}

export enum InvitationResponseStatus {
  PENDING = "PENDING",
  DECLINED = "DECLINED",
  APPROVED = "APPROVED"
}



type EagerRequester = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Requester, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly age?: number | null;
  readonly state?: string | null;
  readonly gender?: string | null;
  readonly tel: string;
  readonly place?: string | null;
  readonly geoPlace?: string | null;
  readonly lastSeen?: string | null;
  readonly associationId: string;
  readonly uriImage?: string | null;
  readonly expoPushToken?: string | null;
  readonly providers?: (RequesterProvider | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRequester = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Requester, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly age?: number | null;
  readonly state?: string | null;
  readonly gender?: string | null;
  readonly tel: string;
  readonly place?: string | null;
  readonly geoPlace?: string | null;
  readonly lastSeen?: string | null;
  readonly associationId: string;
  readonly uriImage?: string | null;
  readonly expoPushToken?: string | null;
  readonly providers: AsyncCollection<RequesterProvider>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Requester = LazyLoading extends LazyLoadingDisabled ? EagerRequester : LazyRequester

export declare const Requester: (new (init: ModelInit<Requester>) => Requester) & {
  copyOf(source: Requester, mutator: (draft: MutableModel<Requester>) => MutableModel<Requester> | void): Requester;
}

type EagerProvider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Provider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly age?: number | null;
  readonly state?: string | null;
  readonly gender?: string | null;
  readonly tel: string;
  readonly place?: string | null;
  readonly geoPlace?: string | null;
  readonly lastSeen?: string | null;
  readonly associationId: string;
  readonly uriImage?: string | null;
  readonly expoPushToken?: string | null;
  readonly ChatRooms?: (ProviderChatRoom | null)[] | null;
  readonly requesters?: (RequesterProvider | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProvider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Provider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly age?: number | null;
  readonly state?: string | null;
  readonly gender?: string | null;
  readonly tel: string;
  readonly place?: string | null;
  readonly geoPlace?: string | null;
  readonly lastSeen?: string | null;
  readonly associationId: string;
  readonly uriImage?: string | null;
  readonly expoPushToken?: string | null;
  readonly ChatRooms: AsyncCollection<ProviderChatRoom>;
  readonly requesters: AsyncCollection<RequesterProvider>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Provider = LazyLoading extends LazyLoadingDisabled ? EagerProvider : LazyProvider

export declare const Provider: (new (init: ModelInit<Provider>) => Provider) & {
  copyOf(source: Provider, mutator: (draft: MutableModel<Provider>) => MutableModel<Provider> | void): Provider;
}

type EagerAttachment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attachment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly storageKey: string;
  readonly type: AttachmentType | keyof typeof AttachmentType;
  readonly width?: number | null;
  readonly height?: number | null;
  readonly duration?: number | null;
  readonly messageId: string;
  readonly chatroomId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAttachment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attachment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly storageKey: string;
  readonly type: AttachmentType | keyof typeof AttachmentType;
  readonly width?: number | null;
  readonly height?: number | null;
  readonly duration?: number | null;
  readonly messageId: string;
  readonly chatroomId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Attachment = LazyLoading extends LazyLoadingDisabled ? EagerAttachment : LazyAttachment

export declare const Attachment: (new (init: ModelInit<Attachment>) => Attachment) & {
  copyOf(source: Attachment, mutator: (draft: MutableModel<Attachment>) => MutableModel<Attachment> | void): Attachment;
}

type EagerChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly uriImage?: string | null;
  readonly isGroup?: boolean | null;
  readonly Messages?: (Message | null)[] | null;
  readonly Providers?: (ProviderChatRoom | null)[] | null;
  readonly LastMessage?: Message | null;
  readonly mutualRequester?: Requester | null;
  readonly Attachments?: (Attachment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
  readonly chatRoomMutualRequesterId?: string | null;
}

type LazyChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly uriImage?: string | null;
  readonly isGroup?: boolean | null;
  readonly Messages: AsyncCollection<Message>;
  readonly Providers: AsyncCollection<ProviderChatRoom>;
  readonly LastMessage: AsyncItem<Message | undefined>;
  readonly mutualRequester: AsyncItem<Requester | undefined>;
  readonly Attachments: AsyncCollection<Attachment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
  readonly chatRoomMutualRequesterId?: string | null;
}

export declare type ChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerChatRoom : LazyChatRoom

export declare const ChatRoom: (new (init: ModelInit<ChatRoom>) => ChatRoom) & {
  copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom>) => MutableModel<ChatRoom> | void): ChatRoom;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly text: string;
  readonly chatroomId: string;
  readonly SentBy: Provider;
  readonly images?: (string | null)[] | null;
  readonly Attachments?: (Attachment | null)[] | null;
  readonly updatedAt?: string | null;
  readonly messageSentById: string;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly text: string;
  readonly chatroomId: string;
  readonly SentBy: AsyncItem<Provider>;
  readonly images?: (string | null)[] | null;
  readonly Attachments: AsyncCollection<Attachment>;
  readonly updatedAt?: string | null;
  readonly messageSentById: string;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerSosEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SosEvent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly status: SosEventStatus | keyof typeof SosEventStatus;
  readonly requesterId: string;
  readonly providerResponses?: (ProviderResponse | null)[] | null;
  readonly place?: string | null;
  readonly geoPlace?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySosEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SosEvent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly status: SosEventStatus | keyof typeof SosEventStatus;
  readonly requesterId: string;
  readonly providerResponses: AsyncCollection<ProviderResponse>;
  readonly place?: string | null;
  readonly geoPlace?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SosEvent = LazyLoading extends LazyLoadingDisabled ? EagerSosEvent : LazySosEvent

export declare const SosEvent: (new (init: ModelInit<SosEvent>) => SosEvent) & {
  copyOf(source: SosEvent, mutator: (draft: MutableModel<SosEvent>) => MutableModel<SosEvent> | void): SosEvent;
}

type EagerProviderResponse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderResponse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sosEventId: string;
  readonly provider: Provider;
  readonly status: ProviderResponseStatus | keyof typeof ProviderResponseStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerResponseProviderId: string;
}

type LazyProviderResponse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderResponse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sosEventId: string;
  readonly provider: AsyncItem<Provider>;
  readonly status: ProviderResponseStatus | keyof typeof ProviderResponseStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerResponseProviderId: string;
}

export declare type ProviderResponse = LazyLoading extends LazyLoadingDisabled ? EagerProviderResponse : LazyProviderResponse

export declare const ProviderResponse: (new (init: ModelInit<ProviderResponse>) => ProviderResponse) & {
  copyOf(source: ProviderResponse, mutator: (draft: MutableModel<ProviderResponse>) => MutableModel<ProviderResponse> | void): ProviderResponse;
}

type EagerAssociation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Association, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly providers?: (Provider | null)[] | null;
  readonly requesters?: (Requester | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAssociation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Association, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly providers: AsyncCollection<Provider>;
  readonly requesters: AsyncCollection<Requester>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Association = LazyLoading extends LazyLoadingDisabled ? EagerAssociation : LazyAssociation

export declare const Association: (new (init: ModelInit<Association>) => Association) & {
  copyOf(source: Association, mutator: (draft: MutableModel<Association>) => MutableModel<Association> | void): Association;
}

type EagerInvitation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Invitation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly invitationStatus?: InvitationResponseStatus | keyof typeof InvitationResponseStatus | null;
  readonly providerId: string;
  readonly requesterId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInvitation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Invitation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly invitationStatus?: InvitationResponseStatus | keyof typeof InvitationResponseStatus | null;
  readonly providerId: string;
  readonly requesterId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Invitation = LazyLoading extends LazyLoadingDisabled ? EagerInvitation : LazyInvitation

export declare const Invitation: (new (init: ModelInit<Invitation>) => Invitation) & {
  copyOf(source: Invitation, mutator: (draft: MutableModel<Invitation>) => MutableModel<Invitation> | void): Invitation;
}

type EagerRequesterProvider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RequesterProvider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly requesterId?: string | null;
  readonly providerId?: string | null;
  readonly requester: Requester;
  readonly provider: Provider;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRequesterProvider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RequesterProvider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly requesterId?: string | null;
  readonly providerId?: string | null;
  readonly requester: AsyncItem<Requester>;
  readonly provider: AsyncItem<Provider>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RequesterProvider = LazyLoading extends LazyLoadingDisabled ? EagerRequesterProvider : LazyRequesterProvider

export declare const RequesterProvider: (new (init: ModelInit<RequesterProvider>) => RequesterProvider) & {
  copyOf(source: RequesterProvider, mutator: (draft: MutableModel<RequesterProvider>) => MutableModel<RequesterProvider> | void): RequesterProvider;
}

type EagerProviderChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly providerId?: string | null;
  readonly chatRoomId?: string | null;
  readonly provider: Provider;
  readonly chatRoom: ChatRoom;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProviderChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly providerId?: string | null;
  readonly chatRoomId?: string | null;
  readonly provider: AsyncItem<Provider>;
  readonly chatRoom: AsyncItem<ChatRoom>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProviderChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerProviderChatRoom : LazyProviderChatRoom

export declare const ProviderChatRoom: (new (init: ModelInit<ProviderChatRoom>) => ProviderChatRoom) & {
  copyOf(source: ProviderChatRoom, mutator: (draft: MutableModel<ProviderChatRoom>) => MutableModel<ProviderChatRoom> | void): ProviderChatRoom;
}