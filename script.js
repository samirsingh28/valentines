document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const main = document.getElementById("main");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const message = document.getElementById("message");
  const yesSong = document.getElementById("yesSong");
  const noSong = document.getElementById("noSong");
  const loveNote = document.getElementById("loveNote");

  let heartsTimer = null;

  envelope.addEventListener("click", () => {
    envelope.classList.add("opened");
    setTimeout(() => main.classList.remove("hidden"), 500);
  });

  yesBtn.addEventListener("click", (e) => {
    noSong.pause();
    noSong.currentTime = 0;

    yesSong.volume = 0;
    yesSong.play().catch(() => {});
    let vol = 0;
    const fade = setInterval(() => {
      vol += 0.05;
      yesSong.volume = Math.min(vol, 1);
      if (vol >= 1) clearInterval(fade);
    }, 120);

    message.textContent = "She said YES 😍💖";
    loveNote.classList.remove("hidden");
    startHearts();
    fireworks(e.clientX || window.innerWidth/2, e.clientY || window.innerHeight/2);
  });

  noBtn.addEventListener("mouseover", () => {
    noBtn.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 80 - 40}px)`;
  });

  noBtn.addEventListener("click", () => {
    yesSong.pause();
    yesSong.currentTime = 0;
    noSong.play().catch(() => {});
    message.textContent =
      "Wise man says, only fools fall in love… but I can’t help falling in love with you 😔💔";
  });

  function startHearts() {
    if (heartsTimer) return;
    heartsTimer = setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 3 + 2 + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }, 300);
  }

  function fireworks(x, y) {
    const emojis = ["🎆", "✨", "💥", "🎇", "💖"];
    for (let i = 0; i < 30; i++) {
      const p = document.createElement("div");
      p.className = "firework";
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      p.style.left = x + "px";
      p.style.top = y + "px";
      p.style.setProperty("--x", (Math.random() - 0.5) * 600 + "px");
      p.style.setProperty("--y", (Math.random() - 0.5) * 400 + "px");
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1200);
    }
  }
});
