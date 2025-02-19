export interface specific_artist {
  data: spec_track[];
}

export interface spec_track {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  contributors: Contributor[];
  md5_image: string;
  artist: Artist;
  album: Album;
  type: string;
}

export interface Contributor {
  id: number;
  name: string;
  link: string;
  picture: string;
}

export interface Artist {
  id: number;
  name: string;
  link: string;
  picture: string;
}

export interface Album {
  id: number;
  title: string;
  cover: string;
  tracklist: string;
}
