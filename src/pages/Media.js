import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, Maximize2, SkipBack, SkipForward, Download, Loader, Sparkles } from 'lucide-react';

const MediaPlayer = () => {
  const [activeTab, setActiveTab] = useState('videos');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime] = useState(0);
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
  const AUDIO_CHANNEL_ID = 'YOUR_AUDIO_CHANNEL_ID';
  const MAX_RESULTS = 5;

  // Convert ISO 8601 duration (PT25M30S) → "25:30"
  const convertDuration = (isoDuration) => {
    if (!isoDuration) return "0:00";
    const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return "0:00";
    
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
    if (!num) return '0';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  // Format date to relative time
  const formatDate = (dateString) => {
    if (!dateString) return '';
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

  // Fetch YouTube Data (Mocked for safety if API key is missing, otherwise runs fetch)
  useEffect(() => {
    const fetchAllMedia = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Safety check to prevent crashing if API key isn't set yet
        if (API_KEY === 'YOUR_YOUTUBE_API_KEY') {
           setTimeout(() => {
             // Mock Data to show the UI design immediately
             setMediaItems({
               videos: [
                 { id: '1', title: 'The Power of Purpose-Driven Leadership', description: 'Discover how aligning your core values with your business strategy creates unstoppable momentum.', thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', date: '2 days ago', views: '12.5K', duration: '18:24' },
                 { id: '2', title: 'Mastering the Art of Public Speaking', description: 'Techniques to overcome anxiety and deliver keynotes that leave a lasting impact on your audience.', thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80', date: '1 week ago', views: '8.2K', duration: '24:15' }
               ],
               audio: [
                 { id: '3', title: 'One Percent Life Podcast: Episode 42', description: 'A deep dive into intentional living and daily habits that compound into massive success over time.', thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80', date: '3 days ago', plays: '5.4K', duration: '45:30' },
                 { id: '4', title: 'Relationship Mastery Audio Series: Part 1', description: 'Understanding the foundational pillars of communication in both personal and professional relationships.', thumbnail: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80', date: '2 weeks ago', plays: '15K', duration: '32:10' }
               ]
             });
             setLoading(false);
           }, 1000);
           return;
        }

        // Actual Fetch Logic (Runs if real API key is provided)
        const fetchYouTubeVideos = async () => {
          const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${VIDEO_CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=date&type=video&key=${API_KEY}`);
          if (!res.ok) throw new Error('Failed to fetch videos');
          const data = await res.json();
          
          return Promise.all(data.items.map(async (item) => {
            const vidRes = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${item.id.videoId}&key=${API_KEY}`);
            const vidData = await vidRes.json();
            const details = vidData.items[0];
            return {
              id: item.id.videoId,
              title: item.snippet.title,
              description: item.snippet.description,
              thumbnail: item.snippet.thumbnails.high.url,
              date: formatDate(item.snippet.publishedAt),
              views: formatViews(details.statistics.viewCount),
              duration: convertDuration(details.contentDetails.duration),
            };
          }));
        };

        const fetchYouTubeAudio = async () => {
          const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${AUDIO_CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=date&type=video&key=${API_KEY}`);
          if (!res.ok) throw new Error('Failed to fetch audio');
          const data = await res.json();
          
          return Promise.all(data.items.map(async (item) => {
             const vidRes = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${item.id.videoId}&key=${API_KEY}`);
             const vidData = await vidRes.json();
             const details = vidData.items[0];
             return {
               id: item.id.videoId,
               title: item.snippet.title,
               description: item.snippet.description,
               thumbnail: item.snippet.thumbnails.high.url,
               date: formatDate(item.snippet.publishedAt),
               plays: formatViews(details.statistics.viewCount),
               duration: convertDuration(details.contentDetails.duration),
             };
          }));
        };

        const [videos, audio] = await Promise.all([fetchYouTubeVideos(), fetchYouTubeAudio()]);
        setMediaItems({ videos, audio });
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
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-5 sm:p-6 hover:border-orange-500/30 transition-all group">
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
        {/* Thumbnail */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <img
            src={audio.thumbnail}
            alt={audio.title}
            className="w-full h-full rounded-2xl object-cover grayscale-[20%] border border-white/10"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 rounded-2xl">
            <Play className="w-8 h-8 text-orange-500 ml-1" />
          </div>
        </div>

        {/* Audio Content */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase tracking-widest text-orange-500 font-semibold border border-orange-500/30 px-2 py-0.5 rounded-full">
              Podcast
            </span>
            <span className="text-[10px] text-gray-500 tracking-wider">{audio.date}</span>
          </div>
          
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-white truncate tracking-wide">{audio.title}</h3>
          <p className="text-gray-400 font-light mb-4 text-sm line-clamp-2 leading-relaxed">{audio.description}</p>

          {/* Audio Player Controls */}
          <div className="space-y-4">
            {/* Progress Bar */}
            <div className="relative group/progress cursor-pointer h-2 flex items-center">
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full relative"
                  style={{ width: `${(currentTime / 300) * 100}%` }}
                >
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-[0_0_10px_rgba(249,115,22,1)]"></div>
                </div>
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="text-gray-500 hover:text-white transition-colors">
                  <SkipBack className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button 
                  className="bg-white text-black p-2.5 sm:p-3 rounded-full hover:scale-105 transition-transform"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />}
                </button>
                <button className="text-gray-500 hover:text-white transition-colors">
                  <SkipForward className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <span className="text-xs text-gray-500 font-light ml-2">
                  {formatTime(currentTime)} / {audio.duration}
                </span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative hidden sm:flex items-center gap-2 group/volume">
                  <Volume2 className="w-4 h-4 text-gray-500 group-hover/volume:text-orange-500 transition-colors" />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-16 h-1 accent-orange-500 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                {/* Mobile Volume Toggle */}
                <button 
                  className="sm:hidden text-gray-500 hover:text-white"
                  onClick={() => setShowVolumeControl(!showVolumeControl)}
                >
                  <Volume2 className="w-4 h-4" />
                </button>
                
                <a 
                  href={`https://www.youtube.com/watch?v=${audio.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-orange-500 transition-colors p-2 bg-white/5 rounded-full border border-white/5"
                  title="Watch on YouTube"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            {/* Mobile Expanded Volume Control */}
            {showVolumeControl && (
              <div className="sm:hidden p-3 bg-[#0a0a0a] border border-white/10 rounded-xl mt-2 flex items-center gap-3">
                <Volume2 className="w-4 h-4 text-orange-500" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full h-1 accent-orange-500 bg-white/10 rounded-lg appearance-none"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-10 h-10 text-orange-500 animate-spin mx-auto mb-6" />
          <p className="text-xs text-orange-500 uppercase tracking-[0.2em] font-semibold">Loading Media</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <p className="text-red-400 mb-4 font-semibold tracking-wide">{error}</p>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Please ensure you've set your YouTube API key and channel IDs in the component configuration.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans relative overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-5">
            <Sparkles className="w-3.5 h-3.5 text-orange-500 mr-2.5" />
            <span className="text-orange-500 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
              Media Library
            </span>
          </div>
          <h1 className="font-['Anton'] text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide text-white mb-4">
            Inspirational <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">Content</span>
          </h1>
          <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Transform your life through our curated collection of keynotes, coaching sessions, and podcasts.
          </p>
        </div>

        {/* Tab Navigation (Pill Design) */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-[#0a0a0a] border border-white/10 rounded-full p-1.5 backdrop-blur-md">
            {['videos', 'audio'].map((tab) => (
               <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                 activeTab === tab 
                   ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-[0_4px_15px_rgba(249,115,22,0.3)]' 
                   : 'text-gray-400 hover:text-white hover:bg-white/5'
               }`}
             >
                {tab === 'audio' ? 'Podcasts' : 'Videos'}
              </button>
            ))}
          </div>
        </div>

        {/* Video Section */}
        {activeTab === 'videos' ? (
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {mediaItems.videos.map((video, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-orange-500/30 transition-all duration-500">
                {/* Video Player / Thumbnail */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale-[10%]"
                  />
                  
                  {/* Play Button Overlay */}
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]"
                  >
                    <div className="bg-orange-500 text-white p-4 rounded-full transform hover:scale-110 transition-transform shadow-[0_0_20px_rgba(249,115,22,0.5)]">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                  </a>
                  
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a 
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/50 backdrop-blur-md p-2 rounded-xl border border-white/10 block hover:bg-orange-500 transition-colors"
                      title="Watch on YouTube"
                    >
                      <Maximize2 className="w-4 h-4 text-white" />
                    </a>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 z-20 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white tracking-widest border border-white/10">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6 md:p-8 relative">
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-widest text-orange-500 font-semibold border border-orange-500/30 px-2.5 py-1 rounded-full">
                      Video Keynote
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white tracking-wide leading-tight group-hover:text-orange-400 transition-colors">{video.title}</h3>
                  <p className="text-sm text-gray-400 font-light mb-6 line-clamp-2 leading-relaxed">{video.description}</p>
                  
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                    <span className="flex items-center gap-2"><Play className="w-3 h-3" /> {video.views} views</span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ): (
          /* Audio Section */
          <div className="space-y-6 max-w-4xl mx-auto">
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