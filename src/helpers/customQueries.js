export const onCreateEventQuery = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
      id
      title
      description
      uriImage
      time
      createdAt
      updatedAt
    }
  }
`;

export const getEventsQuery = /* GraphQL */ `
  query ListEventParticipants(
    $filter: ModelEventParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventParticipants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        event {
          uriImage
          updatedAt
          title
          time
          id
          description
          createdAt
        }
      }
      nextToken
      __typename
    }
  }
`;
