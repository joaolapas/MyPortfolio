import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    background: rgba(0, 0, 0, 0.8);
    height: 80px;
    //margin-top: -80px;
    display: ${({modalIsOpen}) => (modalIsOpen? 'none' : 'flex')};
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
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        color: #fff;  
        display: flex;
        position: absolute;
        top: 25px;
        right: 25px;
        //align-items: center;
        transform: translate(-100, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
` 
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 70px;

    @media screen and (max-width: 768px) {
        display: none;

    }
`
export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    border-bottom: 3px solid transparent;
    transition: all .3s ease-in-out;
    
    &:hover {
        color: #01ef71;
        transition: all .3s ease-in-out;
    }

    &.active {
        border-bottom: 3px solid #01ff71;
        transition: all .1s ease-in-out;
    }
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
    