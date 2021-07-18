import React from 'react'
import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import { menuData } from "../data/MenuData";
import { Link } from "gatsby";

const Sidebar = ({isOpen,toogle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toogle}>
            <Icon onClick={toogle}>
                <CloseIcon/>
            </Icon>
        <SidebarWrapper>
            <SidebarMenu>        
            {menuData.map((item,index) => (
                            <SidebarLink to={item.link} key={index} onClick={toogle}>
                            {item.title}
                            </SidebarLink>
                ))}        
                {/* <SidebarLink to="findtutor" onClick={toogle}>Browse Job</SidebarLink>
                <SidebarLink to="howitwork" onClick={toogle}>How It Works</SidebarLink>
                <SidebarLink to="becometutor" onClick={toogle}>About</SidebarLink>
                <SidebarLink to="about" onClick={toogle}>Become Freelancer</SidebarLink> */}
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/login">
                    Connect
                </SidebarRoute>
            </SideBtnWrap>
            <SideBtnWrap>
            <SidebarRoute to="/signup">
                    Post Project
                </SidebarRoute>
            </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar


 const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #077BF1;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    
`;

 const CloseIcon = styled(FaTimes)`
    color: #fff;
`

 const Icon = styled.div`
    position:absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

`;

 const SidebarWrapper = styled.div`
    color: #000;
`;

 const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`;

 const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    margin-top: 130px;

    &:hover {
        color: #fff;
        transition: 0.2s ease-in-out;
        text-decoration:none;
    }
`;

 const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;

`;

 const SidebarRoute = styled(Link)`
    border-radius: 50px;
    background: #014FB9;
    white-space: nowrap;
    padding: 12px 60px;
    color: #fff ;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-bottom: 10px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        text-decoration:none;
    }
`;