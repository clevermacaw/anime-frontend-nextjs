import styled from 'styled-components'
import PrimaryText from '../primary_text'
import SecondaryText from '../secondary_text'
import SearchInput from './search_input'
import Layout from '../layout'

const Wrapper = styled.div`
  padding: 14px 0;
  box-shadow: 0 1px #dddddd;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`

function Header() {
  return (
    <Wrapper>
      <Layout>
        <Flex>
          <PrimaryText>Anime</PrimaryText>
          <div className="search-input">
            <SearchInput placeholder="Search..." />
          </div>
          <SecondaryText>Today is the 24th of October</SecondaryText>
        </Flex>
      </Layout>
    </Wrapper>
  )
}

export default Header
