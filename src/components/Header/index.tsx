import { HeaderContainer, HeaderContent } from './styles'

import logoImg from '../../assets/Logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="logo" />

        <NewTransactionModal />
      </HeaderContent>
    </HeaderContainer>
  )
}
