import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import introImg from '../../../../assets/intro-img.png'
import { RegularText } from "../../../../components/Typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import {ShoppingCart, Package, Timer,Coffee} from 'phosphor-react'
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
                 <InfoWithIcon 
                 iconBg={colors["base-text"]}
                 text="Embalagem mantém o café intacto"
                 icon={<Package weight="fill" />}/>
                 <InfoWithIcon 
                 iconBg={colors["brand-yellow"]}
                 text="Entrega rápida e rastreada"
                 icon={<Timer weight="fill" />}/>
                 <InfoWithIcon 
                 iconBg={colors["brand-purple"]}
                 text="O café chega fresquinho até você"
                 icon={<Coffee weight="fill" />}/>
               </BenefitsContainer>
            </div>
            <img src={introImg} />
          </IntroContent>
        </IntroContainer>
    )
}