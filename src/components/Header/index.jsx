import React from "react";
import { BuscarInputContainer, Column, Container, Menu, MenuRight, Row, Wrapper, UserPicture, Input } from "./styles";
import {Button} from '../Button'
import logo from '../../assets/image/logodio.svg'
import {useNavigate} from 'react-router-dom';

const Header = ({autenticado}) => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login');
    }

    const handleClickRegister = () => {
        navigate('/register')
    }

    const handleClickHomePage = () => {
        navigate('/');
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da DIO" onClick={handleClickHomePage}/>
                    {autenticado ? (
                    <>
                        <BuscarInputContainer>
                        <Input placeholder="Buscar..." />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>      
                    ):null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/134434652?v=4"/>
                    ): (
                    <>
                        <MenuRight onClick={handleClickHomePage}>Home</MenuRight>
                        <Button onClick={handleClickSignIn} title="Entrar"/>
                        <Button onClick={handleClickRegister} title="Cadastrar" />
                    </>
                    )}       
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}