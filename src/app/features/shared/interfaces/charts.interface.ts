export interface chart {
  albums: base_albums;
  tracks: base_tracks;
  artists: base_artist;
  playlists: base_playList;
  podcasts: base_podcasts;
}

export interface base_albums {
  data: album_data[];
  total: number;
}

export interface base_artist {
  data: full_artist_data[];
  total: number;
}

export interface base_playList {
  data: play_list[];
  total: number;
}

export interface base_tracks {
  data: track_data[];
  total: number;
}

export interface base_podcasts {
  data: podcast[];
  total: number;
}

export interface podcast {
  available: boolean;
  description: boolean;
  fans: number;
  id: number;
  link: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  share: string;
  title: string;
  type: string;
}

export interface album_data {
  artist: artist_data;
  cover: string;
  cover_big: string;
  cover_medium: string;
  cover_small: string;
  cover_xl: string;
  explicit_lyrics: boolean;
  id: number;
  link: string;
  md5_image: string;
  position: number;
  record_type: number;
  title: string;
  tracklist: string;
  type: string;
}

export interface artist_data {
  id: number;
  link: string;
  name: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
  type: string;
}

export interface full_artist_data {
  id: number;
  link: string;
  name: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  position: number;
  radio: boolean;
  tracklist: string;
  type: string;
}

export interface play_list {
  checksum: string;
  creation_date: string;
  id: number;
  link: string;
  md5_image: string;
  nb_tracks: number;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  picture_type: string;
  public: boolean;
  title: string;
  tracklist: string;
  type: string;
}

export interface track_data {
  album: track_album;
  artist: artist_data;
  duration: number;
  explicit_content_cover: number;
  explicit_content_lyrics: number;
  explicit_lyrics: boolean;
  id: number;
  link: string;
  md5_image: string;
  position: number;
  preview: string;
  rank: number;
  title: string;
  title_short: string;
  title_version: string;
  type: string;
}

export interface track_album {
  cover: string;
  cover_big: string;
  cover_medium: string;
  cover_small: string;
  cover_xl: string;
  id: number;
  md5_image: string;
  title: string;
  tracklist: string;
  type: string;
}
