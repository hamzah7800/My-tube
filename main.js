const videoListData = [
  {
    title: "Cool Tech Video",
    filename: "cool_video.mp4",
    thumbnail: "cool_video.jpg"
  }
];

const listEl = document.getElementById('videoList');
const player = document.getElementById('videoPlayer');
const titleEl = document.getElementById('videoTitle');

function loadVideos(videos) {
  listEl.innerHTML = '';
  videos.forEach(v => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
      <img src="thumbnails/${v.thumbnail}" alt="${v.title}">
      <div class="video-info"><p>${v.title}</p></div>
    `;
    card.onclick = () => {
      player.src = `videos/${v.filename}`;
      titleEl.textContent = v.title;
    };
    listEl.appendChild(card);
  });
}

document.getElementById('searchBtn').addEventListener('click', () => {
  const q = document.getElementById('searchInput').value.toLowerCase();
  loadVideos(videoListData.filter(v => v.title.toLowerCase().includes(q)));
});

// Initialize
loadVideos(videoListData);
