/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRequester = /* GraphQL */ `
  subscription OnCreateRequester(
    $filter: ModelSubscriptionRequesterFilterInput
  ) {
    onCreateRequester(filter: $filter) {
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
export const onUpdateRequester = /* GraphQL */ `
  subscription OnUpdateRequester(
    $filter: ModelSubscriptionRequesterFilterInput
  ) {
    onUpdateRequester(filter: $filter) {
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
export const onDeleteRequester = /* GraphQL */ `
  subscription OnDeleteRequester(
    $filter: ModelSubscriptionRequesterFilterInput
  ) {
    onDeleteRequester(filter: $filter) {
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
export const onCreateProvider = /* GraphQL */ `
  subscription OnCreateProvider($filter: ModelSubscriptionProviderFilterInput) {
    onCreateProvider(filter: $filter) {
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
export const onUpdateProvider = /* GraphQL */ `
  subscription OnUpdateProvider($filter: ModelSubscriptionProviderFilterInput) {
    onUpdateProvider(filter: $filter) {
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
export const onDeleteProvider = /* GraphQL */ `
  subscription OnDeleteProvider($filter: ModelSubscriptionProviderFilterInput) {
    onDeleteProvider(filter: $filter) {
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
export const onCreateAttachment = /* GraphQL */ `
  subscription OnCreateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onCreateAttachment(filter: $filter) {
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
export const onUpdateAttachment = /* GraphQL */ `
  subscription OnUpdateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onUpdateAttachment(filter: $filter) {
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
export const onDeleteAttachment = /* GraphQL */ `
  subscription OnDeleteAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onDeleteAttachment(filter: $filter) {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateSosEvent = /* GraphQL */ `
  subscription OnCreateSosEvent($filter: ModelSubscriptionSosEventFilterInput) {
    onCreateSosEvent(filter: $filter) {
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
export const onUpdateSosEvent = /* GraphQL */ `
  subscription OnUpdateSosEvent($filter: ModelSubscriptionSosEventFilterInput) {
    onUpdateSosEvent(filter: $filter) {
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
export const onDeleteSosEvent = /* GraphQL */ `
  subscription OnDeleteSosEvent($filter: ModelSubscriptionSosEventFilterInput) {
    onDeleteSosEvent(filter: $filter) {
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
export const onCreateProviderResponse = /* GraphQL */ `
  subscription OnCreateProviderResponse(
    $filter: ModelSubscriptionProviderResponseFilterInput
  ) {
    onCreateProviderResponse(filter: $filter) {
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
export const onUpdateProviderResponse = /* GraphQL */ `
  subscription OnUpdateProviderResponse(
    $filter: ModelSubscriptionProviderResponseFilterInput
  ) {
    onUpdateProviderResponse(filter: $filter) {
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
export const onDeleteProviderResponse = /* GraphQL */ `
  subscription OnDeleteProviderResponse(
    $filter: ModelSubscriptionProviderResponseFilterInput
  ) {
    onDeleteProviderResponse(filter: $filter) {
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
export const onCreateAssociation = /* GraphQL */ `
  subscription OnCreateAssociation(
    $filter: ModelSubscriptionAssociationFilterInput
  ) {
    onCreateAssociation(filter: $filter) {
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
export const onUpdateAssociation = /* GraphQL */ `
  subscription OnUpdateAssociation(
    $filter: ModelSubscriptionAssociationFilterInput
  ) {
    onUpdateAssociation(filter: $filter) {
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
export const onDeleteAssociation = /* GraphQL */ `
  subscription OnDeleteAssociation(
    $filter: ModelSubscriptionAssociationFilterInput
  ) {
    onDeleteAssociation(filter: $filter) {
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
export const onCreateInvitation = /* GraphQL */ `
  subscription OnCreateInvitation(
    $filter: ModelSubscriptionInvitationFilterInput
  ) {
    onCreateInvitation(filter: $filter) {
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
export const onUpdateInvitation = /* GraphQL */ `
  subscription OnUpdateInvitation(
    $filter: ModelSubscriptionInvitationFilterInput
  ) {
    onUpdateInvitation(filter: $filter) {
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
export const onDeleteInvitation = /* GraphQL */ `
  subscription OnDeleteInvitation(
    $filter: ModelSubscriptionInvitationFilterInput
  ) {
    onDeleteInvitation(filter: $filter) {
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
export const onCreateRequesterProvider = /* GraphQL */ `
  subscription OnCreateRequesterProvider(
    $filter: ModelSubscriptionRequesterProviderFilterInput
  ) {
    onCreateRequesterProvider(filter: $filter) {
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
export const onUpdateRequesterProvider = /* GraphQL */ `
  subscription OnUpdateRequesterProvider(
    $filter: ModelSubscriptionRequesterProviderFilterInput
  ) {
    onUpdateRequesterProvider(filter: $filter) {
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
export const onDeleteRequesterProvider = /* GraphQL */ `
  subscription OnDeleteRequesterProvider(
    $filter: ModelSubscriptionRequesterProviderFilterInput
  ) {
    onDeleteRequesterProvider(filter: $filter) {
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
export const onCreateProviderChatRoom = /* GraphQL */ `
  subscription OnCreateProviderChatRoom(
    $filter: ModelSubscriptionProviderChatRoomFilterInput
  ) {
    onCreateProviderChatRoom(filter: $filter) {
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
export const onUpdateProviderChatRoom = /* GraphQL */ `
  subscription OnUpdateProviderChatRoom(
    $filter: ModelSubscriptionProviderChatRoomFilterInput
  ) {
    onUpdateProviderChatRoom(filter: $filter) {
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
export const onDeleteProviderChatRoom = /* GraphQL */ `
  subscription OnDeleteProviderChatRoom(
    $filter: ModelSubscriptionProviderChatRoomFilterInput
  ) {
    onDeleteProviderChatRoom(filter: $filter) {
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
