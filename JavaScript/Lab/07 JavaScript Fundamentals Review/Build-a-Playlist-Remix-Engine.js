const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

/**
 * Flattens an array of playlists into a single one
 */
function flattenPlaylists(playlists) {
  const newPlaylist = [];

  if(Array.isArray(playlists) && playlists.length > 0) {
    for(let i = 0; i < playlists.length; i++) {
      for(let j = 0; j < playlists[i].length; j++) {
        newPlaylist.push({
          ...playlists[i][j],
          source: [i,j]
        });
      }
    }
  }

  return newPlaylist;
}

/**
 * Calculates the score for each track
 */
function scoreTracks(tracks) {
  const scoredTracks = [];

  for(let track of tracks) {
    scoredTracks.push({
      ...track,
      score: track.votes * 10 - Math.abs(track.bpm - 120)
    });
  }

  return scoredTracks;
}

/**
 * Returns a playlist with duplicate TrackIds removed
 */
function dedupeTracks(tracks) {
  const dedupedTracks = [];

  for(let track of tracks) {
    if(!dedupedTracks.find(item => item.trackId == track.trackId)) {
      dedupedTracks.push(track);
    }
  }

  return dedupedTracks;
}

/**
 * Returns a playlist, that enforces a maximum appearance per Artist
 */
function enforceArtistQuota(tracks, maxArtistQuota) {
  const enforcedPlaylist = [];

  for(let track of tracks) {
    if(enforcedPlaylist.filter(item => item.artist == track.artist).length < maxArtistQuota) {
      enforcedPlaylist.push(track);
    }
  }

  return enforcedPlaylist;
}

/**
 * Builds a schedule based on a playlist
 */
function buildSchedule(tracks) {
  const schedule = [];

  for(let i = 1; i <= tracks.length; i++) {
    schedule.push({
      slot: i,
      trackId: tracks[i-1].trackId
    });
  }

  return schedule;
}

/**
 * Remixes an Array of playlists
 */
function remixPlaylist(playlists, maxArtistQuota) {
  let newPlaylist = flattenPlaylists(playlists);
  newPlaylist = scoreTracks(newPlaylist);
  newPlaylist = dedupeTracks(newPlaylist);
  newPlaylist = enforceArtistQuota(newPlaylist, maxArtistQuota);
  newPlaylist = buildSchedule(newPlaylist);

  return newPlaylist
}

console.log(remixPlaylist(playlists, 1))