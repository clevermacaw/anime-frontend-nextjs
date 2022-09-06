import styled from 'styled-components'
import PrimaryText from 'components/primary_text'
import SecondaryText from 'components/secondary_text'
import { IAnimeItem } from 'types'
import { capitalize } from 'utils'

type Props = {
  anime: IAnimeItem
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 14px;

  &:hover {
    background: #dddddd;
  }
`

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`

const TextWrapper = styled.div`
  flex-grow: 1;
`

const Icon = styled.div`
  color: #bdbdbd;

  &:hover {
    color: black;
  }
`

const SearchResultItem = ({ anime }: Props) => (
  <Container>
    <Thumbnail src={anime.images.jpg.small_image_url} />
    <TextWrapper>
      <PrimaryText>{anime.title}</PrimaryText>
      <SecondaryText>
        {anime.type} · {anime.episodes} Episode · {capitalize(anime.status)}
      </SecondaryText>
    </TextWrapper>
    <Icon>
      <i className="fa-solid fa-chevron-right" />
    </Icon>
  </Container>
)

export default SearchResultItem
