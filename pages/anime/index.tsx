import { GetServerSideProps } from 'next'
import Header from 'components/header'
import Layout from 'components/layout'
import AnimeList from 'components/anime/anime_list'
import AnimePagination from 'components/anime/anime_pagination'
import { getAnimeSearch } from 'api'
import { IAnimeItem, IPagination } from 'types'

type Props = {
  items: IAnimeItem[]
  pagination: IPagination
}

const Anime = ({ items, pagination }: Props) => {
  return (
    <>
      <Header />
      <Layout>
        <div className="anime-list__wrapper">
          <AnimeList items={items} />
          <div className="anime-list__pagination">
            <AnimePagination page={1} />
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
