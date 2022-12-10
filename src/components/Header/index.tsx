import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import coffeLogoImg from '../../assets/coffee-delivery-logo.svg'
import {MapPin, ShoppingCart} from 'phosphor-react'

export function Header () {
  return (
 <HeaderContainer>
    <div className="container">
      <img src={coffeLogoImg} />
      <HeaderButtonsContainer>
        <HeaderButton variant="purple">
          <MapPin size={20} weight="fill">
            Rio de Janeiro, RJ
          </MapPin>
        </HeaderButton>
        <HeaderButton variant="yellow">
           <ShoppingCart size={20} weight="fill" />
        </HeaderButton>
      </HeaderButtonsContainer>
    </div>
 </HeaderContainer>
  )
}