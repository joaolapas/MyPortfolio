import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    background: rgba(0, 0, 0, 0.8);
    height: 80px;
    //margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10 ;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;

    }
`


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1400px;
`

export const NavLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 24px;
    text-decoration: none;
    transition: 0.8s all ease;

    &:hover {
        scale: 1.05;
        transition: 0.5s all ease;
    }
`
export const LogoH2= styled.h2`
    font-size: 1.3rem;
    font-weight: bold;
    margin-left: -20px;
    
`
export const LogoP = styled.p`
    font-size: .8rem;
    color: #01ef71;
    letter-spacing: 11px;

`

    
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    
    @media screen and (max-width: 768px) {
    display: none;
    }
`

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background-color: #01bf71;
    white-space: nowrap;
    padding: 10px 20px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .8s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all .2s ease-in-out; 
        background: #01ff71;
        color: #010606 ;
    }
    
`

export const FormContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #000;
    color: #fff;
    margin-top: -80px;


    h1 {
        margin-bottom:30px;

    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 350px;

        input {
            width: 100%;
            height: 40px;
            border-radius: 5px;
            border: none;
            background: #343;
            color: #fff;
            font-size: 24px;
            margin-bottom: 30px;

            &:focus {
                outline: none;
                border: 2px solid #01ef71;
            }
        }
        label {
            color: #01ef71;
            align-self: start;
            margin-bottom: 5px;
        }
        textarea {
            width: 100%;
            height: 200px;
            background: #343;
            color: #fff;
            font-size: 24px;
            margin-bottom: 30px;
            border-radius: 5px;

            &:focus {
                outline: none;
                border: 2px solid #01ef71;
            }
        }

        button {
            font-size: 24px;
            padding: 10px 40px;
            border-radius: 50px;
            border: none;
            background: #01bf71;
            color: #000;
            transition: all .3s ease-in-out;

            &:hover {
                background: #01ff71;
                transition: all .3s ease-in-out;
        }
    }
`
    