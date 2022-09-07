import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import Layout from 'components/layout'
import PrimaryText from 'components/primary_text'
import Title from 'components/title'
import InfoItem from 'components/anime/anime_info_item'
import NumberItem from 'components/anime/anime_info_number_item'
import { getAnimeById } from 'api'
import { IAnimeItem } from 'types'

type Props = {
  item: IAnimeItem
}

const Container = styled.div`
  padding: 24px 0;

  @media screen and (min-width: 768px) {
    padding: 100px 0;
  }
`

const BackLink = styled.span`
  &:hover {
    cursor: pointer;
  }
`

const TitleSection = styled.div`
  display: flex;
  align-items: center;
`

const ApprovedIcon = styled.div`
  color: #20bf12;
  font-size: 24px;
  padding: 0 12px;
`

const Main = styled.div`
  display: grid;
  grid-template-columns: auto;
  row-gap: 16px;
  margin-top: 25px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 40% 60%;
    margin-top: 50px;
  }
`

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 54px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 40% 60%;
    padding-left: 20px;
  }
`

const LineContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const NumberContent = styled.div`
  display: flex;
  justify-content: space-between;
`

const Description = styled.div`
  margin-top: 28px;

  @media screen and (min-width: 768px) {
    margin-top: 34px;
  }
`

const Details = ({ item }: Props) => {
  if (!item) return null

  return (
    <Layout>
      <Container>
        <PrimaryText>
          <Link href="/anime">
            <BackLink>
              <i className="fa-solid fa-angle-left mr-2" />
              Go back to Main
            </BackLink>
          </Link>
        </PrimaryText>
        <Main>
          <Image
            src={item.images?.jpg?.large_image_url}
            placeholder="blur"
            blurDataURL={item.images?.jpg?.small_image_url}
            alt={item.title}
            layout="responsive"
            width={300}
            height={335}
            style={{
              borderRadius: '10px',
            }}
          />
          <Information>
            <TitleSection>
              <Title>{item.title}</Title>
              {item.approved && (
                <ApprovedIcon>
                  <i className="fa-solid fa-circle-check" />
                </ApprovedIcon>
              )}
            </TitleSection>
            <LineContent>
              <InfoItem label="Type" value={item.type} />
              <InfoItem label="Source" value={item.source} />
              <InfoItem label="Episodes" value={item.episodes} />
              <InfoItem label="Status" value={item.status} />
            </LineContent>
            <NumberContent>
              <NumberItem label="Score" value={item.score} />
              <NumberItem label="Rank" value={item.rank} />
              <NumberItem label="Popularity" value={item.popularity} />
            </NumberContent>
          </Information>
        </Main>
        <Description>
          <PrimaryText styles={{ fontWeight: 'bold' }}>Description</PrimaryText>
          <PrimaryText styles={{ marginTop: 24 }}>{item.synopsis}</PrimaryText>
        </Description>
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = parseInt(context?.params?.id as string)
  const anime = await getAnimeById({ id })

  return {
    props: {
      item: anime,
    },
  }
}

export default Details
