const videoPlayer = document.getElementById('videoPlayer');
const videoTitle = document.getElementById('videoTitle');
const videoList = document.getElementById('videoList');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// Example video data (in real app, fetch from backend)
const videos = [
  {
    title: "Sample Video",
    filename: "sample.mp4",
    thumbnail: "thumbnails/sample.jpg",
    views: "1.2M views",
    uploaded: "2 weeks ago"
  },
  {
    title: "Another Demo",
    filename: "demo.mp4",
    thumbnail: "thumbnails/demo.jpg",
    views: "345K views",
    uploaded: "1 month ago"
  },
  // Add more videos as needed
];

// Populate the sidebar list of videos
function loadVideoList(videoArray) {
  videoList.innerHTML = '';
  videoArray.forEach(video => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
      <img src="${video.thumbnail}" alt="${video.title}" />
      <div class="video-info">
        <p>${video.title}</p>
        <small>${video.views} • ${video.uploaded}</small>
      </div>
    `;
    card.onclick = () => {
      playVideo(video.filename, video.title);
    };
    videoList.appendChild(card);
  });
}

// Change video in the player
function playVideo(filename, title) {
  videoPlayer.src = 'videos/' + filename;
  videoTitle.textContent = title;
  videoPlayer.play();
}

// Search videos by title
function searchVideos() {
  const query = searchInput.value.toLowerCase();
  const filtered = videos.filter(v => v.title.toLowerCase().includes(query));
  loadVideoList(filtered);
}

searchBtn.onclick = searchVideos;
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') searchVideos();
});

// Load initial video list
loadVideoList(videos);

