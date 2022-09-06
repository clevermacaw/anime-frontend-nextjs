import { useState } from 'react'
import { GetServerSideProps } from 'next'
import Header from 'components/header'
import Footer from 'components/footer'
import Layout from 'components/layout'
import Loader from 'components/loader'
import AnimeList from 'components/anime/anime_list'
import AnimePagination from 'components/anime/anime_pagination'
import SearchModal from 'components/anime/search_modal'
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
  const [searchModalVisible, setSearchModalVisible] = useState(false)

  const handleChangePage = (page: number) => {
    setLoading(true)
    getAnimeSearch({ page, limit: 9 })
      .then((res) => {
        setPagination(res.pagination)
        setItems(res.data)
      })
      .finally(() => setLoading(false))
  }

  const handleShowSearchModal = () => {
    setSearchModalVisible(true)
  }

  const handleCloseSearchModal = () => {
    setSearchModalVisible(false)
  }

  return (
    <>
      {loading && <Loader />}
      <SearchModal show={searchModalVisible} onClose={handleCloseSearchModal} />
      <Header onStartSearch={handleShowSearchModal} />
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
      <Footer />
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
