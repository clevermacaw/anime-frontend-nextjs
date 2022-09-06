import PuffLoader from 'react-spinners/PuffLoader'
import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loader = () => (
  <Overlay>
    <PuffLoader size={100} color="white" />
  </Overlay>
)

export default Loader
