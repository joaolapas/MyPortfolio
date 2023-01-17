import React from 'react'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavItem, 
    NavLinks, 
    NavMenu,
    NavBtn,
    NavBtnLink,
    LogoH2,
    LogoP
} from './NavbarElements'
import { FaBars } from 'react-icons/fa'

const Navbar = (props) => {
    
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <LogoH2><span style={{color:'#01bf71'}}>MY</span>PORTFOLIO</LogoH2>
                        <LogoP>JOÃO LAPAS</LogoP>
                    
                    </NavLogo>     
                    <MobileIcon onClick={props.toggle}>
                        <FaBars />
                    </MobileIcon> 
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='home'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects'>Projects</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/messageme'>Mensage Me</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
