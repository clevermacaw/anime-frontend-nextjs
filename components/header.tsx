import styled from 'styled-components';
import PrimaryText from './PrimaryText';
import SecondaryText from './SecondaryText';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  box-shadow: 0 1px #dddddd;
`;

function Header() {
  return (
    <Wrapper>
      <PrimaryText>Anime</PrimaryText>
      <SecondaryText>Today is the 24th of October</SecondaryText>
    </Wrapper>
  );
}

export default Header;
