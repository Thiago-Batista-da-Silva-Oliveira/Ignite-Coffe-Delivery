import { Intro } from "./components/intro"
import { OurCoffess } from "./components/OurCoffees"
import { HomeContainer } from "./styles"


export const HomePage = () => {
    return (
       <HomeContainer>
         <Intro />
         <OurCoffess />
       </HomeContainer>
    )
}