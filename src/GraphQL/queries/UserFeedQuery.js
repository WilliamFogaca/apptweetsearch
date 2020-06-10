import gql from 'graphql-tag';

export const UserFeedQuery = gql`
query UserFeedQuery($userScreenName: UserIdentity!, $count: Int!){
  twitter {
    user (identifier: name, identity: $userScreenName) {
      tweets(limit: $count) {
        user {
          name
          profile_image_url
        }
        id
        created_at
        text
      }
    }
  }
}`;