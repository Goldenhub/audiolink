export interface PlaylistItem {
  id: number;
  title: string;
  artist: string;
  duration: string;
  albumArt: string;
}

export const playlistItems: PlaylistItem[] = [
  { id: 1, title: "Sunrise Serenade", artist: "Acoustic Dreams", duration: "3:45", albumArt: "https://placehold.co/250x250/a78bfa/ffffff?text=Sunrise+Serenade" },
  { id: 2, title: "City Lights", artist: "Urban Echoes", duration: "4:10", albumArt: "https://placehold.co/250x250/8b5cf6/ffffff?text=City+Lights" },
  { id: 3, title: "Forest Whisper", artist: "Nature Sounds", duration: "2:55", albumArt: "https://placehold.co/250x250/6366f1/ffffff?text=Forest+Whisper" },
  { id: 4, title: "Ocean Breeze", artist: "Relaxation Waves", duration: "5:00", albumArt: "https://placehold.co/250x250/4f46e5/ffffff?text=Ocean+Breeze" },
  { id: 5, title: "Mountain Peak", artist: "Adventure Tunes", duration: "3:20", albumArt: "https://placehold.co/250x250/3730a3/ffffff?text=Mountain+Peak" },
  { id: 6, title: "Starlight Dance", artist: "Cosmic Melodies", duration: "4:30", albumArt: "https://placehold.co/250x250/1e293b/ffffff?text=Starlight+Dance" },
  { id: 7, title: "Desert Bloom", artist: "Wanderlust Beats", duration: "3:15", albumArt: "https://placehold.co/250x250/f97316/ffffff?text=Desert+Bloom" },
  { id: 8, title: "River Flow", artist: "Tranquil Tracks", duration: "4:05", albumArt: "https://placehold.co/250x250/fbbf24/ffffff?text=River+Flow" },
  { id: 9, title: "Sky High", artist: "Uplifting Anthems", duration: "3:50", albumArt: "https://placehold.co/250x250/facc15/ffffff?text=Sky+High" },
  { id: 10, title: "Nightfall", artist: "Dreamy Harmonies", duration: "4:25", albumArt: "https://placehold.co/250x250/eab308/ffffff?text=Nightfall" },
];
