var playlist = { TomPetty: "Free Fallin"};

function updatePlaylist(object, key, value) {
    object[key] = value
    return object
}

function removeFromPlaylist(playlist, artistName)  {
    delete playlist.artistName;
    return playlist
}
