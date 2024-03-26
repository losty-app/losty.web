export const onUpdateProviderResponseSubscription = /* GraphQL */ `
  subscription OnUpdateProviderResponse(
    $filter: ModelSubscriptionProviderResponseFilterInput
  ) {
    onUpdateProviderResponse(filter: $filter) {
      id
      sosEventId
      status
      providerResponseProviderId
    }
  }
`;

export const onCreateProviderResponseSubscription = /* GraphQL */ `
  subscription OnCreateProviderResponse(
    $filter: ModelSubscriptionProviderResponseFilterInput
  ) {
    onCreateProviderResponse(filter: $filter) {
      id
      sosEventId
      status
      providerResponseProviderId
    }
  }
`;

export const onUpdateSosEventSubscription = /* GraphQL */ `
  subscription OnUpdateSosEvent($filter: ModelSubscriptionSosEventFilterInput) {
    onUpdateSosEvent(filter: $filter) {
      id
      status
      place
      requesterId
    }
  }
`;

export const onCreateSosEventSubscription = /* GraphQL */ `
  subscription OnCreateSosEvent($filter: ModelSubscriptionSosEventFilterInput) {
    onCreateSosEvent(filter: $filter) {
      id
      status
      place
      requesterId
    }
  }
`;
