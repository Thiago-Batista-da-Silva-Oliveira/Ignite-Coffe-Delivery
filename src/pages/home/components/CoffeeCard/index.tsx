import teste from '../../../../assets/coffee-delivery-logo.svg'
import {CoffeeCardContainer, Tags} from './styles'

export function CoffeeCard () {
    return (
        <CoffeeCardContainer>
           <img alt="teste" src={teste} />
           <Tags>
             <span>tradicional</span>
             <span>com leite</span>
           </Tags>
        </CoffeeCardContainer>
    )
}