import gql from 'graphql-tag';

export const MainFeedQuery = gql`
{
  graphQLHub
  twitter {
    user (identifier: name, identity: "clayallsopp") {
      created_at
      description
      id
      screen_name
      name
      profile_image_url
      url
      tweets_count
      followers_count
      tweets(limit: 1) {
        text
      }
    }
    tweet(id: "687433440774459392") {
      text,
      retweets(limit: 2) {
        id,
        retweeted_status {
          id
        }
        user {
          screen_name
        }
      }
    }
    search(q: "Javascript", count: 1, result_type: mixed) {
      user {
        screen_name
      }
      id
      text
    }
  }
}`;