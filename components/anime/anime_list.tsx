import styled from 'styled-components'
import AnimeItem from './anime_item'
import { IAnimeItem } from 'types'

type Props = {
  items: IAnimeItem[]
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  row-gap: 38px;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto auto auto;
    column-gap: 55px;
  }
`

const AnimeList = ({ items }: Props) => (
  <Wrapper>
    {items.map((item) => (
      <AnimeItem key={item.mal_id} item={item} />
    ))}
  </Wrapper>
)

export default AnimeList
