import axios from 'axios';

const API_KEY = 'YOUR_YOUTUBE_API_KEY';
const CHANNEL_ID = 'YOUR_CHANNEL_ID';
const MAX_RESULTS = 5;

export const fetchYouTubeVideos = async () => {
  const res = await axios.get(
    `https://www.googleapis.com/youtube/v3/search`, {
      params: {
        part: 'snippet',
        channelId: CHANNEL_ID,
        maxResults: MAX_RESULTS,
        order: 'date',
        type: 'video',
        key: API_KEY
      }
    }
  );

  const videoData = await Promise.all(
    res.data.items.map(async (item) => {
      const videoId = item.id.videoId;

      const details = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos`, {
          params: {
            part: 'contentDetails,statistics',
            id: videoId,
            key: API_KEY
          }
        }
      );

      const duration = details.data.items[0].contentDetails.duration; // ISO 8601
      const views = details.data.items[0].statistics.viewCount;

      return {
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
        date: new Date(item.snippet.publishedAt).toDateString(),
        views: formatViews(views),
        duration: convertDuration(duration),
      };
    })
  );

  return videoData;
};

// Convert ISO 8601 duration (PT25M30S) → "25:30"
const convertDuration = (isoDuration) => {
  const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  const seconds = match[3] ? parseInt(match[3]) : 0;
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  const mm = Math.floor(totalSeconds / 60);
  const ss = totalSeconds % 60;
  return `${mm}:${ss.toString().padStart(2, '0')}`;
};

// Format views → "1.2K", "2.3M", etc.
const formatViews = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num;
};
