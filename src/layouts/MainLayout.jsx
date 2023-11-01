import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'
import { styled } from 'styled-components'

const MainLayout = () => {
  return (
    <MainNav>
      <Menu />
      <Outlet />
    </MainNav>
  )
}

export default MainLayout

const MainNav = styled.nav`
  display: flex;
`
