/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRequester = /* GraphQL */ `
  mutation CreateRequester(
    $input: CreateRequesterInput!
    $condition: ModelRequesterConditionInput
  ) {
    createRequester(input: $input, condition: $condition) {
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
export const updateRequester = /* GraphQL */ `
  mutation UpdateRequester(
    $input: UpdateRequesterInput!
    $condition: ModelRequesterConditionInput
  ) {
    updateRequester(input: $input, condition: $condition) {
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
export const deleteRequester = /* GraphQL */ `
  mutation DeleteRequester(
    $input: DeleteRequesterInput!
    $condition: ModelRequesterConditionInput
  ) {
    deleteRequester(input: $input, condition: $condition) {
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
export const createProvider = /* GraphQL */ `
  mutation CreateProvider(
    $input: CreateProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    createProvider(input: $input, condition: $condition) {
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
export const updateProvider = /* GraphQL */ `
  mutation UpdateProvider(
    $input: UpdateProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    updateProvider(input: $input, condition: $condition) {
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
export const deleteProvider = /* GraphQL */ `
  mutation DeleteProvider(
    $input: DeleteProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    deleteProvider(input: $input, condition: $condition) {
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
export const createSosEvent = /* GraphQL */ `
  mutation CreateSosEvent(
    $input: CreateSosEventInput!
    $condition: ModelSosEventConditionInput
  ) {
    createSosEvent(input: $input, condition: $condition) {
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
export const updateSosEvent = /* GraphQL */ `
  mutation UpdateSosEvent(
    $input: UpdateSosEventInput!
    $condition: ModelSosEventConditionInput
  ) {
    updateSosEvent(input: $input, condition: $condition) {
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
export const deleteSosEvent = /* GraphQL */ `
  mutation DeleteSosEvent(
    $input: DeleteSosEventInput!
    $condition: ModelSosEventConditionInput
  ) {
    deleteSosEvent(input: $input, condition: $condition) {
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
export const createProviderResponse = /* GraphQL */ `
  mutation CreateProviderResponse(
    $input: CreateProviderResponseInput!
    $condition: ModelProviderResponseConditionInput
  ) {
    createProviderResponse(input: $input, condition: $condition) {
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
export const updateProviderResponse = /* GraphQL */ `
  mutation UpdateProviderResponse(
    $input: UpdateProviderResponseInput!
    $condition: ModelProviderResponseConditionInput
  ) {
    updateProviderResponse(input: $input, condition: $condition) {
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
export const deleteProviderResponse = /* GraphQL */ `
  mutation DeleteProviderResponse(
    $input: DeleteProviderResponseInput!
    $condition: ModelProviderResponseConditionInput
  ) {
    deleteProviderResponse(input: $input, condition: $condition) {
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
export const createAssociation = /* GraphQL */ `
  mutation CreateAssociation(
    $input: CreateAssociationInput!
    $condition: ModelAssociationConditionInput
  ) {
    createAssociation(input: $input, condition: $condition) {
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
export const updateAssociation = /* GraphQL */ `
  mutation UpdateAssociation(
    $input: UpdateAssociationInput!
    $condition: ModelAssociationConditionInput
  ) {
    updateAssociation(input: $input, condition: $condition) {
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
export const deleteAssociation = /* GraphQL */ `
  mutation DeleteAssociation(
    $input: DeleteAssociationInput!
    $condition: ModelAssociationConditionInput
  ) {
    deleteAssociation(input: $input, condition: $condition) {
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
export const createInvitation = /* GraphQL */ `
  mutation CreateInvitation(
    $input: CreateInvitationInput!
    $condition: ModelInvitationConditionInput
  ) {
    createInvitation(input: $input, condition: $condition) {
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
export const updateInvitation = /* GraphQL */ `
  mutation UpdateInvitation(
    $input: UpdateInvitationInput!
    $condition: ModelInvitationConditionInput
  ) {
    updateInvitation(input: $input, condition: $condition) {
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
export const deleteInvitation = /* GraphQL */ `
  mutation DeleteInvitation(
    $input: DeleteInvitationInput!
    $condition: ModelInvitationConditionInput
  ) {
    deleteInvitation(input: $input, condition: $condition) {
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
export const createRequesterProvider = /* GraphQL */ `
  mutation CreateRequesterProvider(
    $input: CreateRequesterProviderInput!
    $condition: ModelRequesterProviderConditionInput
  ) {
    createRequesterProvider(input: $input, condition: $condition) {
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
export const updateRequesterProvider = /* GraphQL */ `
  mutation UpdateRequesterProvider(
    $input: UpdateRequesterProviderInput!
    $condition: ModelRequesterProviderConditionInput
  ) {
    updateRequesterProvider(input: $input, condition: $condition) {
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
export const deleteRequesterProvider = /* GraphQL */ `
  mutation DeleteRequesterProvider(
    $input: DeleteRequesterProviderInput!
    $condition: ModelRequesterProviderConditionInput
  ) {
    deleteRequesterProvider(input: $input, condition: $condition) {
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
