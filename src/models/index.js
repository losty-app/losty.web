// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ProviderType = {
  "REGULAR": "REGULAR",
  "ADMIN": "ADMIN"
};

const SosEventStatus = {
  "PENDING": "PENDING",
  "FINISHED": "FINISHED"
};

const ProviderResponseStatus = {
  "UNSEEN": "UNSEEN",
  "SEEN": "SEEN",
  "APPROVED_OUT": "APPROVED_OUT",
  "APPROVED_DEST": "APPROVED_DEST"
};

const InvitationResponseStatus = {
  "PENDING": "PENDING",
  "DECLINED": "DECLINED",
  "APPROVED": "APPROVED"
};

const { Requester, Provider, SosEvent, ProviderResponse, Association, Invitation, RequesterProvider } = initSchema(schema);

export {
  Requester,
  Provider,
  SosEvent,
  ProviderResponse,
  Association,
  Invitation,
  RequesterProvider,
  ProviderType,
  SosEventStatus,
  ProviderResponseStatus,
  InvitationResponseStatus
};