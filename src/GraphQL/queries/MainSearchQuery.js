import gql from 'graphql-tag';

export const MainSearchQuery = gql`
query MainSearchQuery($qText: String!, $count: Int!){
  twitter {
    search(q: $qText, count: $count, result_type: mixed) {
      id
      text
      created_at
      user{
        name
        profile_image_url
        screen_name
        followers_count
        tweets_count
      }
    }
  }
}`;