import axios from 'axios'
import _ from 'lodash'

const axiosInstance = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
})

const filter = (item: Record<string, any>) =>
  _.pick(item, [
    'mal_id',
    'images',
    'approved',
    'episodes',
    'popularity',
    'rank',
    'score',
    'scored_by',
    'title',
    'type',
    'source',
    'status',
    'synopsis',
  ])

export const getAnimeSearch = ({
  page,
  limit,
  query = '',
}: {
  page: number
  limit: number
  query?: string
}) =>
  axiosInstance
    .get('/anime', { params: { page, limit, q: query, sort: 'desc' } })
    .then((res) => {
      return {
        data: res.data.data.map(filter),
        pagination: res.data.pagination,
      }
    })

export const getAnimeById = ({ id }: { id: number }) =>
  axiosInstance.get(`/anime/${id}`).then((res) => filter(res.data.data))
