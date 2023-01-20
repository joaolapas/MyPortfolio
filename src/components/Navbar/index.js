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
            <Nav modalIsOpen={props.modalIsOpen}>
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
                            <NavLinks to='home' activeStyle={true} spy={true} smooth={true} offset={-200} duration={500}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about' activeStyle={true} spy={true} smooth={true} offset={-60} duration={500}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects' activeStyle={true} spy={true} smooth={true} offset={-50} duration={500}>Projects</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/contact-form'>Mensage Me</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
