import React from 'react'

import { FiThumbsUp } from 'react-icons/fi'
import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture} from './styles'

const Card = () => {
  return (
   <CardContainer>
    <ImageBackground src="https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg" width="100%" height="180px"/>
    <Content>
        <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/134434652?v=4" />
            <div>
                <h4>Matheus Domingos</h4>
                <p>Há 9 minutos</p>
            </div>
        </UserInfo>
        <PostInfo>
            <h4>Projeto para curso de HTML e CSS</h4>
            <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade....<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
            <h4>#HTML #CSS #JAVASCRIPT</h4>
            <p>
                <FiThumbsUp /> 10
            </p>
        </HasInfo>
    </Content>
   </CardContainer>
  )
}

export {Card}
