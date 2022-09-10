import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { IAnimeItem } from 'types'

type Props = {
  item: IAnimeItem
}

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 140%;
  border-radius: 10px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
  }
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
    <Link href={`/anime/${item.mal_id}`}>
      <Image
        src={item.images.jpg.image_url}
        alt={item.title}
        layout="fill"
        placeholder="blur"
        blurDataURL={item.images.jpg.small_image_url}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '10px',
        }}
      />
    </Link>
    <Title>{item.title}</Title>
  </Container>
)

export default AnimeItem
