import teste from '../../../../assets/coffee-delivery-logo.svg'
import {CoffeeCardContainer, Description, Name, Tags} from './styles'

export function CoffeeCard () {
    return (
        <CoffeeCardContainer>
           <img alt="teste" src={teste} />
           <Tags>
             <span>tradicional</span>
             <span>com leite</span>
           </Tags>
           <Name>Expresso Tradicional</Name>
           <Description>
            O tradicional café feito com água quente e grãos moídos
           </Description>
        </CoffeeCardContainer>
    )
}