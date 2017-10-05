var playlist = { TomPetty: "Free Fallin"};

function updatePlaylist(object, key, value) {
    object[key] = value
    return object
}

function removeFromPlaylist(playlist, artistName)  {
    return delete playlist.artistName;
}

console.log(removeFromPlaylist({Kanye: "Gold"}, "Kanye"));
