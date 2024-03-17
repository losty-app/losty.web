// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AttachmentType = {
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO"
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

const { Requester, Provider, Attachment, ChatRoom, Message, SosEvent, ProviderResponse, Association, Invitation, RequesterProvider, ProviderChatRoom } = initSchema(schema);

export {
  Requester,
  Provider,
  Attachment,
  ChatRoom,
  Message,
  SosEvent,
  ProviderResponse,
  Association,
  Invitation,
  RequesterProvider,
  ProviderChatRoom,
  AttachmentType,
  SosEventStatus,
  ProviderResponseStatus,
  InvitationResponseStatus
};