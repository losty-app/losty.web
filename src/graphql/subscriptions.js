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
      uriImage
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
      uriImage
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
      uriImage
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
