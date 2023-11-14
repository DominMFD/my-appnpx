import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input'
import {MdEmail, MdLock, MdPerson} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {api} from '../../services/api'

import {Column, Container, SubTitleLogin, Title, TitleLogin, Wrapper, ButtonArea, TextLogin, TextGreen, TitleRegister} from './styles'

const schema = yup
  .object({
    email: yup.string().email('email não é valido').required('Campo obrigatorio'),
    password: yup.string().min(5, 'Minimo 3 caracteres').required('Campo obrigatorio'),
  })
  .required()

const Register = () => {

    const handleClickSignIn = () => {
        navigate('/login');
    }


    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm(
        {resolver: yupResolver(schema), mode: 'onChange',}
      );

      console.log(isValid, errors);
    
      const onSubmit = async formData => {
        try {
            const {data} = await api.get(`http://localhost:8001/users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed');
            } else {
                alert('Email ou senha inválido')
            }
        }catch{
            alert('Houve um erro, tente novamente.')
        }
      };

    const navigate = useNavigate();

    const handleClickLogin = () => {
        navigate('/feed');
    }

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
                       <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="name" control={control} placeholder="Nome Completo" leftIcon={<MdPerson/>}/>
                        <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail/>} />
                        <Input name="password" control={control} errorMessage={errors?.password?.email} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
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

export {Register}