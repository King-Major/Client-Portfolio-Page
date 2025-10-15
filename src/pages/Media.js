import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, Maximize2, SkipBack, SkipForward, Download, Loader } from 'lucide-react';

const MediaPlayer = () => {
  const [activeTab, setActiveTab] = useState('videos');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(80);
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const [mediaItems, setMediaItems] = useState({
    videos: [],
    audio: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // YouTube API Configuration
  const API_KEY = 'YOUR_YOUTUBE_API_KEY';
  const VIDEO_CHANNEL_ID = 'YOUR_VIDEO_CHANNEL_ID';
  const AUDIO_CHANNEL_ID = 'YOUR_AUDIO_CHANNEL_ID'; // Can be same or different
  const MAX_RESULTS = 5;

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
    return num.toString();
  };

  // Format date to relative time
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  // Fetch YouTube Videos
  const fetchYouTubeVideos = async () => {
    try {
      const searchResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${VIDEO_CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=date&type=video&key=${API_KEY}`
      );
      
      if (!searchResponse.ok) throw new Error('Failed to fetch videos');
      
      const searchData = await searchResponse.json();

      const videoData = await Promise.all(
        searchData.items.map(async (item) => {
          const videoId = item.id.videoId;

          const detailsResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoId}&key=${API_KEY}`
          );
          
          const detailsData = await detailsResponse.json();
          const videoDetails = detailsData.items[0];

          const duration = videoDetails.contentDetails.duration;
          const views = videoDetails.statistics.viewCount;

          return {
            id: videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.high.url,
            date: formatDate(item.snippet.publishedAt),
            views: formatViews(views),
            duration: convertDuration(duration),
          };
        })
      );

      return videoData;
    } catch (err) {
      console.error('Error fetching videos:', err);
      throw err;
    }
  };

  // Fetch YouTube Audio (from audio/podcast channel)
  const fetchYouTubeAudio = async () => {
    try {
      const searchResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${AUDIO_CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=date&type=video&key=${API_KEY}`
      );
      
      if (!searchResponse.ok) throw new Error('Failed to fetch audio');
      
      const searchData = await searchResponse.json();

      const audioData = await Promise.all(
        searchData.items.map(async (item) => {
          const videoId = item.id.videoId;

          const detailsResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoId}&key=${API_KEY}`
          );
          
          const detailsData = await detailsResponse.json();
          const videoDetails = detailsData.items[0];

          const duration = videoDetails.contentDetails.duration;
          const views = videoDetails.statistics.viewCount;

          return {
            id: videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.default.url,
            date: formatDate(item.snippet.publishedAt),
            plays: formatViews(views),
            duration: convertDuration(duration),
          };
        })
      );

      return audioData;
    } catch (err) {
      console.error('Error fetching audio:', err);
      throw err;
    }
  };

  // Fetch all media on component mount
  useEffect(() => {
    const fetchAllMedia = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [videos, audio] = await Promise.all([
          fetchYouTubeVideos(),
          fetchYouTubeAudio()
        ]);

        setMediaItems({
          videos,
          audio
        });
      } catch (err) {
        setError('Failed to load media. Please check your API key and channel IDs.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllMedia();
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const AudioPlayer = ({ audio }) => (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {/* Thumbnail */}
        <img
          src={audio.thumbnail}
          alt={audio.title}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
        />

        {/* Audio Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 truncate">{audio.title}</h3>
          <p className="text-gray-600 mb-3 text-sm sm:text-base line-clamp-2">{audio.description}</p>

          {/* Audio Player */}
          <div className="space-y-3">
            {/* Progress Bar */}
            <div className="relative">
              <div className="h-1 bg-gray-200 rounded-full">
                <div 
                  className="absolute h-1 bg-blue-600 rounded-full"
                  style={{ width: `${(currentTime / 300) * 100}%` }}
                />
              </div>
            </div>

            {/* Mobile Controls - Two Rows */}
            <div className="flex flex-col gap-3 sm:hidden">
              {/* Top Row - Main Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button className="text-gray-500">
                    <SkipBack className="w-4 h-4" />
                  </button>
                  <button 
                    className="bg-blue-600 p-2 rounded-full text-white"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button className="text-gray-500">
                    <SkipForward className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-xs text-gray-500">
                  {formatTime(currentTime)} / {audio.duration}
                </span>
              </div>

              {/* Bottom Row - Volume & Download */}
              <div className="flex items-center justify-between">
                <div className="relative">
                  <button 
                    onClick={() => setShowVolumeControl(!showVolumeControl)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Volume2 className="w-4 h-4 text-gray-500" />
                  </button>
                  {showVolumeControl && (
                    <div className="absolute bottom-full left-0 mb-2 p-2 bg-white shadow-lg rounded-lg">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className="w-24"
                      />
                    </div>
                  )}
                </div>
                <a 
                  href={`https://www.youtube.com/watch?v=${audio.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Desktop Controls - Single Row */}
            <div className="hidden sm:flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="text-gray-500 hover:text-gray-700">
                  <SkipBack className="w-5 h-5" />
                </button>
                <button 
                  className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <SkipForward className="w-5 h-5" />
                </button>
                <span className="text-sm text-gray-500">
                  {formatTime(currentTime)} / {audio.duration}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-gray-500" />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-20"
                  />
                </div>
                <a 
                  href={`https://www.youtube.com/watch?v=${audio.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading media content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-600 mb-4">{error}</p>
            <p className="text-sm text-gray-600">
              Please ensure you've set your YouTube API key and channel IDs in the component.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Inspirational Content</h1>
          <p className="text-xl text-gray-600">Transform your life through our curated media collection</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full shadow-sm p-1">
            {['videos', 'audio'].map((tab) => (
               <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`px-6 sm:px-8 py-3 rounded-full transition-all ${
                 activeTab === tab 
                   ? 'bg-blue-600 text-white shadow-md' 
                   : 'text-gray-600 hover:text-gray-900'
               }`}
             >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Video Section */}
        {activeTab === 'videos' ? (
          <div className="grid md:grid-cols-2 gap-8">
            {mediaItems.videos.map((video, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Video Player */}
                <div className="relative group">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover"
                  />
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    <div className="bg-white/90 p-4 rounded-full transform hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-blue-600" />
                    </div>
                  </a>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a 
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-lg block"
                    >
                      <Maximize2 className="w-5 h-5 text-gray-700" />
                    </a>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 px-2 py-1 rounded text-sm text-white">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{video.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{video.views} views</span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ): (
          <div className="space-y-6">
            {mediaItems.audio.map((audio, index) => (
              <AudioPlayer key={index} audio={audio} />
            ))}
          </div>
        )} 
      </div>
    </div>
  );
};

export default MediaPlayer;