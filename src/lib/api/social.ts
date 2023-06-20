import { TwitterClient } from 'twitter-api-client';

export const getLatestPostsFromTwitter = async () => {
    const tokens = {
        consumer_key: 'fxoGS9Nd8Q8GS5ECWNzA1wXGw',
        consumer_secret: 'fLsZdURdUvJI4CIQrkxp1Zb0iuEAqXid2HRG5aglXPUCjUx7eh',
        access_token: '294015135-DC5ery6TeRbgv2X8m97IsDCM5MbDIjV8M3HKOSgW',
        access_token_secret: 'iReTwjuBfoX6PJ9deia1krPvL3j5BNCRQBpXVqDmqpKfr'
    };
    
    const twitter = new TwitterClient({
        apiKey: tokens.consumer_key,
        apiSecret: tokens.consumer_secret,
        accessToken: tokens.access_token,
        accessTokenSecret: tokens.access_token_secret
    });

    const data = await twitter.tweets.statusesUserTimeline({
        screen_name: 'TAInitiative',
        count: 7,
        exclude_replies: true,
        include_rts: false,
        tweet_mode: 'extended'
    });


    return data;
}

export const getLatestPostsFromYoutube = async () => {
    const apiKey = 'AIzaSyDBzMk-Bm8-QQKwGHjgpRUoL8OiweyUVKE';
    const channelId = 'UClGfV_kpIvgRITJuw38ZZdA';
    const apiURL = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`;

  try {
    const response = await fetch(apiURL).then((res) => res.json());
    const latestVideo = response.items[0]; // Get the latest video from the response

    // Extract the necessary information from the video
    const videoTitle: string = latestVideo.snippet.title;
    const videoThumbnail = latestVideo.snippet.thumbnails.default;
    const videoThumbnailHigh = latestVideo.snippet.thumbnails.high;
    const videoId: string = latestVideo.id.videoId;
    const description: string = latestVideo.snippet.description;

    return {
      title: videoTitle,
      thumbnail: videoThumbnail,
      thumbnailHigh: videoThumbnailHigh,
      videoId: videoId,
      description,
    };
  } catch (error) {
    console.error('Error retrieving YouTube video:', error);
    return null;
  }
}
