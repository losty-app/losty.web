/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRequester = /* GraphQL */ `
  query GetRequester($id: ID!) {
    getRequester(id: $id) {
      id
      firstName
      lastName
      age
      state
      gender
      tel
      place
      lastSeen
      associationId
      uriImage
      expoPushToken
      providers {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRequesters = /* GraphQL */ `
  query ListRequesters(
    $filter: ModelRequesterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequesters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        age
        state
        gender
        tel
        place
        lastSeen
        associationId
        uriImage
        expoPushToken
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProvider = /* GraphQL */ `
  query GetProvider($id: ID!) {
    getProvider(id: $id) {
      id
      providerType
      firstName
      lastName
      age
      state
      gender
      tel
      place
      lastSeen
      associationId
      uriImage
      expoPushToken
      ChatRooms {
        nextToken
        __typename
      }
      requesters {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProviders = /* GraphQL */ `
  query ListProviders(
    $filter: ModelProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        providerType
        firstName
        lastName
        age
        state
        gender
        tel
        place
        lastSeen
        associationId
        uriImage
        expoPushToken
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAttachment = /* GraphQL */ `
  query GetAttachment($id: ID!) {
    getAttachment(id: $id) {
      id
      storageKey
      type
      width
      height
      duration
      messageId
      chatroomId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAttachments = /* GraphQL */ `
  query ListAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storageKey
        type
        width
        height
        duration
        messageId
        chatroomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      name
      uriImage
      isGroup
      Messages {
        nextToken
        __typename
      }
      Providers {
        nextToken
        __typename
      }
      LastMessage {
        id
        createdAt
        text
        chatroomId
        images
        updatedAt
        messageSentById
        __typename
      }
      mutualRequester {
        id
        firstName
        lastName
        age
        state
        gender
        tel
        place
        lastSeen
        associationId
        uriImage
        expoPushToken
        createdAt
        updatedAt
        __typename
      }
      Attachments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      chatRoomMutualRequesterId
      __typename
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        uriImage
        isGroup
        createdAt
        updatedAt
        chatRoomLastMessageId
        chatRoomMutualRequesterId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      createdAt
      text
      chatroomId
      SentBy {
        id
        providerType
        firstName
        lastName
        age
        state
        gender
        tel
        place
        lastSeen
        associationId
        uriImage
        expoPushToken
        createdAt
        updatedAt
        __typename
      }
      images
      Attachments {
        nextToken
        __typename
      }
      updatedAt
      messageSentById
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        text
        chatroomId
        images
        updatedAt
        messageSentById
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSosEvent = /* GraphQL */ `
  query GetSosEvent($id: ID!) {
    getSosEvent(id: $id) {
      id
      status
      requesterId
      providerResponses {
        nextToken
        __typename
      }
      place
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSosEvents = /* GraphQL */ `
  query ListSosEvents(
    $filter: ModelSosEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSosEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        requesterId
        place
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProviderResponse = /* GraphQL */ `
  query GetProviderResponse($id: ID!) {
    getProviderResponse(id: $id) {
      id
      sosEventId
      provider {
        id
        providerType
        firstName
        lastName
        age
        state
        gender
        tel
        place
        lastSeen
        associationId
        uriImage
        expoPushToken
        createdAt
        updatedAt
        __typename
      }
      status
      createdAt
      updatedAt
      providerResponseProviderId
      __typename
    }
  }
`;
export const listProviderResponses = /* GraphQL */ `
  query ListProviderResponses(
    $filter: ModelProviderResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProviderResponses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sosEventId
        status
        createdAt
        updatedAt
        providerResponseProviderId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAssociation = /* GraphQL */ `
  query GetAssociation($id: ID!) {
    getAssociation(id: $id) {
      id
      name
      providers {
        nextToken
        __typename
      }
      requesters {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAssociations = /* GraphQL */ `
  query ListAssociations(
    $filter: ModelAssociationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssociations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInvitation = /* GraphQL */ `
  query GetInvitation($id: ID!) {
    getInvitation(id: $id) {
      id
      invitationStatus
      providerId
      requesterId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInvitations = /* GraphQL */ `
  query ListInvitations(
    $filter: ModelInvitationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvitations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        invitationStatus
        providerId
        requesterId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRequesterProvider = /* GraphQL */ `
  query GetRequesterProvider($id: ID!) {
    getRequesterProvider(id: $id) {
      id
      requesterId
      providerId
      requester {
        id
        firstName
        lastName
        age
        state
        gender
        tel
        place
        lastSeen
        associationId
        uriImage
        expoPushToken
        createdAt
        updatedAt
        __typename
      }
      provider {
        id
        providerType
        firstName
        lastName
        age
        state
        gender
        tel
        place
        lastSeen
        associationId
        uriImage
        expoPushToken
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRequesterProviders = /* GraphQL */ `
  query ListRequesterProviders(
    $filter: ModelRequesterProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequesterProviders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        requesterId
        providerId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProviderChatRoom = /* GraphQL */ `
  query GetProviderChatRoom($id: ID!) {
    getProviderChatRoom(id: $id) {
      id
      providerId
      chatRoomId
      provider {
        id
        providerType
        firstName
        lastName
        age
        state
        gender
        tel
        place
        lastSeen
        associationId
        uriImage
        expoPushToken
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        name
        uriImage
        isGroup
        createdAt
        updatedAt
        chatRoomLastMessageId
        chatRoomMutualRequesterId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProviderChatRooms = /* GraphQL */ `
  query ListProviderChatRooms(
    $filter: ModelProviderChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProviderChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        providerId
        chatRoomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const requestersByAssociationId = /* GraphQL */ `
  query RequestersByAssociationId(
    $associationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRequesterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    requestersByAssociationId(
      associationId: $associationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        age
        state
        gender
        tel
        place
        lastSeen
        associationId
        uriImage
        expoPushToken
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const providersByAssociationId = /* GraphQL */ `
  query ProvidersByAssociationId(
    $associationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    providersByAssociationId(
      associationId: $associationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        providerType
        firstName
        lastName
        age
        state
        gender
        tel
        place
        lastSeen
        associationId
        uriImage
        expoPushToken
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const attachmentsByMessageId = /* GraphQL */ `
  query AttachmentsByMessageId(
    $messageId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByMessageId(
      messageId: $messageId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storageKey
        type
        width
        height
        duration
        messageId
        chatroomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const attachmentsByChatroomId = /* GraphQL */ `
  query AttachmentsByChatroomId(
    $chatroomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByChatroomId(
      chatroomId: $chatroomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storageKey
        type
        width
        height
        duration
        messageId
        chatroomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listMessagesByChatRoom = /* GraphQL */ `
  query ListMessagesByChatRoom(
    $chatroomId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessagesByChatRoom(
      chatroomId: $chatroomId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        text
        chatroomId
        images
        updatedAt
        messageSentById
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const providerResponsesBySosEventId = /* GraphQL */ `
  query ProviderResponsesBySosEventId(
    $sosEventId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProviderResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    providerResponsesBySosEventId(
      sosEventId: $sosEventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sosEventId
        status
        createdAt
        updatedAt
        providerResponseProviderId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const requesterProvidersByRequesterId = /* GraphQL */ `
  query RequesterProvidersByRequesterId(
    $requesterId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRequesterProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    requesterProvidersByRequesterId(
      requesterId: $requesterId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        requesterId
        providerId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const requesterProvidersByProviderId = /* GraphQL */ `
  query RequesterProvidersByProviderId(
    $providerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRequesterProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    requesterProvidersByProviderId(
      providerId: $providerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        requesterId
        providerId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const providerChatRoomsByProviderId = /* GraphQL */ `
  query ProviderChatRoomsByProviderId(
    $providerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProviderChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    providerChatRoomsByProviderId(
      providerId: $providerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        providerId
        chatRoomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const providerChatRoomsByChatRoomId = /* GraphQL */ `
  query ProviderChatRoomsByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProviderChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    providerChatRoomsByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        providerId
        chatRoomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
