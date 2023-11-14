import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 400px;

`

export const Column = styled.div`
 align-self: flex-start;
 flex: ${({flex}) => flex};
`

export const Row = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 400px;
    margin-bottom: 20px;
    line-height: 44px
    color: #FFF;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubTitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px
`


export const ButtonArea = styled.div`
    display: flex;
    justify-contet: center;
    align-items: center;
    width: 76%;
    height: auto;
    padding: 10px 0;
    margin: 10px 0;
`
export const TextLogin = styled.span`
    margin: -10px 0;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #FFF;
`
export const TextGreen = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #23DD7A;
    transition: filter.3s ease-in-out;

    &:hover {
        filter: brightness(1.5);
        cursor: pointer;
    }
`

export const TitleRegister = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 10px;
    line-height: 25px
`