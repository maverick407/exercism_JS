// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  const newPlaylist = new Set();
  for (let i = 0; i < playlist.length; i++) {
    newPlaylist.add(playlist[i]);
  }
  return Array.from(newPlaylist);
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const list = new Set(playlist);
  const oldSize = list.size;
  list.add(track);
  if(list.size == oldSize){
    return true;
  }else{
    return false;
  }
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const pl = new Set(playlist);
  pl.add(track);
  return Array.from(pl);
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const pl = new Set(playlist);
  pl.delete(track);
  return Array.from(pl);
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const artists = new Set();
  for (let x = 0; x < playlist.length; x++) {
    let artist = playlist[x].split('-');
    artists.add(artist[1].trim());
  }
  return Array.from(artists);
}
