import styled from 'styled-components'
import Layout from './layout'
import ActionButton from './action_button'
import PrimaryText from './primary_text'

const Wrapper = styled.div`
  padding: 28px 0;
  border-top: 1px solid #dddddd;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Description = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #929292;
`

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Wrapper>
      <Layout>
        <Container>
          <div>
            <PrimaryText>Alex Lim</PrimaryText>
            <Description>
              I found this job on AngelList and feel very excited about it
            </Description>
          </div>
          <ActionButton onClick={handleScrollToTop}>
            <i className="fa-solid fa-chevron-up" />
          </ActionButton>
        </Container>
      </Layout>
    </Wrapper>
  )
}

export default Footer
