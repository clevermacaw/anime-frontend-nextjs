import styled from 'styled-components'
import SecondaryText from '../secondary_text'
import SearchInput from './search_input'
import Title from '../title'
import Layout from '../layout'

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 14px 0;
  border-bottom: 1px solid #dddddd;
  background: white;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`

type Props = {
  onStartSearch: () => void
}

const Header = ({ onStartSearch }: Props) => {
  return (
    <Wrapper>
      <Layout>
        <Flex>
          <Title>Anime</Title>
          <div className="search-input">
            <SearchInput placeholder="Search..." onClick={onStartSearch} />
          </div>
          <SecondaryText>Today is the 24th of October</SecondaryText>
        </Flex>
      </Layout>
    </Wrapper>
  )
}

export default Header
