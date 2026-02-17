const images = [
  {file: "assets/photos/2.jpg", title: "Memory 1", caption: "Our beautiful moment 💙"},
  {file: "assets/photos/3.jpg", title: "Memory 2", caption: "Your smile 😍"},
  {file: "assets/photos/7.jpg", title: "Memory 6", caption: "Bus ride 🚌"},
  {file: "assets/photos/8.jpg", title: "Memory 7", caption: "Happy together"},
  {file: "assets/photos/9.jpg", title: "Memory 8", caption: "Always smiling"},
  {file: "assets/photos/10.jpg", title: "Memory 9", caption: "My favorite girl 💙"},
  {file: "assets/photos/11.jpg", title: "Memory 10", caption: "Forever & always"}
];



const galleryEl = document.getElementById("gallery");
images.forEach(img => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${img.file}" alt="${img.title}">
    <h3>${img.title}</h3>
    <p>${img.caption}</p>
  `;
  card.onclick = () => window.open(img.file, "_blank");
  galleryEl.appendChild(card);
});

const bg = document.getElementById("bgMusic");
const btn = document.getElementById("playPause");
btn.addEventListener("click", () => {
  if(bg.paused){ bg.play(); btn.textContent = "Pause Music"; }
  else { bg.pause(); btn.textContent = "Play Music"; }
});

document.getElementById("openGallery").addEventListener("click", () => {
  document.getElementById("gallery").scrollIntoView({behavior:"smooth"});
});
