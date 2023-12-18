/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProject = /* GraphQL */ `subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
  onCreateProject(filter: $filter) {
    id
    name
    description
    platform
    status
    published_date
    expirated_date
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProjectSubscriptionVariables,
  APITypes.OnCreateProjectSubscription
>;
export const onUpdateProject = /* GraphQL */ `subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
  onUpdateProject(filter: $filter) {
    id
    name
    description
    platform
    status
    published_date
    expirated_date
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProjectSubscriptionVariables,
  APITypes.OnUpdateProjectSubscription
>;
export const onDeleteProject = /* GraphQL */ `subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
  onDeleteProject(filter: $filter) {
    id
    name
    description
    platform
    status
    published_date
    expirated_date
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProjectSubscriptionVariables,
  APITypes.OnDeleteProjectSubscription
>;
