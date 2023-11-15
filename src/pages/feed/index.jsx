import {Link} from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import {Card} from '../../components/Card'
import { UserInfo } from '../../components/UserInfo';
import { api } from '../../services/api'
import { useState } from 'react';
import { Login } from '../login';

import {Column, Container, Title, TitleHighlight} from './styles'

const Feed = (nome) => {

    return (
        <div>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={78} nome="Matheus Domingos" image="https://avatars.githubusercontent.com/u/134434652?v=4" />
                    <UserInfo percentual={60} nome="Matheus Domingos" image="https://avatars.githubusercontent.com/u/134434652?v=4" />
                    <UserInfo percentual={45} nome="Matheus Domingos" image="https://avatars.githubusercontent.com/u/134434652?v=4" />
                    <UserInfo percentual={20} nome="Matheus Domingos" image="https://avatars.githubusercontent.com/u/134434652?v=4" />
                    <UserInfo percentual={2} nome="Matheus Domingos" image="https://avatars.githubusercontent.com/u/134434652?v=4" />
                </Column>
            </Container>
        </div>
    )
}

export {Feed}