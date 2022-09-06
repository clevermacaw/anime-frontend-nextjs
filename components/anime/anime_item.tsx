import styled from 'styled-components'
import { IAnimeItem } from 'types'

type Props = {
  item: IAnimeItem
}

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 140%;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`

const Title = styled.h6`
  position: absolute;
  left: 12px;
  bottom: 12px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: white;
  margin: 0;
`

const AnimeItem = ({ item }: Props) => (
  <Container>
    <Image
      src="https://cdn.myanimelist.net/images/anime/11/73923l.jpg"
      // src={item.images.jpg.image_url}
      alt={item.title}
    />
    <Title>{item.title}</Title>
  </Container>
)

export default AnimeItem
