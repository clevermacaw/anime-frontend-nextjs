import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import PuffLoader from 'react-spinners/PuffLoader'
import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background: #999999;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loading = () => {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true)
    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return (
    loading && (
      <Overlay>
        <PuffLoader size={100} color="white" />
      </Overlay>
    )
  )
}

export default Loading
