import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import introImg from '../../../../assets/intro-img.png'
import { RegularText } from "../../../../components/Typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import {ShoppingCart} from 'phosphor-react'
import { useTheme } from "styled-components";

export function Intro() {
  const {colors} = useTheme()
    return (
        <IntroContainer>
          <IntroContent className="container">
            <div>
               <section>
                  <IntroTitle size="xl">
                     Encontre o café perfeito para qualquer hora do dia
                  </IntroTitle>
                  <RegularText size="l" color="subtitle">
                      Com o Coffe Deliver você recebe seu café onde estiver, a qualquer hora
                  </RegularText>
               </section>
               <BenefitsContainer>
                 <InfoWithIcon 
                 iconBg={colors["brand-yellow-dark"]}
                 text="Compra simples e segura"
                 icon={<ShoppingCart weight="fill" />}/>
                 <p>beneficio</p>
                 <p>beneficio</p>
                 <p>beneficio</p>
               </BenefitsContainer>
            </div>
            <img src={introImg} />
          </IntroContent>
        </IntroContainer>
    )
}