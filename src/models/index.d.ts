import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum ProviderType {
  REGULAR = "REGULAR",
  ADMIN = "ADMIN"
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
  readonly providerType?: ProviderType | keyof typeof ProviderType | null;
  readonly firstName: string;
  readonly lastName: string;
  readonly age?: number | null;
  readonly state?: string | null;
  readonly gender?: string | null;
  readonly tel: string;
  readonly place?: string | null;
  readonly lastSeen?: string | null;
  readonly associationId: string;
  readonly uriImage?: string | null;
  readonly expoPushToken?: string | null;
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
  readonly providerType?: ProviderType | keyof typeof ProviderType | null;
  readonly firstName: string;
  readonly lastName: string;
  readonly age?: number | null;
  readonly state?: string | null;
  readonly gender?: string | null;
  readonly tel: string;
  readonly place?: string | null;
  readonly lastSeen?: string | null;
  readonly associationId: string;
  readonly uriImage?: string | null;
  readonly expoPushToken?: string | null;
  readonly requesters: AsyncCollection<RequesterProvider>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Provider = LazyLoading extends LazyLoadingDisabled ? EagerProvider : LazyProvider

export declare const Provider: (new (init: ModelInit<Provider>) => Provider) & {
  copyOf(source: Provider, mutator: (draft: MutableModel<Provider>) => MutableModel<Provider> | void): Provider;
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
  readonly uriImage?: string | null;
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
  readonly uriImage?: string | null;
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