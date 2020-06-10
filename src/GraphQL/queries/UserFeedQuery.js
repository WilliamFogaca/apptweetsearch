import gql from 'graphql-tag';

export const UserFeedQuery = gql`
query UserFeedQuery($userScreenName: UserIdentity!, $count: Int!){
  twitter {
    user (identifier: name, identity: $userScreenName) {
      tweets(limit: $count) {
        id
        created_at
        text
      }
    }
  }
}`;