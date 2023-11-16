import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input'
import {MdEmail, MdLock, MdPerson} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from 'react';

import {Column, Container, SubTitleLogin, Title, TitleLogin, Wrapper, ButtonArea, TextLogin, TextGreen, TitleRegister} from './styles'
import axios from 'axios';

const schema = yup
  .object({
    email: yup.string().email('email não é valido').required('Campo obrigatorio'),
    password: yup.string().min(5, 'Minimo 3 caracteres').required('Campo obrigatorio'),
  })
  .required()

const Register = () => {

    const [user, setUser]  = useState({
        id: '',
        name: '',
        email: '',
        senha: ''
    });

    const valorInput = (e: { target: { name: any; value: any; }; }) => setUser({...user, [e.target.name]: e.target.value})

    const handleClickSignIn = () => {
        navigate('/login');
    }

    const {
        control,
        formState: { errors, isValid },
      } = useForm(
        {resolver: yupResolver(schema), mode: 'onChange',}
      );

      console.log(isValid, errors);
    

      const onPush = () => {
        try {
            axios.post('http://localhost:8001/users/', user);
            alert('Conta criada com sucesso');
            navigate('/login')
        }catch {
            alert('Houve um erro, tente novamente.');
        }
       
      }

    const navigate = useNavigate();

    return (
        <div>
            <Header/>
            <Container>
                <Column flex={2}>
                    <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column flex={1}>
                    <Wrapper>
                       <TitleLogin>Comece agora grátis</TitleLogin> 
                       <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                       <form onSubmit={onPush}>
                        <Input value={user.name} onChange={valorInput} name="name" control={control} placeholder="Nome Completo" leftIcon={<MdPerson/>}/>
                        <Input value={user.email} onChange={valorInput} id="email" name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail/>} />
                        <Input value={user.senha} onChange={valorInput} id="senha" name="senha" control={control} errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <ButtonArea>
                            <Button title="Criar minha conta" variant="secondary" type="submit"/> 
                        </ButtonArea>
                       </form>
                       <TitleRegister>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TitleRegister>
                       <TextLogin>Já tenho conta. <TextGreen onClick={handleClickSignIn}>Fazer login</TextGreen></TextLogin>
                    </Wrapper>
                    
                </Column>
            </Container>
        </div>
    )
}

export {Register};