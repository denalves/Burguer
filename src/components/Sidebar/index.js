import React from "react";

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap
  } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle} >
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Burguers</SidebarLink>
        <SidebarLink to="/">Combos</SidebarLink>
        <SidebarLink to="/">Delivery</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Pedir agora</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
