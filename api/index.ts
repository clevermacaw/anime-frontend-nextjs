import axios from 'axios'
import _ from 'lodash'

const axiosInstance = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
})

const filter = (item: Record<string, any>) =>
  _.pick(item, [
    'mal_id',
    'images',
    'popularity',
    'rank',
    'score',
    'scored_by',
    'title',
    'source',
    'status',
    'synopsis',
  ])

export const getAnimeSearch = ({
  page,
  limit,
}: {
  page: number
  limit: number
}) =>
  axiosInstance.get('/anime', { params: { page, limit } }).then((res) => {
    return {
      data: res.data.data.map(filter),
      pagination: res.data.pagination,
    }
  })
