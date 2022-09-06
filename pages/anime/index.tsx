import { useState } from 'react'
import { GetServerSideProps } from 'next'
import Header from 'components/header'
import Layout from 'components/layout'
import Loader from 'components/loader'
import AnimeList from 'components/anime/anime_list'
import AnimePagination from 'components/anime/anime_pagination'
import { getAnimeSearch } from 'api'
import { IAnimeItem, IPagination } from 'types'

type Props = {
  items: IAnimeItem[]
  pagination: IPagination
}

const Anime = ({ items: _items, pagination: _pagination }: Props) => {
  const [pagination, setPagination] = useState(_pagination)
  const [items, setItems] = useState(_items)
  const [loading, setLoading] = useState(false)

  const handleChangePage = (page: number) => {
    setLoading(true)
    getAnimeSearch({ page, limit: 9 })
      .then((res) => {
        setPagination(res.pagination)
        setItems(res.data)
      })
      .finally(() => setLoading(false))
  }

  return (
    <>
      {loading && <Loader />}
      <Header />
      <Layout>
        <div className="anime-list__wrapper">
          <AnimeList items={items} />
          <div className="anime-list__pagination">
            <AnimePagination
              page={pagination.current_page}
              total={pagination.items.total}
              perPage={pagination.items.per_page}
              onChange={handleChangePage}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const search = await getAnimeSearch({ page: 1, limit: 9 })

  return {
    props: {
      pagination: search.pagination,
      items: search.data,
    },
  }
}

export default Anime
