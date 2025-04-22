// Get all the song items
const songItems = document.querySelectorAll('.songItem');

// Initialize the current song index to -1
let currentSongIndex = -1;

// Add an event listener to each song item
songItems.forEach((songItem, index) => {
  songItem.addEventListener('click', () => {
    // Check if the clicked song is the same as the current song
    if (index === currentSongIndex) {
      // If the song is already playing, pause it
      if (!songItems[currentSongIndex].querySelector('audio').paused) {
        pauseSong();
      } else {
        // If the song is paused, play it
        playSong(currentSongIndex);
      }
    } else {
      // If the clicked song is different from the current song, play it
      playSong(index);
    }
  });
});

// Function to play a song
function playSong(index) {
  // Pause the current song if it is playing
  if (currentSongIndex !== -1) {
    pauseSong();
  }

  // Get the audio element for the song
  const audio = songItems[index].querySelector('audio');

  // Play the song
  audio.play();

  // Update the master play section to show that the song is playing
  document.getElementById('masterPlay').classList.add('bi-pause-fill');
  document.getElementById('masterPlay').classList.remove('bi-play-fill');

  // Update the current song index
  currentSongIndex = index;

  // Update the master play section with the song title and artist
  const songTitle = songItems[index].querySelector('h5').textContent;
  const songArtist = songItems[index].querySelector('.subtitle').textContent;
  document.getElementById('title').textContent = songTitle;
  document.querySelector('.subtitle').textContent = songArtist;
}

// Function to pause the current song
function pauseSong() {
  // Get the audio element for the current song
  const audio = songItems[currentSongIndex].querySelector('audio');

  // Pause the song
  audio.pause();

  // Update the master play section to show that the song is paused
  document.getElementById('masterPlay').classList.add('bi-play-fill');
  document.getElementById('masterPlay').classList.remove('bi-pause-fill');
}

// Add an event listener to the master play button
document.getElementById('masterPlay').addEventListener('click', () => {
  // Check if the current song is playing
  if (currentSongIndex !== -1) {
    if (!songItems[currentSongIndex].querySelector('audio').paused) {
      // If the song is playing, pause it
      pauseSong();
    } else {
      // If the song is paused, play it
      playSong(currentSongIndex);
    }
  }
});