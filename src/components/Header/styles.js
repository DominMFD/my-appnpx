import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    max-width: 80%;
    heigth: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 12px 0;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    img:hover {
        cursor: pointer;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%
    heigth: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BuscarInputContainer = styled.div`
    width: 175px;
    heigth: 30px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #FFF;
    margin-right: 12px;
    text-decoration: none;
`

export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #FFF;
    margin-right: 12px;
    text-decoration: none;
    transition: color .3s ease-in-out;

    &:hover {
        cursor: pointer;
        color: #E4105D;
    }
`

export const UserPicture = styled.img`
    width: 32px;
    heigth: 32px
    border-radius: 22px;
    border: 2px solid #FFF;
`

export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #FFF;
`
