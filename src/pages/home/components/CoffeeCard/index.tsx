import teste from '../../../../assets/coffee-delivery-logo.svg'
import {CoffeeCardContainer} from './styles'

export function CoffeeCard () {
    return (
        <CoffeeCardContainer>
           <img alt="teste" src={teste} />
        </CoffeeCardContainer>
    )
}