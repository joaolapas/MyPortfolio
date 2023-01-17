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
          <SidebarLink to="home" onClick={props.toggle}>Home</SidebarLink>
          <SidebarLink to="about" onClick={props.toggle}>About</SidebarLink>
          <SidebarLink to="projects" onClick={props.toggle}>Projects</SidebarLink>
          
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/messageme' onClick={props.toggle}>Message Me</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
