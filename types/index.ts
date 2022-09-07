export interface IImage {
  image_url: string
  large_image_url: string
  small_image_url: string
}

export interface IAnimeItem {
  mal_id: number
  images: {
    jpg: IImage
    webp: IImage
  }
  approved: boolean
  episodes: number
  popularity: number
  rank: number
  score: number
  scored_by: number
  title: string
  type: string
  source: string
  status: string
  synopsis: string
}

export interface IPagination {
  current_page: number
  last_visible_page: number
  has_next_page: boolean
  items: {
    count: number
    total: number
    per_page: number
  }
}
