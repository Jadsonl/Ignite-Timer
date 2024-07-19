import { HeaderContainer } from './styles'
import Logo from '../../assets/logo.svg'

import { Scroll, Timer } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        <a href="#">
          <NavLink to="/" title="Timer">
            <Timer size={24} />
          </NavLink>
        </a>
        <a href="#">
          <NavLink to="/history" title="History">
            <Scroll size={24} />
          </NavLink>
        </a>
      </nav>
    </HeaderContainer>
  )
}
