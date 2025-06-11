const videos = [
  {
    title: "Cool Tech Review",
    filename: "cool-tech.mp4",
    thumbnail: "cool-tech.jpg"
  },
  {
    title: "Epic Build Showcase",
    filename: "build-showcase.mp4",
    thumbnail: "build-showcase.jpg"
  }
];

const list = document.getElementById("video-list");
const search = document.getElementById("search");

function displayVideos(filter = "") {
  list.innerHTML = "";
  videos
    .filter(v => v.title.toLowerCase().includes(filter.toLowerCase()))
    .forEach(video => {
      const div = document.createElement("div");
      div.className = "video-card";
      div.innerHTML = `
        <img src="thumbnails/${video.thumbnail}" alt="${video.title}">
        <div class="title">${video.title}</div>
      `;
      div.onclick = () => {
        location.href = `watch.html?v=${video.filename}`;
      };
      list.appendChild(div);
    });
}

search?.addEventListener("input", () => displayVideos(search.value));

displayVideos();
