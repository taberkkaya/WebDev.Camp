const container = document.querySelector(".container");
const img = document.querySelector("#music-img");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");
const duration = document.querySelector("#duration");
const current_time = document.querySelector("#current-time");
const progress_bar = document.querySelector("#progress-bar");
const volume = document.querySelector("#volume");
const volume_bar = document.querySelector("#volume-bar");
const music_list = document.querySelector("ul");

const player = new MusicPlayer(musicList);

window.addEventListener("load", () => {
  let music = player.getMusic();
  displayMusic(music);
  displayMusicList(player.musicList);
  isPlaying();
});

function displayMusic(music) {
  title.innerText = music.getName();
  singer.innerText = music.singer;
  img.src = "img/" + music.img;
  audio.src = "mp3/" + music.file;
}

play.addEventListener("click", () => {
  const isMusicPlay = container.classList.contains("playing");
  isMusicPlay ? pauseMusic() : playMusic();
});

prev.addEventListener("click", () => {
  prevMusic();
});

next.addEventListener("click", () => {
  nextMusic();
});

function pauseMusic() {
  container.classList.remove("playing");
  play.querySelector("i").classList = "fa-solid fa-play";
  audio.pause();
}

function playMusic() {
  container.classList.add("playing");
  play.querySelector("i").classList = "fa-solid fa-pause";
  audio.play();
}

function prevMusic() {
  player.prev();
  let music = player.getMusic();
  displayMusic(music);
  isPlaying();
  playMusic();
}

function nextMusic() {
  player.next();
  let music = player.getMusic();
  displayMusic(music);
  isPlaying();
  playMusic();
}

const calculateTime = (totalSeconds) => {
  const minute = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const updatedSecond = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const result = `${minute}:${updatedSecond}`;
  return result;
};

audio.addEventListener("loadedmetadata", () => {
  duration.textContent = calculateTime(audio.duration);
  progress_bar.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  progress_bar.value = Math.floor(audio.currentTime);
  current_time.textContent = calculateTime(progress_bar.value);
});

let voiceState = "voiced";

volume_bar.addEventListener("input", (e) => {
  const value = e.target.value;
  audio.volume = value / 100;
  if (value == 0) {
    audio.muted = true;
    voiceState = "muted";
    volume.classList = "fa-solid fa-volume-xmark";
  } else {
    audio.muted = false;
    voiceState = "voiced";
    volume.classList = "fa-solid fa-volume-high";
  }
});

volume.addEventListener("click", () => {
  if (voiceState === "voiced") {
    audio.muted = true;
    voiceState = "muted";
    volume.classList = "fa-solid fa-volume-xmark";
    volume_bar.value = 0;
  } else {
    audio.muted = false;
    voiceState = "voiced";
    volume.classList = "fa-solid fa-volume-high";
    volume_bar.value = 100;
    audio.value = 1;
  }
});

progress_bar.addEventListener("input", () => {
  current_time.textContent = calculateTime(progress_bar.value);
  audio.currentTime = progress_bar.value;
});

const displayMusicList = (list) => {
  for (let i = 0; i < list.length; i++) {
    let liTag = `<li li-index='${i}' onclick=selectedMusic(this) class="list-group-item d-flex justify-content-between align-item-center">
                    <span>${list[i].getName()}</span>
                    <span id="music-${i}" class="badge bg-primary rounded-pill"></span>
                    <audio class="music-${i}" src="mp3/${list[i].file}"></audio>
                </li>`;

    music_list.insertAdjacentHTML("beforeend", liTag);

    let liAudioDuration = music_list.querySelector(`#music-${i}`);
    let liAudioTag = music_list.querySelector(`.music-${i}`);

    liAudioTag.addEventListener("loadeddata", () => {
      liAudioDuration.textContent = calculateTime(liAudioTag.duration);
    });
  }
};

const selectedMusic = (li) => {
  player.index = li.getAttribute("li-index");
  displayMusic(player.getMusic());
  playMusic();
  isPlaying();
};

const isPlaying = () => {
  for (let li of music_list.querySelectorAll("li")) {
    if (li.classList.contains("playing")) {
      li.classList.remove("playing");
    }
    if (li.getAttribute("li-index") == player.index) {
      li.classList.add("playing");
    }
  }
};

audio.addEventListener("ended", () => {
  nextMusic();
});
