import React from "react";
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarRoute, 
    SidebarLink, 
    SideBtnWrap,
    SidebarMenu } from "./SidebarElements";

const Sidebar = (props) => {
  return (
    <SidebarContainer isOpen={props.isOpen}>
      <Icon onClick={props.toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='home'  spy={true} smooth={true} offset={-200} duration={500} onClick={props.toggle}>Home</SidebarLink>
          <SidebarLink to='about'  spy={true} smooth={true} offset={-80} duration={500} onClick={props.toggle}>About</SidebarLink>
          <SidebarLink to="projects" spy={true} smooth={true} offset={-50} duration={500} onClick={props.toggle}>Projects</SidebarLink>
          
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/contact-form' onClick={props.toggle}>Message Me</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
